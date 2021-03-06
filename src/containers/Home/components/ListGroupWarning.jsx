import React, { useState } from 'react';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';
import { allowDrop, drop, drag } from '../helpers/drag';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export default function ListGroupWarning(props) {
	const [ toggle, setToggle ] = useState(props.toggle);

	const handleMinimize = () => {
		props.onHandleToggle(props.id);
		setToggle(!toggle);
	};

	return (
		<Container
			className={'side_right__container'}
			index={props.index}
      onDrop={(event) => drop(event, props.sort)}
      onDragOver={allowDrop}
		>
			<ListGroup
				className={
					'side_right__list_group_' +
					(props.headerType || 'danger') +
					(toggle ? ' container-show ' : ' container-hidden')
				}
			>
				<ListGroup.Item
					className={'side_right__list_group_' + (props.headerType || 'danger') + '__header'}
					draggable={true}
					onDragStart={drag}
          index={props.index}
				>
					<Row>
						<Col xs={10} className={'text-left'}>
							Cras justo odio
						</Col>
						<Col xs={2}>
							<FontAwesomeIcon
								onClick={handleMinimize}
								icon={toggle ? faMinusSquare : faPlusSquare}
								style={{ height: '24px', width: '24px', cursor: 'pointer' }}
							/>
						</Col>
					</Row>
				</ListGroup.Item>
				<ListGroup.Item className={'text-left'}>Dapibus ac facilisis in</ListGroup.Item>
				<ListGroup.Item className={'text-left'}>Morbi leo risus</ListGroup.Item>
				<ListGroup.Item className={'text-left'}>Porta ac consectetur ac</ListGroup.Item>
				<ListGroup.Item className={'text-left'}>Vestibulum at eros</ListGroup.Item>
			</ListGroup>
		</Container>
	);
}
