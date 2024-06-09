import { Avatar, AvatarFallback, AvatarImage } from '@/components/Avatar'
import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { IconButton } from '@/components/IconButton'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import { LogOutIcon, PencilIcon, SwatchBookIcon } from 'lucide-react-native'
import { Alert, ScrollView, Text, View } from 'react-native'

export default function SettingsScreen() {
  const { signOut } = useAuth()
  const { user } = useUser()

  return (
    <ScrollView contentContainerClassName="py-4 gap-4" className="bg-card">
      <View className="bg-muted rounded-lg mx-6 px-4 py-3 justify-end h-40">
        <View className="flex flex-row items-center gap-2 justify-between">
          <View className="flex flex-row items-center gap-3">
            <Avatar className="w-12 h-12">
              <AvatarImage
                source={{
                  uri: user?.imageUrl,
                }}
              />
              <AvatarFallback>QK</AvatarFallback>
            </Avatar>
            <View>
              <Badge
                variant="secondary"
                label="Free"
                className="self-start rounded-md mb-1"
              />
              <Text className="font-medium text-primary">
                {user?.fullName ?? user?.primaryEmailAddress?.emailAddress}
              </Text>
            </View>
          </View>
          <IconButton icon={PencilIcon} size="sm" variant="ghost" />
        </View>
      </View>
      <View className="gap-2 mt-4">
        <Text className="font-sans mx-6 text-muted-foreground">
          App settings
        </Text>
        <Link href="/appearance" asChild>
          <Button
            label="Appearance"
            variant="ghost"
            labelClasses="font-regular"
            leftIcon={SwatchBookIcon}
            className="justify-start gap-6 px-6 flex-1"
          />
        </Link>
      </View>
      <View className="gap-2 mt-4">
        <Text className="font-sans mx-6 text-muted-foreground">Others</Text>
        <Button
          label="Sign out"
          variant="ghost"
          onPress={() => Alert.alert('Are you sure you want to sign out?', '', [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Sign out',
              style: 'destructive',
              onPress: () => signOut(),
            },
          ])}
          labelClasses="text-red-500 font-regular"
          leftIcon={LogOutIcon}
          className="justify-start gap-6 px-6"
        />
      </View>
    </ScrollView>
  )
}
