<template>
	<div class="profile_parent">
        <h1> Пользователи: </h1>
        <div>
            <div v-for="user in this.users" v-bind:key="user.id" class="button" @click="$router.push(user.slug)">
                <h3>  {{ user.name }} </h3>
                <p>  {{ user.email }} </p>
                <p> Лонгридов: {{ user.longreads }} </p>
            </div>
        </div>
	</div>
</template>

<style scoped>
.profile_parent {
    padding: 0 20vw;
}
@media screen and (max-width: 991px) {
    .profile_parent {
        padding: 0 5vw;
    }
}
</style>

<script>
import axios from 'axios'
export default {
	beforeDestroy() {
		this.$store.commit("setLoadedPage", false)
	},
    mounted: function() {
        this.getData()
    },
	data() {
		return {
            users: '',
            feedback: '',
		}
	},
	methods: {
        getData: function() {
            let self = this
			let token = localStorage.getItem('token');
            axios({ 
                method: 'POST', 
                url: self.$store.state.api_url + 'adminpanel',
                headers: {
                    Authorization: "Bearer " + token
                },
            })
			.then(function (response) {
                console.log(response.data)
                self.users = response.data.users
                self.renderProfile()
			})
			.catch(function (error) {
				self.$store.commit("setLoadedPage", true)
				console.log(error.response);
				self.$modal.methods.open('error',error.response.data.message)
			});
        },
        renderProfile: function() {
            this.$store.commit("setLoadedPage", true)
        },
	}
}
</script>
