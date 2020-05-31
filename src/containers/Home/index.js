import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import List from './components/ListPhoto';
import SideRight from './components/SideRight';
import backend from 'src/api/backend';
import { delay } from 'redux-saga/effects';
import { v1 as uuidv1 } from 'uuid';
import { SHOW_ALERT_ANIMATION } from 'src/redux/actions/alertAnimation';
import { connect } from 'react-redux';
import PhotoModal from './components/PhotoModal';
import './scss/list.scss';
const LIMIT_IMAGE = 5;

const randomNews = (news) => {
	let list = [];
	let listNews = [];
	while (list.length < LIMIT_IMAGE) {
		const index = Math.floor(Math.random() * news.length);

		if (list.indexOf(index) === -1) {
			list.push(index);
			listNews.push(news[index]);
		}
	}

	return listNews;
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
	const [ news, setNews ] = useState([]);

	useEffect(() => {
		let fetchApi = async () => {
			try {
				await delay(1000);
				let dataNew = await backend.getPhotos(LIMIT_IMAGE);
				setNews(dataNew);
			} catch (errors) {
				showAlertAnimation(props, 'Đã có biến lớn, nghỉ chơi 🤣🤣🤣🤣🤣');
				setNews(randomNews(props.news));
			}
		};

		fetchApi();
		// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

	let onRefresh = async () => {
		try {
			await delay(3000);
			let dataNew = await backend.getPhotos(LIMIT_IMAGE);
			setNews(dataNew);
		} catch (errors) {
			showAlertAnimation(props, 'Đã có biến lớn, nghỉ chơi 🤣🤣🤣🤣🤣');
			setNews(randomNews(props.news));
		}
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
					<List news={news} />
				</Col>
				<Col className="pl-4 pr-4" md={4}>
					<SideRight />
				</Col>
			</Row>
      <PhotoModal></PhotoModal>
		</Container>
	);
}

Home.displayName = 'Home';

const mapStateToProps = (state, ownProps) => {
	return {
		news: state.news
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
