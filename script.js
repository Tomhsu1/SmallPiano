var choice;
var allAudio;
var c = new Audio("notes/c_note.mp3");
var d = new Audio("notes/d_note.mp3");
var e = new Audio("notes/e_note.mp3");
var f = new Audio("notes/f_note.mp3");
var g = new Audio("notes/g_note.mp3");
var a = new Audio("notes/a_note.mp3");
var b = new Audio("notes/b_note.mp3");
var c_sharp = new Audio("notes/c_sharp.mp3");
var d_sharp = new Audio("notes/d_sharp.mp3");
var f_sharp = new Audio("notes/f_sharp.mp3");
var g_sharp = new Audio("notes/g_sharp.mp3");
var a_sharp = new Audio("notes/a_sharp.mp3");

function playNote(event, choice) {
  var x = event.key;
  if (choice === "cNote" || x === "a") {
    document.getElementById('cNote').style.backgroundColor = "grey";
    c.play();
    c.currentTime = 0;
  } else if (choice === "dNote" || x === "s") {
    document.getElementById('dNote').style.backgroundColor = "grey";
    d.play();
    d.currentTime = 0;
  } else if (choice === "eNote" || x === "d") {
    document.getElementById('eNote').style.backgroundColor = "grey";
    e.play();
    e.currentTime = 0;
  } else if (choice === "fNote" || x === "f") {
    document.getElementById('fNote').style.backgroundColor = "grey";
    f.play();
    f.currentTime = 0;
  } else if (choice === "gNote" || x === "g") {
    document.getElementById('gNote').style.backgroundColor = "grey";
    g.play();
    g.currentTime = 0;
  } else if (choice === "aNote" || x === "h") {
    document.getElementById('aNote').style.backgroundColor = "grey";
    a.play();
    a.currentTime = 0;
  } else if (choice === "bNote" || x === "j") {
    document.getElementById('bNote').style.backgroundColor = "grey";
    b.play();
    b.currentTime = 0;
  } else if (choice === "c#" || x === "w") {
    document.getElementById('c#').style.backgroundColor = "grey";
    c_sharp.play();
    c_sharp.currentTime = 0;
  } else if (choice === "d#" || x === "e") {
    document.getElementById('d#').style.backgroundColor = "grey";
    d_sharp.play();
    d_sharp.currentTime = 0;
  } else if (choice === "f#" || x === "t") {
    document.getElementById('f#').style.backgroundColor = "grey";
    f_sharp.play();
    f_sharp.currentTime = 0;
  } else if (choice === "g#" || x === "y" ) {
    document.getElementById('g#').style.backgroundColor = "grey";
    g_sharp.play();
    g_sharp.currentTime = 0;
  } else if (choice === "a#" || x === "u") {
    document.getElementById('a#').style.backgroundColor = "grey";
    a_sharp.play();
    a_sharp.currentTime = 0;
  }
}

function returnColor() {
  document.getElementById('cNote').style.backgroundColor = "white";
  document.getElementById('dNote').style.backgroundColor = "white";
  document.getElementById('eNote').style.backgroundColor = "white";
  document.getElementById('fNote').style.backgroundColor = "white";
  document.getElementById('gNote').style.backgroundColor = "white";
  document.getElementById('aNote').style.backgroundColor = "white";
  document.getElementById('bNote').style.backgroundColor = "white";
  document.getElementById('c#').style.backgroundColor = "black";
  document.getElementById('d#').style.backgroundColor = "black";
  document.getElementById('f#').style.backgroundColor = "black";
  document.getElementById('g#').style.backgroundColor = "black";
  document.getElementById('a#').style.backgroundColor = "black";
}
