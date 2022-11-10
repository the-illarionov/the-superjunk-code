<template>
	{{ test.test }}
</template>
<script>
export default {
	setup() {
		class Test {
			get test() {
				return 'aaa'
			}
		}

		const test = new Test

		return {
			test			
		}
	},
	mounted() {
		
	},
	components: {
		
	}
}
</script>