import React from 'react';
import ListGroupComponent from './ListGroup';

export default function SideRight() {
	return (
		<div>
			<ListGroupComponent isFirst={true} headerType='danger'></ListGroupComponent>
      <ListGroupComponent headerType='success'></ListGroupComponent>
      <ListGroupComponent headerType='warning'></ListGroupComponent>
      <ListGroupComponent headerType='primary'></ListGroupComponent>
		</div>
	);
}
