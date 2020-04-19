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
		this.instance({ url: '/api/auth/signup', method: 'get' })
			.then(function(response) {
				// handle success
        console.log(response);
			})
			.catch(function(error) {
				// handle error
        console.log(error);
      });
      
      return { a: 1 };

	}
}

export default new BackendApi();
