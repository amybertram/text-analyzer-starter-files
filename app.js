//Counts number of words in text
function wordCount(text) {
     return text.toLowerCase().trim().split(" ").length;
}

//Counts unique words in text
function uniqueWords(text) {
	var textArray = text.toLowerCase().trim().split(" ");
	var results = [];
	for (var i=0; i<textArray.length; i++) {
		if (results.indexOf(textArray[i]) === -1) {
			results.push(textArray[i]);
		}	
	}
	return results.length;
}

//Finds average word length
function averageLength(text) {
	var textArray = text.toLowerCase().trim().split(" ");
	var currentChar = 0;
	for (var i=0; i<textArray.length; i++) {
		currentChar += textArray[i].length;
	}
	return (currentChar/textArray.length).toFixed(2);
}

//Adds HTML to the functions
function displayText(text){
	var displayWordCount = wordCount(text);
	var displayUniqueWords = uniqueWords(text);
	var displayAverage = averageLength(text);
	$('.js-report').find('.js-word-count').text(displayWordCount);
	$('.js-report').find('.js-unique-count').text(displayUniqueWords);
	$('.js-report').find('.js-average').text(displayAverage + " characters");
}

//Displays the HTML/CSS/JS upon clicking the submit button
function analyzeIt() {
	$('.js-form').submit(function (event) {
		event.preventDefault();
		$('.js-report').removeClass('hidden');
		var userInput = $(this).find('textarea[name=user-text]').val();
		displayText(userInput);
	});
}	


//Runs the function
$(function() {
  analyzeIt();
}); 

