import Signin from 'src/containers/SigininV1/Signin';
import List from 'src/containers/List/List';
import MagicColor from './MagicColor/MagicColor';
import AlertAnimation from 'src/containers/Alert/AlertAnimation';
import SigininV2 from './SigininV2';

const routes = [
	{
		path: '/',
		component: List,
		name: 'Home'
	},
	{
		path: '/sign-in-v1',
		component: Signin,
		name: 'Sign-in V1'
  },
  {
		path: '/sign-in-v2',
		component: SigininV2,
		name: 'Sign-in V2'
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
