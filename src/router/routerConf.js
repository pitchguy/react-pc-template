import Loadable from 'react-loadable'
import Loading from '../components/loading'
import MainTpl from '../tpls/mainTpl/index'
import BaseTpl from '../tpls/baseTpl/index'

const Home  = Loadable({ loader: () => import('../pages/home'), loading: Loading });
const Searching = Loadable({ loader: () => import('../pages/searching'), loading: Loading })
const Button = Loadable({ loader: () => import('../pages/button'), loading: Loading});
const NoExist = Loadable({ loader: () => import('../pages/errorHtml/404'), loading: Loading});

const routerConf = [
	{
		path: '/',
		component: Home,
		layout: BaseTpl,
		children: [
			{
				path: '/button',
				component: Button,
				layout: MainTpl,
				children: []
			}
		]

	},
	{
		path: '*',
		layout: MainTpl,
		component: NoExist
	}
]

export default routerConf;
