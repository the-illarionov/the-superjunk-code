import { computed } from 'vue'

import state from '@/store/course'
import translate from '../translate'

import { createState } from '@/store/classes/State'

export default {
	items: {},
	orderedItems: computed(() => {
		const sortByOrder = (a,b) => (a.order > b.order) ? 1 : (( b.order > a.order ) ? - 1 : 0)

		let result = Object.keys( state.states.items )
			.map(key => {
				return { ...state.states.items[key] }
			})
			.sort( sortByOrder )
			.reduce( (previousValue, currentValue) => {
				const index = previousValue.findIndex( element => element.placement === currentValue.module_placement )

				let order = 1
				switch(currentValue.module_placement) {
					case 'middle':
						order = 2
					break;
					case 'end':
						order = 3
					break;
				}

				if( index < 0) {
					previousValue.push({
						placement: currentValue.module_placement,
						name: translate('states-group-' + currentValue.module_placement),
						order: order,
						items: [...previousValue[currentValue.module_placement] || [], currentValue]
					})
				} else {
					previousValue[index].items.push(
						currentValue
					)
				}

				return previousValue
			}, [])
			.sort( sortByOrder )

		//console.log(result)

		return result
	}),
	fill() {
		createState({
			name:  translate('state-its_working'),
			module_placement: 'start',
			sprint_placement: 'start',
			description: translate('state-its_working-description'),
			examples: {
				good: [
					{
						text: translate('state-its_working-good-text'),
						explain: translate('state-its_working-good-explain'),
					}
				],
				bad: [
					{
						text: translate('state-its_working-bad-text'),
						explain: translate('state-its_working-bad-explain'),
					}
				]
			},

			order: 1,
			id: 'its_working',
		})

		createState({
			name:  translate('state-its_working_plus'),
			module_placement: 'start',
			sprint_placement: 'middle',
			description: translate('state-its_working_plus-description'),
			examples: {
				good: [
					{
						text: translate('state-its_working_plus-good-text'),
						explain: translate('state-its_working_plus-good-explain'),
					}
				],
				bad: [
					{
						text: translate('state-its_working_plus-bad-text'),
						explain: translate('state-its_working_plus-bad-explain'),
					}
				]
			},

			order: 2,
			id: 'its_working_plus',
		})

		createState({
			name:  translate('state-made_myself'),
			module_placement: 'start',
			sprint_placement: 'end',
			description: translate('state-made_myself-description'),
			examples: {
				good: [
					{
						text: translate('state-made_myself-good-text'),
						explain: translate('state-made_myself-good-explain'),
					}
				],
				bad: [
					{
						text: translate('state-made_myself-bad-text'),
						explain: translate('state-made_myself-bad-explain'),
					}
				]
			},

			order: 3,
			id: 'made_myself',
		})

		createState({
			name:  translate('state-adding_mine'),
			module_placement: 'middle',
			sprint_placement: 'start',
			description: translate('state-adding_mine-description'),
			examples: {
				good: [
					{
						text: translate('state-adding_mine-good-text'),
						explain: translate('state-adding_mine-good-explain'),
					}
				],
				bad: [
					{
						text: translate('state-adding_mine-bad-text'),
						explain: translate('state-adding_mine-bad-explain'),
					}
				]
			},

			order: 4,
			id: 'adding_mine',
		})

		createState({
			name:  translate('state-know_paths'),
			module_placement: 'middle',
			sprint_placement: 'middle',
			description: translate('state-know_paths-description'),
			examples: {
				good: [
					{
						text: translate('state-know_paths-good-text'),
						explain: translate('state-know_paths-good-explain'),
					}
				],
				bad: [
					{
						text: translate('state-know_paths-bad-text'),
						explain: translate('state-know_paths-bad-explain'),
					}
				]
			},

			order: 5,
			id: 'know_paths',
		})

		createState({
			name:  translate('state-self_searching'),
			module_placement: 'middle',
			sprint_placement: 'end',
			description: translate('state-self_searching-description'),
			examples: {
				good: [
					{
						text: translate('state-self_searching-good-text'),
					}
				],
			},

			order: 6,
			id: 'self_searching',
		})

		createState({
			name:  translate('state-express'),
			module_placement: 'end',
			sprint_placement: 'start',
			description: translate('state-express-description'),
			examples: {
				good: [
					{
						text: translate('state-express-good-text'),
					}
				],
			},

			order: 7,
			id: 'express',
		})

		createState({
			name:  translate('state-using_for_myself'),
			module_placement: 'end',
			sprint_placement: 'middle',
			description: translate('state-using_for_myself-description'),
			examples: {
				good: [
					{
						text: translate('state-using_for_myself-good-text'),
					}
				],
			},

			order: 8,
			id: 'using_for_myself',
		})

		createState({
			name:  translate('state-using_for_outside'),
			module_placement: 'end',
			sprint_placement: 'end',
			description: translate('state-using_for_outside-description'),
			examples: {
				good: [
					{
						text: translate('state-using_for_outside-good-text'),
					}
				],
			},

			order: 9,
			id: 'using_for_outside',
		})
	},
	reset() {
		state.states.items = {}
	}
}