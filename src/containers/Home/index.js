import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ListPhoto from './components/ListPhoto';
import SideRight from './components/SideRight';
import backend from 'src/api/backend';
import { delay } from 'redux-saga/effects';
import { v1 as uuidv1 } from 'uuid';
import { SHOW_ALERT_ANIMATION } from 'src/redux/actions/alertAnimation';
import { connect } from 'react-redux';
import PhotoModal from './components/PhotoModal';
import './scss/list.scss';
const LIMIT_PHOTOS = 5;

const randomPhotos = (photos) => {
	let list = [];
	let listPhoto = [];
	while (list.length < LIMIT_PHOTOS) {
		const index = Math.floor(Math.random() * photos.length);

		if (list.indexOf(index) === -1) {
			list.push(index);
			listPhoto.push(photos[index]);
		}
	}

	return listPhoto;
};

function showAlertAnimation(props, error) {
	let alert = {
		context: error,
		variant: 'danger',
		classTransition: 'toggen',
		toggle: true,
		id: uuidv1()
	};

	props.showAlertAnimation(alert);
}

function Home(props) {
	const [ photos, setPhotos ] = useState([]);

	useEffect(() => {
		let fetchApi = async () => {
			try {
				await delay(1000);
				let dataNew = await backend.getPhotos(LIMIT_PHOTOS);
				setPhotos(dataNew);
			} catch (errors) {
				showAlertAnimation(props, 'Đã có biến lớn, nghỉ chơi 🤣🤣🤣🤣🤣');
				setPhotos(randomPhotos(props.photos));
			}
		};

		fetchApi();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let onRefresh = async () => {
		try {
			await delay(3000);
			let dataNew = await backend.getPhotos(LIMIT_PHOTOS);
			setPhotos(dataNew);
		} catch (errors) {
			showAlertAnimation(props, 'Đã có biến lớn, nghỉ chơi 🤣🤣🤣🤣🤣');
			setPhotos(randomPhotos(props.photos));
		}
	};

	let onUpdatePhoto = (photoNew) => {
		if (!photoNew || !photoNew.id) {
			return false;
		}

		let dataNew = photos.map((value) => {
			if (photoNew.id === value.id) {
				return { ...value, name: photoNew.name, descriptions: photoNew.descriptions, image: photoNew.photo };
			} else {
				return value;
			}
		});
		setPhotos(dataNew);
	};

	return (
		<Container>
			<Row className={'mt-4 mb-4'}>
				<Col xs={12}>
					<Button variant="outline-danger" onClick={onRefresh}>
						Refresh
					</Button>
				</Col>
			</Row>
			<Row>
				<Col xs={12} md={8}>
					<ListPhoto photos={photos} />
				</Col>
				<Col className="pl-4 pr-4" md={4}>
					<SideRight />
				</Col>
			</Row>
			<PhotoModal onUpdatePhoto={onUpdatePhoto} />
		</Container>
	);
}

Home.displayName = 'Home';

const mapStateToProps = (state, ownProps) => {
	return {
		photos: state.news
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		showAlertAnimation: (alert) => {
			dispatch({ type: SHOW_ALERT_ANIMATION, alert });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
