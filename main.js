var createNote = function(){
  if (event.target.getAttribute('id') === 'addCard'){
    var sNote = document.createElement('div');
    var sNoteText = document.createElement('p');
    var mainNoteText = document.createElement('p');
    var noteRemove = document.createElement('span');
    var inputTitle = document.createElement('input');


    sNote.setAttribute('class','sNote');;
    sNoteText.setAttribute('class','sNoteText');
    mainNoteText.setAttribute('contenteditable', true);
    noteRemove.setAttribute('class','noteRemove');
    inputTitle.setAttribute('id', 'title');

    inputTitle.type = 'text';
    inputTitle.placeholder = 'Enter a title';
    noteRemove.innerHTML = 'x' ;
    mainNoteText.textContent = 'Enter text here: ';

    listBorder.appendChild(sNote);
    sNote.appendChild(sNoteText);
    sNoteText.appendChild(inputTitle);
    sNoteText.appendChild(noteRemove);
    sNote.appendChild(mainNoteText);
    inputTitle.addEventListener('keyup', function(){
      if(event.keyCode === 13){
        sNoteText.textContent = inputTitle.value;
        sNoteText.appendChild(noteRemove);
      }
    });
    noteRemove.addEventListener('click', function(){
      this.parentNode.parentNode.remove();
    });
  }
};

var createList = function() {
  if (event.target.getAttribute('id') === 'addList'){
    listBorder = document.createElement('div');
    listBorder.setAttribute('class', 'listBorder');
    main.appendChild(listBorder);
    listBorder.innerHTML = '<a href="#Add a card" id="addCard">Add a card</a>';
    listBorder.removeEventListener('click', createNote);
    listBorder.addEventListener('click', createNote);

  }
};

var listBorder;
var main = document.querySelector('#main');
main.addEventListener('click', createList);
