import { env } from "@/lib/env"

export type SiteConfig = {
  name: string
  description: string
  url: string
}

export const siteConfig: SiteConfig = {
  name: "Napp",
  description: "Next.js themes app.",
  url: env.NEXT_PUBLIC_APP_URL,
}
