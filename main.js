// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})



// Write named functions that change the color of the keys below
function keyPlay(e){
  
  if (e.target.className === "keynote" || e.target.className === "black-keynote"  ){
    e.target.parentElement.style.backgroundColor ="yellow";
    
  }else{
    e.target.style.backgroundColor = "yellow";
  }
  playAudio(e);
  
}

function keyReturn(e){
  e.target.style.backgroundColor = "";
  e.target.parentElement.style.backgroundColor = "";
}

function playAudio(e){
  if(e.target.className === "keynote" || e.target.className === "black-keynote"){
    audio = document.querySelector(`audio[id="${e.target.parentElement.id}"]`)
  }else{
    audio = document.querySelector(`audio[id="${e.target.id}"]`)
  }
  
  audio.play();
  audio.currentTime = 0;
}



//keydown
document.addEventListener('keydown', function(e){
  
  let matchingKey = document.querySelector(`section[data-key = "${e.keyCode}"]`)
 
  if (matchingKey){
    matchingKey.style.backgroundColor ="yellow";
    audio = document.querySelector(`audio[id="${matchingKey.id}"]`);
    audio.play();
    audio.currentTime = 0;
  }
  document.addEventListener('keyup', function(e){
    if (matchingKey){
      matchingKey.style.backgroundColor ="";
    }  
  })
})


// Write a named function with event handler properties
const notePlay = function (note){
  //console.log(note);
  note.addEventListener ('mousedown', keyPlay);
  note.addEventListener('mouseup', keyReturn);
}

// Write a loop that runs the array elements through the function
notes.forEach(notePlay);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;


// Write anonymous event handler property and function for the first progress button
nextOne.addEventListener('click', function(e){
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
})

// Write anonymous event handler property and function for the second progress button
nextTwo.addEventListener('click', function(e){
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';
  lastLyric.style.display ="inline-block";
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
})


// Write anonymous event handler property and function for the third progress button
nextThree.addEventListener('click', function(e){
  startOver.hidden = false;
  nextThree.hidden = true;
  lastLyric.style.display ="none";
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'C';
})

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}
