function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  ev.target.style.opacity = '1.0';
}


function drop(ev, sort) {
	ev.preventDefault();

  try {
    let target = ev.target;
    let parent = target.parentElement;//parent of "target"
    let parent2 = parent.parentElement;//parent of "target"
    let data = ev.dataTransfer.getData('text');
    // console.log('drop', parent2.id);
    // console.log('drag', data);

    sort(data, parent2.id);
  
  } catch (errors) {
    console.log('Errors drop', errors);
  }
}

export { allowDrop, drag, drop };
