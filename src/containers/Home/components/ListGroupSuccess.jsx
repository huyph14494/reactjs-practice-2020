import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { allowDrop, drop, drag } from '../helpers/drag';

export default function ListGroupSuccess(props) {
	return (
    <Container 
      className={'side_right__container'}
      onDrop={(event) => drop(event, props.sort)}
      onDragOver={allowDrop}
      draggable={true} 
      onDragStart={drag}
      id={props.id}
      >
			<ListGroup className={'side_right__list_group_' + (props.headerType || 'danger')}>
				<ListGroup.Item className={'side_right__list_group_' + (props.headerType || 'danger') + '__header'}>
					Cras justo odio
				</ListGroup.Item>
				<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
				<ListGroup.Item>Morbi leo risus</ListGroup.Item>
				<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
				<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
			</ListGroup>
		</Container>
	);
}
