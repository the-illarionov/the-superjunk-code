<template>
<div class="dropzone-parent">
	<div class="dropzone" ref="element">
		<div class="dz-message">
			Drop files here or click to upload
		</div>
	</div>
	
	<div class="dz-preview dz-file-preview" id="tpl" style="margin-left:-3000px;position:absolute;">
		<div class="dz-details">
			<div class="dz-filename"><span data-dz-name></span></div>
			<div class="dz-size" data-dz-size> size</div>
			<img data-dz-thumbnail />
		</div>
		<div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
		<div class="dz-success-mark"><span>success</span></div>
		<div class="dz-error-mark"><span>error</span></div>
		<div class="dz-error-message"><span data-dz-errormessage></span></div>
	</div>
	<video id="video">
	</video>
	<div id="popup" v-show="error">
		{{ error_message }}
		<span @click="error=false"> close </span>
	</div>
</div>
</template>
<script>
import Dropzone from 'dropzone';
import axios from 'axios';
Dropzone.autoDiscover = false;

export default {
	props: {
		file: {
			required: true,
		},
		type: {
			required: true,
		},
		url: {
			required: true,
		}
	},
	data() {
		return {
			dropzone: "",
			error: false,
			error_message: ''
		}
	},
	computed: {
		is_image() {
			return this.type == "image";
		},
		is_video() {
			return this.type == "video";
		},
		is_css() {
			return this.type == "css";
		},
		acceptedFiles() {
			let acceptedFiles;
			switch(this.type) {
				case "image":
					acceptedFiles = "image/*"
				break;
				case "video":
					acceptedFiles = "video/*"
				break;
				case "css":
					acceptedFiles = ".css"
				break;
				case "media":
					acceptedFiles = "image/*, video/*"
				break;
			}
			return acceptedFiles
		}
	},
	methods: {
		get_duration() {		
			let video = document.getElementById('video')
			console.log(video.duration)
		}
	},
	mounted() {
		let token = localStorage.getItem('token');
		
		let autoProcessQueue = !this.$store.state.longread.is_demo;
		
		this.dropzone = new Dropzone(this.$refs.element, {
			url: this.url,
			maxFilesize: 12,
			addRemoveLinks: true,
			createImageThumbnails: false,
			dictRemoveFile: 'Удалю файл',
			autoProcessQueue: autoProcessQueue,
			hiddenInputContainer: ".dropzone",
			previewTemplate: document.querySelector('#tpl').innerHTML,
			acceptedFiles: this.acceptedFiles,
			headers: {
				'Authorization': "Bearer " + token,
				'Cache-Control': null,
				'X-Requested-With': null,
			},
		});

		this.dropzone.on('addedfile', (file) => {
			if(this.dropzone.files.length > 1) {
				this.dropzone.removeFile(this.dropzone.files[0]);
			}

			let src = null;

			if(file.mock) {
				src = file.src;
			} else {
				src = URL.createObjectURL(file);
			}

			let changes = {
				src: src,
				fileName: file.name,
				size: file.size,
				//loaded: true,
				type: file.type,
			}

			this.$emit("change_element", changes);
			
			// Это нужно когда добавляешь картинк. Из-за lazy load src не меняется
			this.$emit("change_src", changes.src);

			this.$emit("change_file_type", file.type);
			/*

			#REFACTOR
			SUPER ULTRA ВАЖНЫЙ РЕФАКТОР
			Сделать нормальную работу this.dropzone.processQueue();
			Текущая ошибка: функция почему-то не отрабатывает,
			но существует

			if(!this.$store.state.longread.is_demo) {
				console.log(this.is_image, 'started proces queue', this.dropzone)
				this.dropzone.processQueue();
			}
			*/
		})

		this.dropzone.on('sending',(file, xhr, formData) => {
			formData.append('id', this.$store.state.longread.longread.id)
		});
		
		this.dropzone.on("success", (file, response) => {
			let changes = {
				src: this.$store.state.files_url + response.path,
				fileName: file.name,
				size: file.size,
				loaded: true,
			}

			console.log('changes', changes)

			this.$emit("change_element", changes);
			this.$emit("change_src", changes.src);
		});

		this.dropzone.on("removedfile", (file) => {
			console.log('REMOVE', file)
            let token = localStorage.getItem('token');
			let path = this.file.src.replace(this.$store.state.files_url, "");
			
			this.$emit("change_element", {
				src: null,
				fileName: null,
				size: null,
			});

			if(!this.$store.state.longread.is_demo) {
				let self = this
				axios({ 
					method: 'POST', 
					url: self.$store.state.api_url + 'deletefile',
					headers: {
						Authorization: "Bearer " + token
					},
					data: {
						file: path
					}
				})
				.then(function (response) {
					console.log(response.data)
				})
				.catch(function (error) {
					console.log(error.response);
					let errorText = '';
					for(let key in error.response.data) {
						errorText = errorText + ' ' + error.response.data[key]
					}
					self.$modal.methods.open('error',errorText)
				});
				console.log("DELETE ON BACKEND")
			}
			// эмитить удаление на бэкэнде - или мб встроенное есть что то?
		});

		if(!this.is_css) {
			if(this.file.src) {
				let mockFile = { 
					name: this.file.fileName, 
					size: this.file.size, 
					src: this.file.src, 
					type: this.file.type,
					mock: true 
				};

				this.dropzone.files.push(mockFile);
				this.dropzone.emit("addedfile", mockFile);
				this.dropzone.emit("complete", mockFile);
			}
		}
	},
}
</script>
<style lang="scss" src="dropzone/src/dropzone.scss"></style>
<style lang="scss" scoped>
@import '@/assets/scss/variables';
#video {
	display: none;
}
#popup {
	position: absolute;
	width: 300px;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%,-50%,0);
	background: #fff;
	height: 100px;
}
#popup span {
	color: #000;
}
.dropzone-parent {
	position: absolute;
	top: 40%;
	left: 0;
	right: 0;
	bottom: 0;
}
.dropzone {
	background: rgba(255,255,255,0.1);
	width: 100%;
	height: 100%;
	padding: 0;
	color: $color_level1;

	.dz-message {
		display: block;
	}
}
</style>