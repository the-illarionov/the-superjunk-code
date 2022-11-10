<template>
	<div></div>
</template>
<script>
import initView from "@/common/InitView"

export default {
	...initView({
		url: `/courses/:course_url/lessons/:lesson_number`
	}),
	setup() {
		return {}
	},
	components: {}
}
</script>
