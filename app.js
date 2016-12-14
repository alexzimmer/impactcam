var count = 0;
var interval = 0;
var clock = 0;
var visanal;
var positive = [];
var negative = [];
var neutral = [];
var mixed = [];
var mic;
var millisecond;



function setup () {
createCanvas(900, 400);
background (120);
mic = new p5.AudioIn();
mic.start();
clock = millis ();
}

function draw () {
millisecond = int(millis());
push();
fill(120);
noStroke();
rect (0, 0, 300, 150);
pop();
micLevel = mic.getLevel();
interval = 60000;

textFont("Futura");
text("Time Elapsed: " + millisecond, 160, 100);

push();
strokeWeight(1+(micLevel*50));
stroke(1 * (micLevel*5),1,0);
line(50, 50, 200 + (micLevel*100), 50);
pop();

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
    //var para = document.createElement('p');
    //var node = document.createTextNode(transcription);
    //para.appendChild(node);
    visanal = compendium.analyse(transcription);

    //var element = document.getElementById('container');
    //element.appendChild(para);
    console.log(transcription);
    console.log(compendium.analyse(transcription));
    console.log(visanal[0].profile);
    console.log(millis());
        
for (i = 0; i < visanal.length; i++) {

        if (visanal[i].profile.label === "neutral") {
    neutral.push(visanal[i].profile.label);
    console.log("neutral = " + neutral.length);
        }
        if (visanal[i].profile.label === "negative") {
    negative.push(visanal[i].profile.label);
    console.log("negative = " + negative.length);
        }
        if (visanal[i].profile.label === "positive") {
    positive.push(visanal[i].profile.label);
    console.log("positive = " + positive.length);
        }
        if (visanal[i].profile.label === "mixed") {
    mixed.push(visanal[i].profile.label);
    console.log("mixed = " + mixed.length);
        }
        i = 0;
    }




push();
fill(255, 100, 100);
ellipse(100, 200, negative.length*10);
pop();
push();
fill(255, 255, 100);
ellipse(300, 200, mixed.length*10);
pop();
push();
fill(255, 100, 255);
ellipse(500, 200, neutral.length*3);
pop();
push();
fill(100, 100, 255);
ellipse(700, 200, positive.length*10);
pop();
};


recognition.onend = function() {
    console.log("ended");
};

recognition.start();
console.log("recognition started");

// function downloadInnerHtml(filename, elId, mimeType) {
//     var elHtml = document.getElementById(elId).innerHTML;
//     var link = document.createElement('a');
//     mimeType = mimeType || 'text/plain';

//     link.setAttribute('download', filename);
//     link.setAttribute('href', 'data:' + mimeType + ';charset=utf-8,' + encodeURIComponent(elHtml));
//     link.click(); 
// }

// var fileName =  'tags.txt'; // You can use the .txt extension if you want
// downloadInnerHtml(fileName, 'container','text/html');

// setTimeout(function(){
// var fileName =  'tags.txt'; // You can use the .txt extension if you want
// downloadInnerHtml(fileName, 'container','text/html');}, 10000);
clock = millis();
    }
}

	

