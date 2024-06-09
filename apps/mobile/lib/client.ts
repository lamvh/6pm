import { AppType } from "@6pm/api";
import { getClerkInstance } from "@clerk/clerk-expo"
import { QueryClient } from "@tanstack/react-query";
import { tokenCache } from "./cache";
import { hc } from "hono/client";

export const clerk = getClerkInstance({ publishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY, tokenCache });

export const getHonoClient = async () => {
  const token = await clerk.session?.getToken()
  return hc<AppType>(process.env.EXPO_PUBLIC_API_URL!, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}

export const queryClient = new QueryClient()
