import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

function rewriteDashboardPath(req) {
  if (!req.url) return
  const q = req.url.indexOf('?')
  const path = q === -1 ? req.url : req.url.slice(0, q)
  const search = q === -1 ? '' : req.url.slice(q)
  if (path === '/dashboard') {
    req.url = `/dashboard/${search}`
  }
}

function dashboardRoutePlugin() {
  return {
    name: 'dashboard-route',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewriteDashboardPath(req)
        next()
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewriteDashboardPath(req)
        next()
      })
    },
  }
}

export default defineConfig({
  root: '.',
  plugins: [dashboardRoutePlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'),
        dashboard: resolve(__dirname, 'dashboard/index.html'),
      },
    },
  },
})
