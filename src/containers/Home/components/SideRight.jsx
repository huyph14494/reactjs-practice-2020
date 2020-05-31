import React, { useState } from 'react';
import ListGroupDanger from './ListGroupDanger';
import ListGroupWarning from './ListGroupWarning';
import ListGroupSuccess from './ListGroupSuccess';
import ListGroupPrimary from './ListGroupPrimary';
import { v1 as uuidv1 } from 'uuid';

let listItems = [
  {
    id: uuidv1(),
		name: 'ListGroupDanger',
		toggle: true
	},
	{
    id: uuidv1(),
		name: 'ListGroupWarning',
		toggle: true
	},
	{
    id: uuidv1(),
		name: 'ListGroupSuccess',
		toggle: true
	},
	{
    id: uuidv1(),
		name: 'ListGroupPrimary',
		toggle: true
	}
];

function showItems(listGroup, sort, onHandleToggle) {
	return listGroup.map((value, index) => {
		switch (value.name) {
			case 'ListGroupDanger':
				return (
					<ListGroupDanger
						headerType={'danger'}
						onHandleToggle={onHandleToggle}
						toggle={value.toggle}
						index={index}
            key={index}
            id={value.id}
						sort={sort}
					/>
				);
			case 'ListGroupWarning':
				return (
					<ListGroupWarning
						headerType={'warning'}
						onHandleToggle={onHandleToggle}
						toggle={value.toggle}
						index={index}
            key={index}
            id={value.id}
						sort={sort}
					/>
				);
			case 'ListGroupSuccess':
				return (
					<ListGroupSuccess
						headerType={'success'}
						onHandleToggle={onHandleToggle}
						toggle={value.toggle}
						index={index}
            key={index}
            id={value.id}
						sort={sort}
					/>
				);
			case 'ListGroupPrimary':
				return (
					<ListGroupPrimary
						headerType={'primary'}
						onHandleToggle={onHandleToggle}
						toggle={value.toggle}
						index={index}
            key={index}
            id={value.id}
						sort={sort}
					/>
				);
			default:
				return null;
		}
	});
}

export default function SideRight() {
	const [ listGroup, setListGroup ] = useState(listItems);
	const onHandleToggle = (id) => {
    listItems = listItems.map(value => {
      if(value.id === id){
        value.toggle = !value.toggle;
      }
      return value;
    })
  };

	const sort = (fromValue, toValue) => {
		fromValue = Number(fromValue);
		toValue = Number(toValue);

		let listGroupNew = [ ...listGroup ];

		let tmp = listGroupNew[fromValue];
		listGroupNew[fromValue] = listGroupNew[toValue];
    listGroupNew[toValue] = tmp;
    
    listGroupNew.forEach(value => {
      let itemFound = listItems.find(element => element.id === value.id);
      if(itemFound){
        value.toggle = itemFound.toggle;
      }
    });

		setListGroup(listGroupNew);
	};

	return <div className="side_right__mtop_first">{showItems(listGroup, sort, onHandleToggle)}</div>;
}
