<template>
	<div class="profile_parent">
        <div v-if="correct">
            <h1> {{ response.name }} </h1>
        </div>
        <div v-if="!correct">
            Нет страницы с таким адресом
        </div>
        <div v-if="isAdmin">
            <span class="button" @click="newPass = true"> Поменяю пароль </span>
            <span class="button" @click="newName = true"> Поменяю название </span>
            <!--
                #TODO
                Настройки подписки должны быть в профиле
            <button>Настройки подписки</button>
            -->
        </div>

		<modal :fromjs="false" type='transparent' @hide="newPass = false" v-if="newPass">
            <input v-model="new_pass" placeholder="Пароль">
            <p><input type="submit" @click="change_pass" value="Меняю"></p>
		</modal>

		<modal :fromjs="false" type='transparent' @hide="newName = false" v-if="newName">
            <input v-model="user.name" placeholder="Название">
            <p><input type="submit" @click="submit" value="Меняю"></p>
		</modal>
        <!--
            Их можно либо закомментить, либо допилить
        -->
        <!--
        <h1> Папки: </h1>
        <div class="card_container">
            <div v-for="folder in this.folders.normal" v-bind:key="folder.id" class="card">
                <h2>  {{ folder.name }} </h2>
            </div>
        </div>
        -->
        <h1> Уроки: </h1>
        <div>
            
            <div class="button mb-3" @click="createLongread"  v-if="isAdmin">
                Добавлю лонгрид
            </div>
            <div v-for="longread in this.longreads[this.defaultFolder]" v-bind:key="longread.id" class="button" @click="openLongread(longread.slug)">
                <h3>  {{ longread.name }} </h3>
                <p class="longread-link"> 
                    https://interactor.su/{{ slug + '/' + longread.slug }}
                </p>
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
        this.slug = this.$route.params.user
        this.findUser()
    },
	data() {
		return {
            slug: '',
            response: '',
            correct: false,
            isAdmin: false,
            page: '',
            defaultFolder: 0,
            user: {
                name: '',
                slug: '',
            },
            newPass: false,
            newName: false,
            new_pass: '',
            folders: '',
            longreads: ''
		}
	},
	methods: {
        change_pass: function() {
            let token = localStorage.getItem('token');
            let self = this
            axios({ 
                method: 'POST', 
                url: self.$store.state.api_url + 'changepass',
                headers: {
                    Authorization: "Bearer " + token
                },
                data: {
					pass: self.new_pass,
					token: token
                }
            })
			.then(function (response) {
                
				self.$modal.methods.open('info','Пароль изменён!')
                console.log(response.data)
                self.new_pass = ''
                self.newPass = false
			})
			.catch(function (error) {
				console.log(error.response);
				let errorText = '';
				for(let key in error.response.data) {
					errorText = errorText + ' ' + error.response.data[key]
				}
				
				self.$modal.methods.open('error',errorText)
			});
        },
        openLongread: function(slug) {
            if (this.isAdmin) {
                this.$router.push(this.$router.currentRoute.path + '/' + slug+ '/edit');
            } else {
                this.$router.push(this.$router.currentRoute.path + '/' + slug);
            }
        },
        createLongread: function() {
            let self = this
			localStorage.removeItem("longread_structure");
            localStorage.removeItem("longread_options");
            
            let longread_structure = "[]";

            let token = localStorage.getItem('token');
			
			let password_options = {
				use_pass: false,
				pass: ''
            }
            
            let style_options = {
                file: false,
                value: ''
            }

			let options = {
                password_options: password_options,
                style_options: style_options,
			}

            options = JSON.stringify(options)
            localStorage.setItem('longread_options', options)
            axios({ 
                method: 'POST', 
                url: self.$store.state.api_url + 'create',
                headers: {
                    Authorization: "Bearer " + token
                },
                data: {
					slug: self.slug,
					name: self.name,
					longread_structure: longread_structure,
					longread_options: options,
					token: token
                }
            })
			.then(function (response) {
                self.openLongread(response.data.new.slug)
                self.folders = response.data.folders
                self.longreads = response.data.longreads
			})
			.catch(function (error) {
				console.log(error.response);
				let errorText = '';
				for(let key in error.response.data) {
					errorText = errorText + ' ' + error.response.data[key]
				}
				
				self.$modal.methods.open('error',errorText)
			});
        },
        findUser: function() {
            let self = this
            axios({ 
                method: 'POST', 
                url: self.$store.state.api_url + 'slug',
                data: {
                    slug: self.slug
                }
            })
			.then(function (response) {
                console.log(response.data)
                self.folders = response.data.folders
                self.longreads = response.data.longreads
                self.response = response.data.user
                self.page = response.data.user
                if (response.data.user.id) {
                    self.correct = true
                    if(localStorage.getItem('user_slug') == response.data.user.slug ) {
                        self.isAdmin = true
                        self.user.name = response.data.name
                        self.user.slug = response.data.slug
                    }
                    self.renderProfile()
                }
			})
			.catch(function (error) {
				console.log(error.response);
			});
        },
        renderProfile: function() {
            this.defaultFolder = this.folders.unnamed[0].id
            this.$store.commit("setLoadedPage", true)
        },
		submit: function() {
            let token = localStorage.getItem('token')
            let self = this
            axios({ 
                method: 'POST', 
                url: self.$store.state.api_url + 'updateprofile',
                headers: {
                    Authorization: "Bearer " + token
                },
                data: {
                    name: self.user.name,
                    token: token,
                    id: self.response.id
                }
            })
			.then(function (response) {
                console.log(response.data)
                localStorage.setItem('user_slug',response.data.user.slug)
                self.response.name = response.data.user.name
                self.$store.state.user_slug = response.data.user.slug
				self.$router.push('/'+response.data.user.slug)
				
				self.$modal.methods.open('info','Готово!')
			})
			.catch(function (error) {
				console.log(error.response);
			});
		}
	}
}
</script>
