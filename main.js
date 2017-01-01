var createNote = function(){
  if (event.target.getAttribute('id') === 'addCard'){
    var sNote = document.createElement('div');
    var sNoteText = document.createElement('p');
    var noteRemove = document.createElement('span');

    sNote.setAttribute('class','sNote');
    sNoteText.setAttribute('contenteditable',true);
    sNoteText.setAttribute('class','sNoteText');
    noteRemove.setAttribute('class','noteRemove');
    noteRemove.innerHTML = 'x';
    listBorder.appendChild(sNote);
    sNote.appendChild(noteRemove);
    sNote.appendChild(sNoteText);
    noteRemove.addEventListener('click', function(){
      this.parentNode.remove();
    });
  }
};

var createList = function() {
  listBorder = document.createElement('div');
  listBorder.setAttribute('class', 'listBorder');
  main.appendChild(listBorder);
  listBorder.innerHTML = '<a href="#" id="addCard">Add a card</a>';
  listBorder.addEventListener('click', createNote);

};

var listBorder;
var main = document.querySelector('#main');
var addList = document.querySelector('#addList');
addList.addEventListener('click', createList);
