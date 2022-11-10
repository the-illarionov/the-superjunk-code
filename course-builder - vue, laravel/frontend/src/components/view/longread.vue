<template>
	<div class="ld" :class="{ 'ld-loading' : !media_loaded  }">
		<div class="ld-tools" v-if="is_author && $route.name != 'demo'">
			<div>
				Название
				<input class="text-field" v-model="$store.state.longread.longread.name">
			</div>
			<span class="button" @click="saveName">
				Сохранить имя
			</span>
			<span class="button" @click="settings_show = true">
				Настройки доступа
			</span>
			<span class="button" @click="settings_style = true">
				Стиль
			</span>
			<!--
			<span class="button" @click="index_number = true">
				Порядковый номер
			</span>
			-->
			<span class="button" @click="share">
				Поделиться
			</span>
			<span class="button" @click="delete_ld = true">
				Удалить
			</span>
		</div>
		<template v-for="(element, index) in $store.state.longread.structure">
			<ld-add-element
				v-if="$store.state.longread.is_editing && $store.state.longread.structure.length > 1 && index > 0 && element.is_editing"
				:index="index"
				:root="true"
				:key="'ldadd' + element.subtype + index" />

			<transition name="top-to-bottom" :key="'trans' + element.subtype + index">
				<ld-container 
					:key="element.subtype + index"
					:m_map="[ index ]">
				</ld-container>
			</transition>

		</template>
		<!--
		<transition-group tag="div" name="top-to-bottom">
			<ld-container 
				v-for="(element, index) in $store.state.longread.structure" 
				:key="element.subtype + index"
				:m_map="[ index ]">
			</ld-container>
		</transition-group>
		-->
		<p v-if="$store.state.longread.structure.length == 0 && $store.state.longread.is_author" style="text-align: center; padding: 100px 0 0">Начни с добавления элемента:</p>

		<transition name="top-to-bottom">
			<ld-add-element
				class="active"
				v-if="$store.state.longread.is_editing"
				:index="$store.state.longread.structure.length"
				:root="true" />
		</transition>

		<div class="ld-navigation" v-if="headers.length > 0">
			<ul class="ld-navigation-items">
				<li v-for="(header, index) in headers" :key="'header' + index" @click="scrollTo(header)">
					<span class="ld-navigation-link" v-html="header.innerHTML"></span>
				</li>
			</ul>
		</div>
		<!-- must exist, but be always hidden -->
		<p ref='link_longread' v-show='!hidden'> 
			https://interactor.su/{{ $store.state.user_slug + '/' + $store.state.longread.longread.slug }}
		</p>

		<modal :fromjs="false" type='transparent' @hide="settings_show = false" v-if="settings_show">
			<span style="font-size:12px;">При включении для доступа к вашему лонгриду будет необходимо ввести пароль</span>
			<br/>
			<input type="checkbox" name="pass" v-model="$store.state.longread.options.password_options.use_pass" >
			<label for="pass">Доступ по паролю</label>
			<div v-if="$store.state.longread.options.password_options.use_pass">
				<p>Введите пароль для доступа: </p>
				<input v-model="$store.state.longread.options.password_options.pass" placeholder="Пароль">
			</div>
		</modal>
		<!--
			#TODO
			добавить возможность загрузить стили файлом (css)
		-->
		<modal :fromjs="false" type='transparent' @hide="settings_style = false" v-if="settings_style">
			<!--
			<div 
				class="button mb-3 text-center" 
				v-show="!$store.state.longread.options.style_options.file" 
				@click="$store.state.longread.options.style_options.file=!$store.state.longread.options.style_options.file" 
				key="text">Использую файл</div>
			<div 
				class="button mb-3 text-center" 
				v-show="$store.state.longread.options.style_options.file" 
				@click="$store.state.longread.options.style_options.file=!$store.state.longread.options.style_options.file" 
				key="file">Использую текст</div>
			-->
			<textarea class='textarea-style' v-show="!$store.state.longread.options.style_options.file" v-model="$store.state.longread.options.style_options.value">
			</textarea>
			
			<dropzone
				type="css"
				:file='$store.state.longread.options.style_options.value'
				:url="$store.state.api_url + 'uploadstyle'"
				v-on:change_src="change_style_src()"
				v-if="$store.state.longread.options.style_options.file">
			</dropzone>
			
		</modal>

		<modal :fromjs="false" type='transparent' @hide="index_number = false" v-if="index_number">
			<input type="checkbox" name="pass" v-model="$store.state.longread.options.password_options.use_pass" >
		</modal>

		<modal :fromjs="false" type='transparent' @hide="delete_ld = false" v-if="delete_ld">
			<p>Для удаления введите название </p>
			<input v-model="deletion_name" placeholder="Название">
			<button class="modal-default-button" @click="delete_confirm">
				Удалить
			</button>
		</modal>

		<!--
			#REFACTOR
			Переписать систему входа в закрытый лонгрид. Как минимум хэшировать пароль и слить в одно место getStructure и getLockedStructure
		-->
		<modal :fromjs="false" type='locked' v-if="$store.state.longread.is_locked">
			<p>Введите пароль для доступа: </p>
			<input v-model="pass" placeholder="Пароль">
			<button class="modal-default-button" @click="sendPass">
				Открыть
			</button>
			<button class="modal-default-button" @click="goBack">
				Назад
			</button>
		</modal>
	</div>
</template>

<script> 
import axios from 'axios'

//import LocalStorageService from '@/utils/localStorageService';

export default {
	data() {
		return {
			interval: '',
			headers: [],
			settings_show: false,
			index_number : false,
			pass: '',
			delete_ld: false,
			deletion_name: '',
			settings_style: false,
			hidden: true,
		}
	},
	beforeCreate() {
		this.$store.commit("setSidenavCollapsed", true);
	},
	mounted() {
		if(this.is_demo) this.$store.commit("longread/setIsDemo", true);

		//console.log(process.env.VUE_APP_API)
		//console.log('mount + ',this.is_author)
		if (!("IntersectionObserver" in window)) {
			this.$store.dispatch("lazyForceLoad");
		}

		this.$store.dispatch("initObserver");
		this.$store.dispatch("longread/setIsAuthor", this.is_author);
		this.$store.dispatch("longread/setIsEditing", this.is_author);

		this.$store.dispatch("setMediaLoaded");

		if(this.$route.name.indexOf("skillbox") > -1) {
			this.$store.commit("longread/setStructure", this.structure);
		} else {
			this.$store.dispatch("longread/getStructure", this.$router);
		}
		

		if(this.is_author) {
			if(this.$route.path != '/demo') {
				this.interval = setInterval(() => this.checkSaveCodes(), this.$store.state.longread_update_interval);
			}
		}

		/*
		if(this.$route.name == "editor") {
			this.initLongread();
		} else if(this.$route.name != undefined) {
			console.log('test view')
			if(this.$route.name.indexOf("skillbox") > -1) {
				this.$store.dispatch("initObserver");

				this.$store.dispatch("longread/setIsAuthor", this.is_author);
				this.$store.dispatch("longread/setIsEditing", this.is_author);

				this.$store.dispatch("setMediaLoaded");

				this.$store.commit("longread/setStructure", this.structure);

				this.$nextTick(() => {
					this.headers = document.querySelectorAll(".ld-header");
				});
			}
		} else {
			this.initLongread();
		}
		*/
		if(this.is_demo) this.$store.commit("setLoadedPage", true);
	},
	beforeDestroy: function() {
		clearInterval(this.interval)
		this.$store.commit("setLoadedPage", false)
	},
	methods: {
		change_style_src(src) {
			console.log(src)
		},
		copyToClipboard(elem) {
			// create hidden text element, if it doesn't already exist
			let targetId = "_hiddenCopyText_"
			let target = document.getElementById(targetId)
			// must use a temporary form element for the selection and copy
				
			if (!target) {
				target = document.createElement("textarea")
				target.style.position = "absolute"
				target.style.left = "-9999px"
				target.style.top = "0"
				target.id = targetId
				document.body.appendChild(target)
			}
			target.textContent = elem.textContent
			// select the content
			let currentFocus = document.activeElement
			target.focus()
			target.setSelectionRange(0, target.value.length)
			
			// copy the selection
			let succeed
			try {
				succeed = document.execCommand("copy")
			} catch(e) {
				succeed = false
			}
			// restore original focus
			if (currentFocus && typeof currentFocus.focus === "function") {
				currentFocus.focus()
			}
		
			// clear temporary content
			target.textContent = ""
			return succeed
		},
		share() {
			this.$modal.methods.open('info','Ссылка скопирована в буфер обмена')
			this.copyToClipboard(this.$refs.link_longread)
		},
		delete_confirm() {
			if( this.$store.state.longread.longread.name == this.deletion_name) {
				let token = localStorage.getItem('token');
				let self = this;
				axios({ 
					method: 'POST', 
					url: self.$store.state.api_url + 'deletelongread',
					headers: {
						Authorization: "Bearer " + token
					},
					data: {
						id: self.$store.state.longread.longread.id,
						token: token
					}
				})
				.then(function (response) {
					console.log(response.data)
					self.deletion_name = ''
					window.location = 'https://interactor.su/'+self.$store.state.user_slug
					/*
						#REFACTOR 
						Переписать location на $router
					*/
				})
				.catch(function (error) {
					console.log(error.response);
					let errorText = '';
					for(let key in error.response.data) {
						errorText = errorText + ' ' + error.response.data[key]
					}
					self.$modal.methods.open('error',errorText)
				});
			} else {
				this.$modal.methods.open('error','Имя не совпадает')
			}
		},
		goBack() {
			this.$store.state.longread.is_locked = false
			this.$router.back()
		},
		sendPass() {
			let payload = {
				router: this.$router,
				pass: this.pass
			}
			this.$store.dispatch("longread/getLockedStructure", payload)
		},
		scrollTo(element) {
			element.scrollIntoView({
				"behavior" : "smooth",
				"block" : "start",
			});
		},
		/*
		#BUG
		Если сидеть в режиме просмотра лонгрида
		(без /edit), внести изменения в код,
		то страница лонгрида превращется в интерфейс эдитора
		*/
		/*
		initLongread() {
			this.$store.dispatch("initObserver");

			this.$store.dispatch("longread/setIsAuthor", this.is_author);
			this.$store.dispatch("longread/setIsEditing", this.is_author);

			this.$store.dispatch("setMediaLoaded");
			
			this.$store.dispatch("longread/getStructure", this.$router)
			
			if(this.is_author) {
				if(this.$route.path != '/editor') {
					this.interval = setInterval(() => this.saveLongread(), 2000);
				}
			}
		},
		*/
		checkSaveCodes() {
			if(this.$store.state.longread.save_code != this.$store.state.longread.save_code_local) {
				this.saveLongread()
			}
		},
		saveLongread() {
            let token = localStorage.getItem('token');
			let self = this

            axios({ 
                method: 'POST', 
                url: self.$store.state.api_url + 'savelongread',
                headers: {
                    Authorization: "Bearer " + token
                },
                data: {
					id: self.$store.state.longread.longread.id,
					longread_structure: self.$store.state.longread.structure,
					longread_options: self.$store.state.longread.options,
					token: token
                }
            })
			.then(function (response) {
				self.$store.state.longread.save_code = response.data.save_code
				self.$store.state.longread.save_code_local = response.data.save_code
				console.log(response.data.message)
			})
			.catch(function (error) {
				console.log(error.response)
				let errorText = ''
				for(let key in error.response.data) {
					errorText = errorText + ' ' + error.response.data[key]
				}
				self.$modal.methods.open('error',errorText)
			})
			
		},
		saveName() {
            let token = localStorage.getItem('token');
			let self = this
            axios({ 
                method: 'POST', 
                url: self.$store.state.api_url + 'savelongreadname',
                headers: {
                    Authorization: "Bearer " + token
                },
                data: {
					id: self.$store.state.longread.longread.id,
					name: self.$store.state.longread.longread.name,
					token: token
                }
            })
			.then(function (response) {
				console.log(response.data)
				self.$store.state.longread.longread.slug = response.data.newslug
				self.$router.push('/'+self.$store.state.user_slug+'/'+response.data.newslug+'/edit')
			})
			.catch(function (error) {
				console.log(error.response)
				let errorText = ''
				for(let key in error.response.data) {
					errorText = errorText + ' ' + error.response.data[key]
				}
				self.$modal.methods.open('error',errorText)
			})

		},
	},
	computed: {
		media_loaded() {
			return this.$store.state.media_loaded;
		},
		loaded() {
			return this.$store.state.longread.loaded;
		},
	},
	watch: {
		loaded() {
			if(!this.is_demo && this.$router.currentRoute.name !='editlongread') {
				this.$nextTick(() => {
					this.headers = document.querySelectorAll(".ld-header");
				})
			}
		},
	},
	props: {
		is_author: {
			required: true,
		},
		is_demo: {
			default() {
				return false;
			}
		},
		structure: {
			default() {
				return null;
			}
		}
	},
}
</script>
<style lang="scss">
.ld-tools {
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	font-size: 14px;
}

.ld-name {
	text-align: center;
}

.ld-loading {
	overflow: hidden;
	height: 100vh;
}

.ld-navigation {
	position: fixed;
	right: 0;
	top: 50%;
	height: 0;
	display: flex;
	align-items: center;
	z-index: 400;

	max-width: 350px;
	font-size: 1rem;
	transition: transform .3s, opacity .3s;
	//transform: translate3d(50%, 0, 0);
	//opacity: 0.5;
	/*
	&:hover {
		transform: translate3d(0,0,0);
		opacity: 1;
	}
	*/
	.ld-navigation-items {
		list-style: none;
		margin: 0; padding: 0;
		max-height: 95vh;
		overflow-y: auto;
		padding: 40px 20px 40px 40px;

		li {
			margin: 0 0 1rem;
		}
	}

	.ld-navigation-link {
		border-bottom: 1px dashed;
		cursor: pointer;
		transition: opacity .3s;

		&:hover {
			opacity: 0.8;
			border: none;
		}
	}
}

.textarea-style {
	font-size: 14px;
	height: 60vh;
	width: 50vw;
}

@media screen and (max-width:1480px) {
	.ld-navigation {
		z-index: 400;
		max-width: 800px;
		width: 80vw;
		transform: translate3d(50%, -50%, 0);
		right: 50%;
		top: 100%;
		height: 120px;
		font-size: 15px;
		.ld-navigation-items {
			height: 100%;
			padding: 0;
			display: flex;
			flex-flow: row;
			li {
				margin: 0 5px;
			}
		}
	}
}

@media screen and (max-width: 991px) {
	.ld-navigation {
		/*
		#REFACTOR
		На телефоне тож бы какую-нить навигацию
		по заголовкам сделать
		*/
		display: none;
	}
}
</style>
