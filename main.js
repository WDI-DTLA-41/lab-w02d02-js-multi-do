// button event listener to add list
jQuery('button').on('click', function() {
  console.log('clicked')
  addAList();
});

// function for adding a list
var addAList = function() {
  // create list container
  var $listContainer = jQuery('<div>')
  // add class
  $listContainer.addClass('listContainer draggable')
  $listContainer.draggable();
  // Create delete icon
  var $trashbin = jQuery('<div>')
  $trashbin.addClass('trashbin material-icons')
  $trashbin.text('delete')
  $trashbin.on('click', deleteList)
  $trashbin.appendTo($listContainer)
  // create UList
  var $ul = jQuery('<ul>')
  // add class
  $ul.addClass('list')
  // create list Header
  var $listHeader = jQuery('<h4>')
  // set default list name
  $listHeader.text('Unnamed List')
  $listHeader.attr('contenteditable', 'true');
  // add class
  $listHeader.addClass('listHeader')
  // create input box
  var $inputCard = jQuery('<input>')
  $inputCard.attr('placeholder', 'Add a card...');


  // event listener for adding card to list
  $inputCard.on('keypress', getCardInput)
  // append elements
  // append the list
  $listHeader.appendTo($ul)
  $ul.appendTo($listContainer)
  $inputCard.appendTo($listContainer)
  // append list to body
  jQuery('body').append($listContainer)
};


// function for card creation
var addACard = function(newItem, list) {
  // create li
  $card = jQuery('<li>')
  // specify class of card
  $card.addClass('card')
  // set attribute contentedible true
  $card.attr('contenteditable', 'true');
  // set card text to input val
  $card.text(newItem)
  // append li to ul
  $card.appendTo(list)

};

// function to delete list
var deleteList = function() {
  jQuery(this).parent().remove()
  console.log('delete')
};

// function to create list container

var getCardInput = function(evt){
  if(evt.keyCode === 13 && jQuery(this).val() !== "") {
    console.log('i pressed enter')
    console.log(jQuery(this))
    // get the list to append to
    $list = jQuery(this).prev()
    $newCardText = jQuery(this).val()
    addACard($newCardText, $list)
    jQuery(this).val(null)
  }
}




























