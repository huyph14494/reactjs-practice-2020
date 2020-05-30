import Axios from 'axios';
import config from 'src/config/default';
import { createNoun, createSentence } from 'src/helpers/common/random-alert';
import { v1 as uuidv1 } from 'uuid';

class BackendApi {
	constructor() {
		this.instance = Axios.create({
			baseURL: config.base_url_server,
			timeout: 10000
		});
	}


  getPhotos(limit = 10) {
		return new Promise((resolve, reject) => {
      if(limit > 50 || limit < 1){
        limit = 10;
      }
      
			this.instance({ url: '/api/photos/random/' + limit, method: 'get' })
				.then(function(response) {
					if (
            response &&
						response.data &&
						(Array.isArray(response.data) || response.data.length > 0)
					) {
						let data = response.data.map((element) => {
							return {
								id: uuidv1(),
								name: createNoun(),
								descriptions: createSentence(),
								image: element
							};
						});
						resolve(data);
					} else {
						console.log('getPhotos No Photo');
						reject('getPhotos Errors');
					}
				})
				.catch(function(error) {
					console.log('getPhotos ' + error);
					reject('getPhotos Errors');
				});
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
