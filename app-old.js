var count = 0;
var interval = 0;
var clock = 0;

function draw () {
var interval = 60000;

if (millis() - clock > interval) {
var recognition = new webkitSpeechRecognition();
recognition.lang = "en-US"
recognition.continuous = true;
recognition.interimResults = false;
recognition.onstart = function() {
    console.log("started");
};

recognition.onresult = function(event) {
	var transcription = event.results[event.results.length-1][0].transcript;
    var para = document.createElement('p');
    var node = document.createTextNode(transcription);
    para.appendChild(node);

    var element = document.getElementById('container');
    element.appendChild(para);
    console.log(transcription);
    console.log(compendium.analyse(transcription));
};

recognition.onend = function() {
    console.log("ended");
};

recognition.start();
console.log("recognition started");

function downloadInnerHtml(filename, elId, mimeType) {
    var elHtml = document.getElementById(elId).innerHTML;
    var link = document.createElement('a');
    mimeType = mimeType || 'text/plain';

    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click(); 
}

// var fileName =  'tags.txt'; // You can use the .txt extension if you want
// downloadInnerHtml(fileName, 'container','text/html');

// setTimeout(function(){
// var fileName =  'tags.txt'; // You can use the .txt extension if you want
// downloadInnerHtml(fileName, 'container','text/html');}, 10000);
clock = millis();
    }
}

	

