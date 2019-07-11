var csrftoken = getCookie('csrftoken');

$('#save_category').on('click', function () {
  var name = $('#name').val();

  $.ajax({
    url: 'http://127.0.0.1:8000/create_category/',
    method: 'POST',
    data:{
      csrfmiddlewaretoken: csrftoken,
      'name': name
    }
  }).success(function (response) {
    var res = JSON.parse(response);
    if(res.status == 'success'){
      location.reload();
    }
    });
});

$('.editButton').on('click', function () {
  var id = $(this).attr('data-id');

  $.ajax({
    url: 'http://127.0.0.1:8000/get_category/',
    method: 'POST',
    data: {
      csrfmiddlewaretoken: csrftoken,
      'pk': id
    }
  }).success(function(response){
    var res = JSON.parse(response);
    if(res.status == 'success'){
      $('#nameEdit').val(res.data[0].name);
      $('#idCategory').val(res.data[0].pk);
      $('#show_book').show();
      $('#book_table').slideUp();
      $('#edit_form').slideDown();
    }
  });
});

$('#saveEditedCategory').on('click', function(){
  var id = $('#idCategory').val();
  var name = $('#nameEdit').val();  
  $.ajax({
    url: 'http://127.0.0.1:8000/edit_category/',
    method: 'POST',
    data: {
      csrfmiddlewaretoken: csrftoken,
      'pk': id,
      'name': name
    }
  }).success(function(response){
      var res = JSON.parse(response);      
      if(res.status == 'success'){
        location.reload();
      }
    });
});

$('.deleteCategory').on('click', function () {
  var id = $(this).attr('data-id');
  $.ajax({
    url: 'http://127.0.0.1:8000/delete_category/',
    method: 'POST',
    data: {
      csrfmiddlewaretoken: csrftoken,
      'pk': id
    }
  }).success(function (response) { 
    var res = JSON.parse(response);
    if(res.status == 'success'){
      location.reload();
    }
   });
});

$('#show_book').click(function(){
  $(this).hide();
  $('#formEdit').trigger('reset');
  $('#add_book').show();
  $('#book_table').slideDown();
  $('#book_form').slideUp();
  $('#formEdit').slideUp();

});

