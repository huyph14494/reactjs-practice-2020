import Signin from 'src/containers/App/Signin';
import List from 'src/containers/App/List';
import MagicColor from './App/MagicColor';
import AlertAnimation from 'src/containers/App/AlertAnimation';

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
  },
  {
		path: '/alert',
		component: AlertAnimation,
		name: 'Alert'
	}
];

export default routes;
