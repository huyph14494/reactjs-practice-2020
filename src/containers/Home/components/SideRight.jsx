import React from 'react';
import ListGroupComponent from './ListGroup';

export default function SideRight() {
	return (
		<div>
			<ListGroupComponent isFirst={true}></ListGroupComponent>
      <ListGroupComponent></ListGroupComponent>
      <ListGroupComponent></ListGroupComponent>
		</div>
	);
}
