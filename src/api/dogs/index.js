// https://dog.ceo/api/breeds/image/random/3 Fetch!
// {
//   "message": [
//       "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_760.jpg",
//       "https://images.dog.ceo/breeds/lhasa/n02098413_5802.jpg",
//       "https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_3999.jpg"
//   ],
//   "status": "success"
// }

import Axios from 'axios';
import { createNoun, createSentence } from 'src/helpers/common/random-alert';
import { v1 as uuidv1 } from 'uuid';

class DogsApi {
	constructor() {
		this.instance = Axios.create({
			baseURL: 'https://dog.ceo',
			timeout: 10000
		});
	}

	getImageDogs(limit = 10) {
		return new Promise((resolve, reject) => {
      if(limit > 30 || limit < 1){
        limit = 10;
      }
      
			this.instance({ url: '/api/breeds/image/random/' + limit, method: 'get' })
				.then(function(response) {
					if (
            response &&
						response.data &&
						String(response.data.status).toLowerCase().trim() === 'success' &&
						(Array.isArray(response.data.message) || response.data.message.length > 0)
					) {
						let data = response.data.message.map((element) => {
							return {
								id: uuidv1(),
								name: createNoun(),
								descriptions: createSentence(),
								image: element
							};
						});
						resolve(data);
					} else {
						console.log('getImageDogs No dogs');
						reject('getImageDogs Errors');
					}
				})
				.catch(function(error) {
					console.log('getImageDogs ' + error);
					reject('getImageDogs Errors');
				});
		});
	}
}

export default new DogsApi();
