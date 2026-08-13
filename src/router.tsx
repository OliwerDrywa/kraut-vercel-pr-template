import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from '@tanstack/solid-router'
import { For } from 'solid-js'
import { workflowSteps } from './app'

function RootLayout() {
  return <Outlet />
}

function HomePage() {
  return (
    <main class='shell'>
      <p class='eyebrow'>KRAUT × SOFTWARE LOOP</p>
      <h1>
        Ship the idea.
        <br />
        <span>Check the preview.</span>
      </h1>
      <p class='lede'>
        A clean Vercel preview is created for every pull request. Open it on your phone,
        test the change, then merge with confidence.
      </p>
      <section class='card' aria-labelledby='pipeline-heading'>
        <strong id='pipeline-heading'>PR preview pipeline</strong>
        <ol>
          <For each={workflowSteps}>{(step) => <li>{step}</li>}</For>
        </ol>
      </section>
    </main>
  )
}

const rootRoute = createRootRoute({
  component: RootLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

const routeTree = rootRoute.addChildren([indexRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/solid-router' {
  interface Register {
    router: typeof router
  }
}
