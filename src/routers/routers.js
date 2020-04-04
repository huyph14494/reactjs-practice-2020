import Signin from 'src/components/Signin';
import List from 'src/components/List';

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
