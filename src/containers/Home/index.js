import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import List from './components/List';
import SideRight from './components/SideRight';
import backend from 'src/api/backend';
import { delay } from 'redux-saga/effects';
import { v1 as uuidv1 } from 'uuid';
import { SHOW_ALERT_ANIMATION } from 'src/redux/actions/alertAnimation';
import { connect } from 'react-redux';
import './scss/list.scss';
const LIMIT_IMAGE = 5;

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
			} catch(errors) {
			  showAlertAnimation(props, 'Đã có biến lớn, nghỉ chơi 🤣🤣🤣🤣🤣');
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
		</Container>
	);
}

Home.displayName = 'Home';

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		showAlertAnimation: (alert) => {
			dispatch({ type: SHOW_ALERT_ANIMATION, alert });
		}
	};
};

export default connect(null, mapDispatchToProps)(Home);