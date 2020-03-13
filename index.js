
$('#js-shopping-list-form').submit(function(e){

    let text = $('#shopping-list-entry').val();
    let newListItem = $('<li><span></span></li>').text(text).addClass('shopping-item');
    let btns = $('<div class="shopping-item-controls"><button class="shopping-item-toggle">Check<button><button class="shopping-item-delete">Delete<button></div>');


    
    $('ul.shopping-list').append(newListItem, btns);
    
  
    $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
    
    e.preventDefault();
});
