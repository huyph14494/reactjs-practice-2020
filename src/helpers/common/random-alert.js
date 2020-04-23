import nouns from '../words/nouns';
import adjectives from '../words/adjectives';

function createSentence() {
	let noun = nouns[Math.floor(Math.random() * nouns.length)];
	let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

	let contentNoun = 'The Noun is ' + noun;
	let contenAdjective = 'The Adjective is ' + adjective;

	return contentNoun + '. ' + contenAdjective + '. Combine "' + noun + " " + adjective + '". ';
}

let listAlert = [ 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark' ];
function randomVariant() {
	return listAlert[Math.floor(Math.random() * listAlert.length)];
}

export { createSentence, randomVariant };
