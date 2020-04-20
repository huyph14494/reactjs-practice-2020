import Axios from 'axios';
import config from 'src/config/default';

class BackendApi {
	constructor() {
		this.instance = Axios.create({
			baseURL: config.base_url_server,
			timeout: 10000
		});
	}

	get() {
		return new Promise((resolve, reject) => {
      return	resolve({ a: 1 });

			// this.instance({ url: '/api/auth/signup', method: 'get' })
			// 	.then(function(response) {
			// 		// handle success
			// 		console.log(response);
			// 		resolve({ a: 1 });
			// 	})
			// 	.catch(function(error) {
			// 		// handle error
			// 		console.log(error);
			// 		resolve({ a: 2 });
			// 	});
		});
	}
}

// const instance = Axios.create({
// 	baseURL: config.base_url_server,
// 	timeout: 10000
// });

// const BackendApi = {
// 	async get() {
// 		instance({ url: '/api/auth/signup', method: 'get' })
// 			.then(function(response) {
// 				// handle success
// 				console.log(response);
// 			})
// 			.catch(function(error) {
// 				// handle error
// 				console.log(error);
// 			});

// 		return { a: 1 };
// 	}
// };

export default new BackendApi();
