import devices from '@/values/devices'
import { find } from "lodash"

export default function(map) {
	let device = devices
	for(let i = 0; i < map.length; i++) {
		device = find(device, {value: map[i]})

		if(i < map.length - 1 && device) {
			device = device.values
		}
	}
	/*
		#REFACTOR
			Вот тут узкое место в производительности, потому что в device передаётся только map, массив из строк. И по нему каждый раз нужно пробегаться, чтобы найти приём.
			В качестве решения можно было бы что-то типа.
			С другой стороны хз, если вешать вотчи тут, то тогда вотч simple и complex будет дергать ещё и эти вотчи котрые будут запускать тот же процесс, так что хз ваще
				devices: {
					simple: [
						{
							map: [ .. то что сейчас],
							device: computed, который соответствует этому map
						}
					]
				}
	*/
	return device
	// надо оборачивать в computed() при вызове!
}