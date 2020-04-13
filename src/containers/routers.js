import Signin from 'src/containers/App/Signin';
import List from 'src/containers/App/List';

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
	}
];

export default routes;
