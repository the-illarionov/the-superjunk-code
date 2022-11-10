const fs = require("fs")

fs.readFile("ru.txt", "utf8", function (error, data) {
	const words = data.split("\n")
	const sorted = words.sort((a, b) => a.length - b.length)

	fs.writeFile("./ru-sorted.txt", JSON.stringify(sorted), (err) => {
		console.log("err", err)
	})
})
