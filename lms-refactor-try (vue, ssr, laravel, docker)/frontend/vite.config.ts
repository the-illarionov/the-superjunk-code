import { fileURLToPath, URL } from "url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import stripper from "./ssr/stripper.js"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), stripper()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	server: {
		host: true,
		port: 3000,
		hmr: {
			clientPort: process.env.LMS_PORT || 3000,
		},
	},
})
