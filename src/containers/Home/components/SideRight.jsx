import React, { useState } from 'react';
import ListGroupDanger from './ListGroupDanger';
import ListGroupWarning from './ListGroupWarning';
import ListGroupSuccess from './ListGroupSuccess';
import ListGroupPrimary from './ListGroupPrimary';

let listItems = [ 'ListGroupDanger', 'ListGroupWarning', 'ListGroupSuccess', 'ListGroupPrimary' ];

function showItems(listGroup, sort) {
	return listGroup.map((value, index) => {
		// eslint-disable-next-line default-case
		switch (value) {
			case 'ListGroupDanger':
				return <ListGroupDanger headerType={'danger'} id={index} key={index} sort={sort} />;
			case 'ListGroupWarning':
				return <ListGroupWarning headerType={'warning'} id={index} key={index} sort={sort} />;
			case 'ListGroupSuccess':
				return <ListGroupSuccess headerType={'success'} id={index} key={index} sort={sort} />;
			case 'ListGroupPrimary':
				return <ListGroupPrimary headerType={'primary'} id={index} key={index} sort={sort} />;
		}
	});
}

export default function SideRight() {
  const [ listGroup, setListGroup ] = useState(listItems);
  
  const sort = (fromValue, toValue) => {
		fromValue = Number(fromValue);
		toValue = Number(toValue);

		let listGroupNew = [ ...listGroup ];

		let tmp = listGroupNew[fromValue];
		listGroupNew[fromValue] = listGroupNew[toValue];
		listGroupNew[toValue] = tmp;

		setListGroup(listGroupNew);
	};

	return <div className="side_right__mtop_first">{showItems(listGroup, sort)}</div>;
}
