var csrftoken = getCookie('csrftoken');

$('#createStudent').on('click', function () {
    var id = $('#id').val();
    var first_name = $('#firstName').val();
    var last_name = $('#lastName').val();
    var career = $('#career').val();
    var quarter = $('#quarter').val();

    $.ajax({
        url: 'http://127.0.0.1:8000/create_student/',
        method: 'POST',
        data: {
            csrfmiddlewaretoken: csrftoken,
            'id': id,
            'first_name': first_name,
            'last_name': last_name,
            'career': career,
            'quarter': quarter
        }
    }).done(function (response) {
        var res = JSON.parse(response);
        if(res.status == 'success'){
            location.reload();
        }
     });
});

$('.editButton').on('click', function () {
    $('#add_book').hide();
    $('#show_book').show();
    var id = $(this).attr('data-id');
    $.ajax({
      url: 'http://127.0.0.1:8000/get_student/',
      method: 'POST',
      data: {
        csrfmiddlewaretoken: csrftoken,
        'pk': id
      }
    }).done(function(response) {
      var res = JSON.parse(response);
      if(res.status == 'success'){
        $('#idStudent').val(res.data[0].pk);
        $('#idEdit').val(res.data[0].student_id);
        $('#firstNameEdit').val(res.data[0].first_name);
        $('#lastNameEdit').val(res.data[0].last_name);
        $('#careerEdit').val(res.data[0].career);
        $('#quarterEdit').val(res.data[0].quarter);
        $('#book_table').slideUp();
        $('#edit_form').slideDown();
      }
    });
});

$('#editStudent').on('click', function () {
  var id = $('#idStudent').val();
  var first_name = $('#firstNameEdit').val();
  var last_name = $('#lastNameEdit').val();
  var career = $('#careerEdit').val();
  var quarter = $('#quarterEdit').val();

  $.ajax({
    url: 'http://127.0.0.1:8000/edit_student/',
    method: 'POST',
    data: {
      csrfmiddlewaretoken: csrftoken,
      'pk': id,
      'first_name': first_name,
      'last_name': last_name,
      'career': career,
      'quarter': quarter
    }
  }).done(function(response){
    var res = JSON.parse(response);
    if(res.status == 'success'){
      location.reload();
    }
  });
});

$('.delete-student').on('click', function(){
  var id = $(this).attr('data-id');
  $.ajax({
    url: 'http://127.0.0.1:8000/delete_student/',
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
