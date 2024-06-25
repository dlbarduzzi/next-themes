import { siteConfig } from "@/lib/site"
import { Container } from "./container"

import { cn } from "@/lib/utils"

export function Footer() {
  return (
    <footer
      className={cn(
        "border-t border-t-gray-200 bg-white",
        "dark:border-t-neutral-800 dark:bg-neutral-900"
      )}
    >
      <Container className="py-5">
        <div
          className={cn(
            "flex flex-col items-center justify-center",
            "text-sm text-gray-500 sm:flex-row dark:text-neutral-400"
          )}
        >
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}, Inc.
          </p>
          <p>
            <span className="hidden sm:inline-block">&nbsp;</span>All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
