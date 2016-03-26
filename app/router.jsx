/**
 * 路由设置
 */

export default {
	component: 'div',
	childRoutes: [
		{
			path: '/',
			getComponent: (location, cb) => {
				require.ensure([], (require) => {
					cb(null, require('./component/Home').default)
				})
			}
		},
		{
			path: '/home',
			getComponent: (location, cb) => {
				require.ensure([], (require) => {
					cb(null, require('./component/Home').default)
				})
			}
		},
		{
			path: '/A',
			getComponent: (location, cb) => {
				require.ensure([], (require) => {
					cb(null, require('./component/PageA').default)
				})
			}
		}
	]
}