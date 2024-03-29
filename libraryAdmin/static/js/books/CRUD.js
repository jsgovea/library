var csrftoken = getCookie('csrftoken');

$('#createBook').on('click', function(){
  $.ajax({
    url: 'http://127.0.0.1:8000/create_book/',
    method: 'POST',
    data: {
      csrfmiddlewaretoken: csrftoken,
      'name': $('#name').val(),
      'description': $('#description').val(),
      'category': $('#category_id').children("option:selected").val(),
      'author': $('#author').val(),
      'available': $('#quantity').val(),
    }
  }).success(function(response){
    var res = JSON.parse(response);
    if(res.status == 'success'){
      location.reload();
    }
  });

});

$('.editButton').on('click', function(){
  $('#add_book').hide();
  $('#show_book').show();
  var id = $(this).attr('data-id');
  $.ajax({
    url: 'http://127.0.0.1:8000/get_book/',
    method: 'POST',
    data: {
      csrfmiddlewaretoken: csrftoken,
      'pk': id
    }
  }).success(function(response){
    var res = JSON.parse(response);  
      
    if(res.status == 'success'){
      $('#idBook').val(res.data[0].pk);
      $('#titleEdit').val(res.data[0].name);
      $('#descriptionEdit').val(res.data[0].description);
      $('#categoryEdit').val(res.data[0].category)
      $('#authorEdit').val(res.data[0].author);
      $('#quantityEdit').val(res.data[0].available);
      $('#book_table').slideUp();
      $('#edit_form').slideDown();
    }
  });
});

$('#saveEditedBook').on('click', function(){
  var id = $('#idBook').val();
  var title = $('#titleEdit').val();
  var description = $('#descriptionEdit').val();
  var category = $('#categoryEdit').children("option:selected").val();
  var author = $('#authorEdit').val();
  var quantity = $('#quantityEdit').val();
  $.ajax({
    url: 'http://127.0.0.1:8000/update_book/',
    method: 'POST',
    data: {
      csrfmiddlewaretoken: csrftoken,
      'pk': id,
      'name': title,
      'description': description,
      'category': category,
      'author': author,
      'available': quantity,
    }
  }).success(function(response){
      var res = JSON.parse(response);
      if(res.status == 'success'){
        location.reload();
      }else{
        console.log('Error');
      }
    });

});

$('.delete-book').on('click', function () {
  var id = $(this).attr('data-id');
  $.ajax({
    url: 'http://127.0.0.1:8000/delete_book/',
    method: 'POST',
    data: {
      csrfmiddlewaretoken: csrftoken,
      'pk': id
    }
  }).success(function(response){
    var res = JSON.parse(response);
    if(res.status == 'success'){
      location.reload();
    }
  });
});

$('#show_book').click(function () {
    $(this).hide();
    $('#add_book').show();
    $('#book_table').slideDown();
    $('#newBook').slideUp();
    $('#edit_form').slideUp();
});
