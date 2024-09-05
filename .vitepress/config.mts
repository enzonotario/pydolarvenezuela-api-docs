import { defineConfig } from 'vitepress'
import { useSidebar, useOpenapi } from 'vitepress-theme-openapi'
import spec from '../public/openapi.json' assert { type: 'json' }

const openapi = useOpenapi()
openapi.setSpec(spec)
const sidebar = useSidebar()

export default defineConfig({
  title: "PyDolarVenezuela API Docs",
  description: "A VitePress Site",
  themeConfig: {
    sidebar: [
      ...sidebar.generateSidebarGroups(),
    ],
  },
})
