import { cloneDeep, find, has } from 'lodash'


export default (Vue) => {
	Vue.prototype.$_ = {};

	Vue.prototype.$_.cloneDeep = cloneDeep;
	Vue.prototype.$_.find = find;
	Vue.prototype.$_.has = has;
}