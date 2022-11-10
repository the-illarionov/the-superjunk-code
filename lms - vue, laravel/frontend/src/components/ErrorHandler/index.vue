<template>
	<div>
		<div v-if="error.status === 403">
			<div v-if="error.data.type === 'authorization'">
				У вас нет доступа.
			</div>
			<div v-else-if="error.data.type === 'authentication'">
				Для доступа необходимо авторизоваться:
				<login />
			</div>
			<div v-else-if="error.data.type === 'view_restriction'">
				<div v-if="error.data.data.type === 'completion'">
					Необходимо пройти урок
					{{ error.data.data.required_lesson }}
				</div>
				<div v-else-if="error.data.data.type === 'payment'">
					Необходимо оплатить, ссылка на оплату
				</div>
				<closed-applications
					v-else-if="error.data.data.type === 'closed_applications'"
					:school_url="error.data.data.school_url"
				/>
			</div>
		</div>
		<div v-if="error.status === 404">
			<div v-if="error.data.type === 'locale_not_found'">
				Этого ресурса нет на выбранном языке, попробуйте поменять
			</div>
			<error-404 v-else />
		</div>
		<div v-else-if="error.status === 500">500 error handler</div>
	</div>
</template>
<script>
import Login from "@/components/Login"
import ClosedApplications from "@/components/Courses/Course/ClosedApplications"
import Error404 from "./404"

export default {
	setup() {},
	props: {
		error: {
			required: true
		}
	},
	components: {
		Login,
		ClosedApplications,
		Error404
	}
}
</script>
