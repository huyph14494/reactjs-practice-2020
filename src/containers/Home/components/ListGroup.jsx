import React from 'react'
import { Container, ListGroup } from 'react-bootstrap';

export default function ListGroupComponent(props) {
  return (
    <Container className={ (props.isFirst ? "side_right__mtop_first" : "")  + " side_right__container"}>
				<ListGroup>
					<ListGroup.Item>Cras justo odio</ListGroup.Item>
					<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
					<ListGroup.Item>Morbi leo risus</ListGroup.Item>
					<ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
					<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
				</ListGroup>
			</Container>
  )
}
