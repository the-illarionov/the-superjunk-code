const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if(!entry.isIntersecting) return

		entry.target.src = entry.target.dataset.src
		observer.unobserve(entry.target)
	})
}, {
	rootMargin: "50px",
	threshold: 0,
})

export default observer