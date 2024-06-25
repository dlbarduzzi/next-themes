import { Container } from "@/components/container"

import { cn } from "@/lib/utils"

export default function Page() {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <section aria-labelledby="home-page">
        <h2 id="home-page" className="sr-only">
          Home page
        </h2>
      </section>
      <Container className="py-8">
        <div
          className={cn(
            "mx-auto max-w-4xl rounded-xl px-4 py-8 text-center sm:py-24",
            "bg-gray-100 dark:bg-neutral-800/50 sm:py-24"
          )}
        >
          <h1
            className={cn(
              "text-balance text-xl font-bold uppercase tracking-tight sm:text-3xl",
              "text-gray-900 dark:text-neutral-100"
            )}
          >
            Light and Dark Themes
          </h1>
        </div>
      </Container>
    </div>
  )
}
