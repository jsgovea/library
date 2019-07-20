var csrftoken = getCookie('csrftoken');

$('#createBorrowTeachers').on('click', function(){
  $.ajax({
    url: 'http://127.0.0.1:8000/register_borrow_teachers/',
    method: 'POST',
    data: {
      csrfmiddlewaretoken: csrftoken,
      'book': $('#bookSelect').children("option:selected").val(),
      'teacher': $('#teacherSelect').children("option:selected").val()
    }
  }).success(function(response){
    var res = JSON.parse(response);
    if(res.status == 'success'){
      location.reload();
    }
  });
});

$('.endBorrow').on('click', function(){
  var id = $(this).attr('data-id');
  $.ajax({
    url: 'http://127.0.0.1:8000/borrow_end_teachers/',
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
    $('#book_form').slideUp();
    $('#edit_form').slideUp();
});
