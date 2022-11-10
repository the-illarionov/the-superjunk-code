// @ts-nocheck
const fs = require("fs")
const path = require("path")

const toAbsolute = (p) => path.resolve(__dirname, p)

const manifest = require("../dist/ssr-manifest.json")
const template = fs.readFileSync(toAbsolute("../dist/index.html"), "utf-8")

const { render, routes } = require("./bundle/render.js")

;(async () => {
	for (const route of routes) {
		if (route.meta?.ssg) {
			const [appHtml, preloadLinks] = await render(route.path, manifest)

			const html = template
				.replace(`<!--preload-links-->`, preloadLinks)
				.replace(`<!--app-html-->`, appHtml)

			const filePath = `../dist/${
				route.path === "/" ? "/index" : route.path
			}.html`
			fs.writeFileSync(toAbsolute(filePath), html)
		}
	}
})()

/* import fs from "fs"
import { URL } from "url"

import manifest from "../dist/ssr-manifest.json" assert { type: "json" }
import { render } from './render.js'
import routes from '../src/router/index.ts'

const toAbsolute = (p) => new URL(p, import.meta.url)
const template = fs.readFileSync(toAbsolute("../dist/index.html"), "utf-8")

console.log(routes) */
