document.querySelectorAll(".drum").forEach((el) => {
    el.addEventListener("click", function() {
      let note = this.dataset.note
      new Audio(`sounds/${note}.mp3`).play();
    })
    
  })

  const keyToAudio = {
    'w': './sounds/tom-1.mp3',
    'a': './sounds/tom-2.mp3',
    's': './sounds/tom-3.mp3',
    'd': './sounds/tom-4.mp3',
    'j': './sounds/snare.mp3',
    'k': './sounds/crash.mp3',
    'l': './sounds/kick-bass.mp3'
  };
  
  function playAudio(event) {
    const key = event.key.toLowerCase();
    
    if (keyToAudio.hasOwnProperty(key)) {
      const audio = new Audio(keyToAudio[key]);
      audio.play();
    }
  }
  
  document.addEventListener('keydown', playAudio);
  


  function handleKeyPress(event) {
    
    const keyToButtonId = {
      'w': 'wdrum',
      'a': 'adrum',
      's': 'sdrum',
      'd': 'ddrum',
      'j': 'jdrum',
      'k': 'kdrum',
      'l': 'ldrum'
    };
    
    
    const buttonId = keyToButtonId[event.key];
    if (buttonId) {
      
      const button = document.getElementById(buttonId);
      
      button.classList.add('pressed');
      setTimeout(() => {
        button.classList.remove('pressed');
      }, 100); 
    }
  }
  
  document.addEventListener('keydown', handleKeyPress);
  
  document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.add('pressed');
      setTimeout(() => {
        button.classList.remove('pressed');
      }, 100);
    });
  });


