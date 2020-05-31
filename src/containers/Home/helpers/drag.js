function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	if (ev && ev.target && ev.target.attributes && ev.target.attributes.hasOwnProperty('index')) {
		ev.dataTransfer.setData('text', ev.target.attributes.index.nodeValue);
		ev.target.style.opacity = '1';
	}
}

function drop(ev, sort) {
	ev.preventDefault();

	try {
		let target = ev.target;
		let parent = target.parentElement; //parent of "target"

		while (parent && (parent.attributes && !parent.attributes.hasOwnProperty('index'))) {
			parent = parent.parentElement;
			if (parent.id === 'root') {
        parent = null;
				break;
      }
      // console.log('while');
		}

		let data = ev.dataTransfer.getData('text');

		// console.log('drop', parent.attributes.index.nodeValue);
		// console.log('drag', data);

		if (
			parent &&
			parent.attributes.hasOwnProperty('index') &&
			!isNaN(data) &&
			!isNaN(parent.attributes.index.nodeValue)
		) {
			sort(data, parent.attributes.index.nodeValue);
		}
	} catch (errors) {
		console.log('Errors drop', errors);
	}
}

export { allowDrop, drag, drop };
