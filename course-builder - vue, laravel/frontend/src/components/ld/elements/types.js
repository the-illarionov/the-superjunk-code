import Intro from './intro/types'
import Text from './text/types'
import Media from './media/types'
import Frame from './iframe/types'

export const elements_types = [
	{
		type: "intro",
		name: "Интро",
		elements: Intro,
	},
	{
		type: "text",
		name: "Текст",
		elements: Text,
	},
	{
		type: "media",
		name: "Медиа",
		elements: Media,
	},
	{
		type: "frame",
		name: "Фреймы",
		elements: Frame,
	},
	
	/*
		#TODO
		Добавить кастомный хтмл элемент чтоб прям скрипт можно было писать - но что с XSS делать тогда?
	*/
]