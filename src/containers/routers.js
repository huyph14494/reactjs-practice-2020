import Signin from 'src/containers/Siginin/Signin';
import List from 'src/containers/List/List';
import MagicColor from './MagicColor/MagicColor';
import AlertAnimation from 'src/containers/Alert/AlertAnimation';

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
