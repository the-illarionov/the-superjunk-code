// @ts-nocheck
export default function stripper() {
	return {
		name: "stripper",
		apply: "build",
		/* renderChunk(code, chunk) {
			// здесь надо будет делать перед обфускацией расставлять метки
			// https://rollupjs.org/guide/en/#renderchunk
		}, */
		closeBundle() {
			if (process.argv.indexOf("--ssrManifest") > -1) {
				const fs = require("fs")
				const path = require("path")

				const assetDir = path.resolve(__dirname, "../dist/assets")
				const hashRE = /(^(?!.*index).*)\.js$/
				/* const staticInjectMarkerRE =
					/\b(const _hoisted_\d+ = \/\*(?:#|@)__PURE__\*\/\s*createStaticVNode)\("(.*)", (\d+)\)/g
				const staticStripRE =
					/['"`]__VP_STATIC_START__[^]*?__VP_STATIC_END__['"`]/g
				const staticRestoreRE = /__VP_STATIC_(START|END)__/g */

				fs.readdir(assetDir, (err, files) => {
					files.forEach((originalFilename) => {
						if (originalFilename.match(hashRE)) {
							// здесь сделать чтобы без index
							const originalDir =
								assetDir + "/" + originalFilename

							const newDir = originalDir.replace(
								/\.js$/,
								".stripped.js"
							)

							fs.readFile(originalDir, "utf-8", (err, data) => {
								const stripped = data.replace(
									/createStaticVNode\([^)]+, (\d+)\)/g,
									`createStaticVNode("", $1)`
								)
								fs.writeFile(newDir, stripped, "utf-8", () => {
									console.log(
										"created stripped for " + newDir
									)
								})
							})
						}
					})
				})
			}
		},
	}
}
