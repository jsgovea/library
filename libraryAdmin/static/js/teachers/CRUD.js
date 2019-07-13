var csrftoken = getCookie('csrftoken');

$('#createTeacher').on('click', function() {
  $.ajax({
    url: 'http://127.0.0.1:8000/create_teacher/',
    method: 'POST',
    data: {
      csrfmiddlewaretoken: csrftoken,
      'id': $('#id').val(),
      'first_name': $('#firstName').val(),
      'last_name': $('#lastName').val(),
      'coordination': $('#coordination').val()
    }
  }).done(function(response){
    var res = JSON.parse(response);
    console.log(res);
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
    url: 'http://127.0.0.1:8000/get_teacher/',
    method: 'POST',
    data: {
      csrfmiddlewaretoken: csrftoken,
      'pk': id
    }
  }).done(function(response){
    var res = JSON.parse(response);
    if(res.status == 'success'){
      $('#pkTeacher').val(res.data[0].pk);
      $('#idEdit').val(res.data[0].teacher_id);
      $('#firstNameEdit').val(res.data[0].first_name);
      $('#lastNameEdit').val(res.data[0].last_name);
      $('#coordinationEdit').val(res.data[0].coordination);
      $('#book_table').slideUp();
      $('#edit_form').slideDown();
    }
  });
});

$('#editTeacher').on('click', function(){
  $.ajax({
    url: 'http://127.0.0.1:8000/edit_teacher/',
    method: 'POST',
    data: {
      csrfmiddlewaretoken: csrftoken,
      'pk': $('#pkTeacher').val(),
      'first_name': $('#firstNameEdit').val(),
      'last_name': $('#lastNameEdit').val(),
      'coordination': $('#coordinationEdit').val()
    }
  }).done(function(response){
    var res = JSON.parse(response);
    if(res.status == 'success'){
      location.reload();
    }
  });
});

$('.delete-teacher').on('click', function(){
  var id = $(this).attr('data-id');
  $.ajax({
    url: 'http://127.0.0.1:8000/delete_teacher/',
    method: 'POST',
    data: {
      csrfmiddlewaretoken: csrftoken,
      'pk': id
    }
  }).done(function(response){
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
    $('#book_form').slideUp();
    $('#formEdit').slideUp();
    $('#edit_form').slideUp();
});
