<template>
<div class="ld-highlights-wrap" :class="wrap_classes" ref="wrap">
	<div class="ld-highlights-container" 
		v-show="show_highlights" ref="highlights_container">

		<p class="ld-highlights-container-text">Кликните по любому месту, чтобы создать указатель</p>
		
	</div>

	<template v-if="has_highlights">
		<transition name="top-to-bottom" mode="out-in">
			<!--
			<span key="hide" class="button button-light" v-if="show_highlights" @click="show_highlights = false">
				<i class="button-ico las la-eye-slash"></i>
				Скрыть указатели
			</span>
			<span key="show" class="button button-light" v-else @click="show_highlights = true">
				<i class="button-ico las la-eye"></i>
				Показать указатели
			</span>
			-->
		</transition>
	</template>

	<div class="tooltip" ref="tooltip" v-show="show_tooltip">
		<div class="slidecontainer">
			<input type="range" min="4" max="60" v-model="size" @input="set_size">
			<span> {{ size }} </span>
		</div>
		<div style="display: flex;">
			Цель:
			<ol class="ld-interactive-navigation-tooltip">
				<li 
					v-for="(sub_element, sub_index) in targets"
					:key="sub_element.subtype + sub_index"
					:class="{ 'active' : sub_index == current_target }"
					@click="change_target(sub_index)">
					<span>{{ sub_index + 1 }}</span>
				</li>
			</ol>
		</div>
		<p @click="exit_edit_mode"> закрыть </p>
	</div>
	<div class="delete" v-show="show_tooltip">
		<p @click="delete_highlights"> удалить все </p>
	</div>
</div>
</template>
<script>
import { SVG } from '@svgdotjs/svg.js'
import '@svgdotjs/svg.draggable.js'
import types from './types'

export default {
	/*
		#BUG
		MAJOR SUPER BUG
		highlights на темных участках видео/изображений не видны
	*/
	data() {
		return {
			draw: null,
			bg: null,
			mask: null,
			show_tooltip: false,
			targets: null,
			defaultSize: 12,
			current_target: null,
			size: null,
			active_index: null,
			left: 0,
			top: 0,
			circles: null,
		};
	},
	methods: {
		initSVG() {
			//this.width = this.$refs.highlights_container.offsetWidth
			//this.height = this.$refs.highlights_container.offsetHeight
			this.draw = SVG().addTo(this.$refs.highlights_container).size('100%', '100%');
			let maskBg = this.draw.rect('100%', '100%').attr({ fill: '#fff' });
			this.mask = this.draw.mask().add(maskBg)

			this.bg = this.draw.rect('100%', '100%').attr({ fill: 'green' }).maskWith(this.mask);
			this.element.highlights.forEach( (highlight) => {
				highlight.edit = false
			})
			
			this.bg.click( (e) => {
				this.clicked(e);
			});
			//this.circles = this.draw.group()
			this.redraw();
			
			this.targets = this.longread_element.elements
		},
		change_target(index) {
			console.log('current target', index)
			this.current_target = index
			//this.element.highlights[this.active_index].target = index
			
			let payload = {
				source: this.element.highlights,
				index: this.active_index,
				changes: {
					target: index,
				},
			}
			this.$store.dispatch("longread/changeElement", payload)
		},
		delete_highlights() {
			this.element.highlights = []
			//console.log(this.element)
			this.$emit('delete_highlights')
			this.circles.remove()
			this.exit_edit_mode();
			this.redraw();
		},
		clicked(e) {
			if(this.element.is_editing_highlights) {
				console.log(this.width, this.height)
				let x = e.offsetX/this.width*100
				let y = e.offsetY/this.height*100
				
				if(this.checkPos(x,y)) {
					let highlight = this.$_.cloneDeep( this.$_.find(types, { subtype: "highlight" }) );

					highlight.x = x
					highlight.y = y
					highlight.size = this.defaultSize
					highlight.index = this.element.highlights.length
					//this.element.highlights.push(highlight)
					
					let payload = {
						destination: this.element.highlights,
						element: highlight,
						index: this.element.highlights.length,
					}
					this.$store.dispatch("longread/addElement", payload);
					/*
						TODO:
						Диспатч реализован, но почему-то опять баг вроде при добавлении нескольких хайлайтов
					*/
					this.redraw()
				}
			}
		},
		redrawHighlight(e, highlight,action) {
			if (!(action == 'drag' && !highlight.edit)) {
				let x = e.offsetX/this.width*100
				let y = e.offsetY/this.height*100
				highlight.x = x
				highlight.y = y

				let payload = {
					source: this.element.highlights,
					index: highlight.index,
					changes: {
						x: x,
						y: y,
					},
				}
				this.$store.dispatch("longread/changeElement", payload);

				this.redraw()
			}
		},
		set_size() {
			// this.element.highlights[this.active_index].size = parseInt(this.size)
			
			let payload = {
				source: this.element.highlights,
				index: this.active_index,
				changes: {
					size: parseInt(this.size)
				},
			}
			//console.log(payload, 'setsize')
			this.$store.dispatch("longread/changeElement", payload);

			this.redraw()
		},
		exit_edit_mode() {
			console.log('exit highlight editing mode')
			// bind bg click
			// unbind highlight actions			
			this.element.highlights.forEach( (highlight) => {
				highlight.edit = false
			})
			this.active_index = null
			this.show_tooltip = false
			this.redraw()
			this.bg.click(null)
			this.bg.click( (e) => {
				this.clicked(e);
			});
		},
		redraw() {
			if(this.circles) this.circles.remove()
			this.circles = this.draw.group()
			let maskBg = this.draw.rect('100%', '100%').attr({ fill: '#fff' });
			this.draw.mask().remove()
			this.mask = this.draw.mask().add(maskBg)
			console.log('redraw', this.element.highlights)
			for (let i = 0; i < this.element.highlights.length; i++) {
				console.log('highlight draw')
				console.log(this.element.highlights[i])
				let attr = { 
					fill: '#000', 
					cx: this.element.highlights[i].x + '%', 
					cy: this.element.highlights[i].y + '%',
					size: this.element.highlights[i].size + '%',
				}

				let el = this.draw.circle(attr.size).attr(attr);
				el.attr({'fill-opacity': 0});
				//el.css('cursor', 'pointer')

				let mask = this.draw.circle(attr.size).attr(attr);
				this.mask.add(mask);

				if(this.element.highlights[i].edit) {
					this.size = this.element.highlights[i].size
				}

				//el.draggable()
				el.on('mouseover', () => {	
					if(this.element.is_editing_highlights) {	
						el._runner = el.animate({duration: 500, when: 'now'}).css({ 'stroke': '#AA2A95', 'stroke-width': 7 })
					}
				})

				el.on('mouseout', () => {
					if(this.element.is_editing_highlights) {	
						el._runner.unschedule()
						el.animate({duration: 500, when: 'now'}).css({ 'stroke': '#3f3f3f','stroke-width': 0  })
					}
				})

				/*
				el.on('dragmove', (e) => {
					if(this.element.is_editing_highlights) {	
						if(!this.element.highlights[i].edit) {
							e.preventDefault()
						}
						this.redrawHighlight(e.detail.event,this.element.highlights[i],'drag')
					}
				})
				*/
				
				el.on('click', () => {
					if(this.element.is_editing_highlights) {	
						console.log('enter highlight editing mode')
						// unbind bg click
						// bind highlight actions	
						this.current_target = null		
						this.element.highlights.forEach( (highlight) => {
							highlight.edit = false
						})
						this.current_target = this.element.highlights[i].target
						this.element.highlights[i].edit = true
						this.active_index = i
						this.show_tooltip = true
						this.redraw()
						this.bg.click(null)
						this.bg.click( (e) => {
							this.redrawHighlight(e,this.element.highlights[i],'click')
						})
					}
				})
			
				if(this.element.highlights[i].target !=null) {
					console.log('some highlight')
					if(!this.element.is_editing_highlights) {
						let text = document.createElement('span');
						text.classList.add('ld-highlight-text');
						text.style.left = this.element.highlights[i].x + '%';
						text.style.top = this.element.highlights[i].y + '%';
						text.style.marginTop = this.element.highlights[i].size / 2.5 + '%';
						text.innerHTML = "Click me!";

						this.$refs.highlights_container.appendChild(text);
						
						el
							.attr({ stroke: '#3f3f3f', 'stroke-width': '1%' })
							.node.classList.add('cursor-pointer');

						let animation = {
							duration: 1000, 
							swing: true, 
							when: 'now', 
							times: Infinity,
							radius: this.element.highlights[i].size * 0.4 + '%',
						};

						mask.animate(animation).attr({ r: animation.radius });
						el.animate(animation).attr({ r: animation.radius, 'stroke-opacity': 0.2 });

						el.on('click', () => {
							let payload = {
								source: this.$store.state.longread.structure,
								index: this.map[0],
								changes: {
									current_index: this.element.highlights[i].target,
								}
							}
							this.$store.dispatch('longread/changeElement', payload)
						});

						el.on('mouseover', () => {
							el._runner = el.animate({duration: 500, when: 'now'}).attr({ stroke: '#90c9f9' });
							text.style.color = "#90c9f9";
						});

						el.on('mouseout', () => {
							el._runner.unschedule();
							el.animate({duration: 500, when: 'now'}).attr({ stroke: '#3f3f3f' });
							text.style.color = "#fff";
						});
					}
				}

				this.circles.add(el)
			}
			this.bg.maskWith(this.mask).attr({ fill: '' + this.element.highlights_bg + '' });
		},
		destroySVG() {
			this.draw.remove();
			this.draw = null;
			this.bg = null;
		},
		checkPos(x,y) {
			let bool = true
			this.element.highlights.forEach(highlight => {
				if (highlight.x - this.defaultSize < x && (highlight.x + this.defaultSize) > x && highlight.y - this.defaultSize < y &&  (highlight.y + this.defaultSize) > y) {
					
					this.$modal.methods.open('error','Указатели соприкасаются!')
					bool = false
				}
			})
			return bool
		},
	},

	mounted() {
		//console.log('загрузились хайлайты')
	},
	
	computed: {
		is_editing_highlights() {
			return this.element.is_editing_highlights;
		},
		highlights_bg() {
			if(this.element.highlights_bg == undefined) {
				return "rgba(0,0,0,0.5)"
			} else {
				return this.element.highlights_bg
			}
		},
		is_element_editing() {
			return this.element.is_editing
		},
		has_highlights() {
			return this.element.highlights.length > 0;
		},
		longread_element () {
			return this.$store.getters['longread/element'](this.map.slice(0,-2))
		},
		show_highlights() {
			return (this.$store.state.longread.is_author && this.element.is_editing) || this.has_highlights
		},
		wrap_classes() {
			return {
				'ld-highlights-wrap_shrunk' : !this.show_highlights
			}
		},
		width() {
			return this.$refs.highlights_container.offsetWidth;
		},
		height() {
			return this.$refs.highlights_container.offsetHeight
		}
	},
	watch: {
		is_media_loaded(loaded) {
			/*
			#REFACTOR
			Нужно сделать систему, которая отрубает реактивность у указанных свойств элемента, чтобы не пришлось в маунтеде обнулять эти переменные (пример: loaded у img)
			*/
			if(loaded && !this.draw) {
				this.initSVG();
				//console.log('asdasdasd')
			}
		},
		is_editing_highlights(is_editing) {
			if(is_editing) {
				// здесь развилку типа если false и элементов 0 то удалять
				// if(!this.draw) this.initSVG();
				
				this.$refs.highlights_container.classList.add("ld-highlights-container_highlighting");
			} else {
				this.$refs.highlights_container.classList.remove("ld-highlights-container_highlighting");

				//if(this.element.highlights.length == 0) this.destroySVG();
			}
			this.redraw()
		},
		is_element_editing(is_editing) {
			if(!is_editing) {
				this.element.is_editing_highlights = false;	
				//this.destroySVG();
				//console.log('!!!!!!!')
				//this.exit_edit_mode()
			}
			//this.initSVG()
			this.redraw()
			//console.log(is_editing)
		},
		highlights_bg() {
			this.redraw()
			//console.log(value)
		}
	},
	props: {
		element: {
			required: true,
		},
		map: {
			required: true,
		},
		is_media_loaded: {
			required: true,
		}
	},
}
</script>
<!--
	1. Может быть и ссылкой, если http в начале есть
-->
<style lang="scss">
.ld-highlights-wrap {
	position: absolute;
	right: 0; top: 0;
	width: 100%;
	height: 100%;

	.button {
		position: absolute;
		right: 10px;
		top: 10px;
		z-index: 10;
		font-size: .8rem;
		transform: translate3d(0, -20px, 0);
		opacity: 0;
		transition: opacity .3s, transform .3s;
	}

	&:hover .button {
		transform: translate3d(0,0,0);
		opacity: 1;
	}

}

.ld-highlights-wrap_shrunk {
	width: 200px;
	height: 50px;

	.button {
		background: #fff;
		color: #3f3f3f;
	}
}

.ld-highlights-container {
	position: absolute;
	left: 0; top: 0;
	width: 100%; height: 100%;	

	.ld-highlights-container-text {
		display: none;
		position: absolute;
		left: 0;
		width: 100%;
		padding: 0 20px;
		text-align: center;
		top: 50%;
		color: #fff;
		z-index: 130;
	}
}

.ld-highlights-container_highlighting {
	z-index: 100;
	animation: highlighting 1s linear infinite alternate;

	.ld-highlights-container-text {
		display: block;
	}
}

@keyframes highlighting {
	0% {
		opacity: 1;
	}
	100% {
		opacity: 0.3;
	}
}

.ld-highlight-text {
	position: absolute;
	color: #fff;
	display: flex;
	justify-content: center;
	width: 0;
	white-space: nowrap;
	transition: color .3s;
	font-size: 1rem;
	z-index: 10;
}
.tooltip {
	height: 45px;
	background: #fff;
	position: absolute;
	left: 50%;
	z-index: 110;
	display: flex;
	font-size: 18px;
	flex-flow: row;
	justify-content: space-evenly;
	border-radius: 10px;
	transform: translate3d(-50%, -30px, 0);
}
.slidecontainer {
	min-width: 100px;
	display: flex;
	justify-content: space-between;
	input {
		width: 100%;
	}
}
.delete {
	width: 100px;
	height: 20px;
	background: #fff;
	position: absolute;
	left: 0;
	top: 0;
	z-index: 110;
	display: flex;
	justify-content: center;
	border-radius: 10px;
	font-size: 14px;
}
.ld-interactive-navigation-tooltip {
    display: flex;
    padding: 0;
	justify-content: center;
	
	li {
		cursor: pointer;
		background: #0f0f0f;
		transition: opacity .3s;
		border-radius: 20px;
		margin: 0 0 0 5px;
		font-size: .6rem;
		color: #fff;
		display: block;
		border: 5px solid #0f0f0f;
		transition: background .3s, color .3s;

		span {
			display: block;
			width: 20px;
			line-height: 20px;
			border-radius: 20px;
			text-align: center;
		}
	}

	li.active, li:hover {
		background: #fff;
		color: #000;
	}
}

@media screen and (max-width:991px) {
	.ld-highlight-text {
		font-size: .5rem
	}
}
</style>