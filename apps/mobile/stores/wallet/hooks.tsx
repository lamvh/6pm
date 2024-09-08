import { useQuery } from '@tanstack/react-query'
import { keyBy } from 'lodash-es'
import { useMemo } from 'react'
import type { StoreHookQueryOptions } from '../core/stores'
import { walletQueries } from './queries'
import { useWalletStore } from './store'

export const useWalletListQueryOptions = (
  queryOptions?: StoreHookQueryOptions,
) => {
  const wallets = useWalletStore().wallets
  const setWalletsState = useWalletStore((state) => state.setWallets)
  return {
    ...walletQueries.all({ setWalletsState }),
    initialData: wallets?.length > 0 ? wallets : undefined,
    ...queryOptions,
  }
}

export const useWalletList = (queryOptions?: StoreHookQueryOptions) => {
  const wallets = useWalletStore().wallets
  const queryOpts = useWalletListQueryOptions(queryOptions)

  const query = useQuery(queryOpts)

  const walletsDict = useMemo(() => keyBy(wallets, 'id'), [wallets])

  return {
    ...query,
    wallets,
    walletsDict,
  }
}

export const useWallet = (walletId: string) => {
  const wallets = useWalletStore().wallets
  const wallet = useMemo(
    () => wallets.find((wallet) => wallet.id === walletId) || null,
    [wallets, walletId],
  )

  return { wallet }
}

export const useUpdateWallet = () => {}

export const useCreateWallet = () => {}

export const useDeleteWallet = () => {}
