//Counts number of words in text
function wordCount(text) {
     return text.trim().split(" ").length;
}
debug(wordCount('hello my name is isa. a dog?'));

//Counts unique words in text
function uniqueWords(text) {
	var textArray = text.trim().split(" ");
	var results = [];
	for (var i=0; i<textArray.length; i++) {
		if (results.indexOf(textArray[i]) === -1) {
			results.push(textArray[i]);
		}	
	}
	return results.length;
}
debug(uniqueWords('hello my my name name is hello is my name'));

//Finds average word length
function averageLength(text) {
	var textArray = text.trim().split(" ");
	var currentChar = 0;
	for (var i=0; i<textArray.length; i++) {
		currentChar += textArray[i].length;
	}
	return (currentChar/textArray.length).toFixed(2);
}
debug(averageLength('dogggg catgsssssgg bluegfg yesldllow goldgffhfhfhg'));

//function roundDecimal(value) {
    //return Number(Math.round(value+'e2')+'e-2');
//};