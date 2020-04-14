import Signin from 'src/containers/App/Signin';
import List from 'src/containers/App/List';
import MagicColor from './App/MagicColor';

const routes = [
	{
		path: '/',
		component: List,
		name: 'Home'
	},
	{
		path: '/sign-in',
		component: Signin,
		name: 'Sign-in'
	},
	{
		path: '/magic-color',
		component: MagicColor,
		name: 'Magic Color'
	}
];

export default routes;
