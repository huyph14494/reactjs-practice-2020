import { useState, useEffect, useRef } from 'react';

function randomColor(oldColor) {
	let colorList = [ 'lightblue', 'red', 'springgreen', 'yellow', 'cyan', 'plum', 'lightsalmon' ];
	let newColor = null;
	while (true) {
		newColor = colorList[Math.floor(Math.random() * colorList.length)];
		if (newColor !== oldColor) {
			break;
		}
	}
	return newColor;
}

export default function useMagicColor(initColor = 'white') {
	const [ color, setColor ] = useState(initColor);
	const coloRef = useRef(initColor);

	// console.log("useMagicColor");

	useEffect(() => {
		// console.log("useMagicColor useEffect");

		let intervalColor = setInterval(() => {
			// console.log("useMagicColor useEffect setInterval");
			let newColor = randomColor(coloRef.current);
			setColor(newColor);
			coloRef.current = newColor
		}, 1000);

		return () => {
			// console.log("useMagicColor useEffect clear");
			clearInterval(intervalColor);
		};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { color };
}
