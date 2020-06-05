import Signin from 'src/containers/SigininV1/Signin';
import Home from 'src/containers/Home';
import MagicColor from './MagicColor/MagicColor';
import AlertAnimation from 'src/containers/Alert/AlertAnimation';
import SigininV2 from './SigininV2';
import Reports from './Reports';
import MeteorShowerPage from './MeteorShowerPage';

const routes = [
	{
		path: '/',
		component: Home,
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
  },
  {
		path: '/reports',
		component: Reports,
		name: 'Reports'
  },
  {
		path: '/meteor-shower',
		component: MeteorShowerPage,
		name: 'Meteor Shower'
	}
];

export default routes;
