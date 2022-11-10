<template>
<div style="height: 500vh">
	<div id="container" style="height: 100%">
		
	</div>
	<!--
	<div style="position: relative; width: 800px; margin-left: 100px">
	<svg style="display: block">
		<defs>
			<mask id="mask">
				<rect width="100%" height="100%" fill="white"/>

				<circle class="circle" cx="30%" cy="30%" r="50" fill="black"/>
			</mask>
		</defs>

		<rect x="0" y="0" width="100%" height="100%" mask="url(#mask)"
			style="fill:#000; opacity: 0.5" />

		<circle cx="30%" cy="30%" r="50" style="opacity: 0" @click="add"/>
	</svg>
	-->
	<!--
	<div class="highlight"></div>
	<div class="bs"></div>
	
	-->
	<img src="https://news.ykt.ru/upload/image/2020/05/101116/main_thumb.jpg?1590109602" />
</div>
</template>
<script>
import { SVG } from '@svgdotjs/svg.js'

export default {
	mounted() {
		let self = this
		// Инициация, создание маски
		self.draw = SVG().addTo('#container').size('100%', '100%')
		let rect = self.draw.rect('100%', '100%').attr({ fill: '#fff' })
		self.bg = self.draw.rect('100%', '100%')
		let mask = this.draw.mask().add(rect)
		self.bg.maskWith(mask).attr({ fill: '#000', opacity: '0.6' })

		// Клик по черному, создание кружка
		self.bg.click(function(e) {
			if(self.checkPos(e)) {
				self.addCircle(rect,e,self.defaultSize)
			}
			else {
				console.log('too close')
			}
		})
	},
	data() {
		return {
			bg: '',
			draw: '',
			defaultSize: 70,
			circles: {
				staticCircles: [],
				dynamicCircles: []
			}
		}
	},
	methods: {
		// Сам кружочек
		addCircle(rect,e,size) {
			let circleElement = {
				circle: this.draw.circle(size).attr({ fill: '#000' }).move(e.clientX - size/2, e.clientY - size/2),
				x: e.clientX,
				y: e.clientY
			}
			this.circles.staticCircles.push(circleElement)
			let length = this.circles.staticCircles.length
			let id = length - 1
			this.circles.staticCircles[id].circle.node.classList.add('circle')
			
			this.maskRedraw(this.circles.staticCircles,rect)

			// Добавить указатель (с событиями)
			// Вот это он как раз динамичный становится ок да
			this.addCirclePointer(this.circles.staticCircles[length-1],e,size,id)
		},
		// Проверка позиции
		checkPos(e) {
			let bool = true
			let self = this
			this.circles.staticCircles.forEach(circle => {
				console.log(circle.x- self.defaultSize,circle.y- self.defaultSize,'left top')
				console.log(e.clientX,e.clientY)
				console.log(circle.x+ self.defaultSize,circle.y+ self.defaultSize,'right bottom')
				if (circle.x - self.defaultSize < e.clientX && (circle.x + self.defaultSize) > e.clientX && circle.y - self.defaultSize < e.clientY &&  (circle.y + self.defaultSize) > e.clientY) {
					console.log('fkdlkfj')
					bool = false
				}
			})
			return bool
		},
		// Ререндер маски
		maskRedraw(list,rect) {
			// Сначала фон, затем все кружочки циклом
			let mask = this.draw.mask().add(rect)
			list.forEach(circle => {
				mask = mask.add(circle.circle)
			})
			this.bg.maskWith(mask).attr({ fill: '#000', opacity: '0.6' })
		},
		// Указатель прозрачный (с событиями)
		addCirclePointer(circle,e,size,id) {
			// Помещаю туда, где кликнули
			this.circles.dynamicCircles.push(this.draw.circle(size).attr({ fill: '#000', opacity: '0' }).move(e.clientX - size/2, e.clientY - size/2))
			let self = this
			// Анимация пульсации
			let runner = this.circles.staticCircles[id].circle.animate({duration: 1000}).size(size*0.8)
			runner.loop()

			// Обработка клика
			this.circles.dynamicCircles[id].click(function() {
				self.circleClick(self.circles.dynamicCircles[id],id)

				// Возобновление пульсации 
				self.circles.staticCircles[id].circle.timeline().play()
			})
			// Даб даб, анбиндим клик - теперь мы статичные, там же удаление
			this.circles.dynamicCircles[id].dblclick(function() {

				// self.circleUnbind(self.circles.dynamicCircles[id],id)
				// Остановка пульсации
				self.circles.staticCircles[id].circle.timeline().stop()
				// Берешь такой, и удаляешь
				// self.circles.staticCircles.splice(id,1)
				// self.circles.dynamicCircles.splice(id,1)
			})
			console.log(this.circles.dynamicCircles[id])
		},
		// Теперь он статичный
		circleUnbind(circle,id) {
			circle.off('click')
			console.log('unbind #'+id)
		},
		// Функция, вызываемая по клику
		circleClick(circle,id) {
			console.log('click #'+id)
		}
	}
}
</script>
<style lang="scss">
svg {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0; top: 0;
}

.highlight {
	position: absolute;
	left: 0; top: 0;
	width: 100%; height: 100%;
	background: #000;
	clip: rect( 150px, 200px, 150px, 250px);
}

.bs {
	position: absolute;
  top: 20px;
  left: 20px;
  width: 200px;
  height: 150px;
  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.8);
}

img {
	width: 100%;
}
</style>