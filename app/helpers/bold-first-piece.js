import Ember from 'ember';

export function boldFirstPiece(params) {
	let string    = params[0];
	let delimiter = params[1];

	// get first piece
	let splitString = string.split(delimiter);

	// if there's only one piece, don't bold it
	if (splitString.length === 1) { return string; }

	// otherwise, return string with bolded first piece
	splitString[0] = `<b>${splitString[0]}</b>`;
	return Ember.String.htmlSafe(splitString.join(delimiter));
}

export default Ember.Helper.helper(boldFirstPiece);
