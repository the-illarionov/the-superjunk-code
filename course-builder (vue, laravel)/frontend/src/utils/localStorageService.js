function isAvailable() {
	try {
		localStorage.setItem("test", "test");
		localStorage.removeItem("test");
		return true;
	} catch(e) {
		return false;
	}
}

export default {
	set(key, value) {
		if(isAvailable) localStorage.setItem(key, JSON.stringify(value));
	},
	get(key) {
		if(isAvailable && localStorage.getItem(key)) {
			return JSON.parse(localStorage.getItem(key));
		}
		return false;
	}
}