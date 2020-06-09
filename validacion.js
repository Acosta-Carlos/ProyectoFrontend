
  $('#contact-submit').on('click', function (e) {
    e.preventDefault();

  
    var error = false;
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

  
    if (name.length === 0) {
      (error = true);
      $('#name').css('border-color', '#D8000C');
    } else {
      $('#name').css('border-color', '#666');
    }
    if (email.length === 0 || email.indexOf('@') === '-1') {
      (error = true);
      $('#email').css('border-color', '#D8000C');
    } else {
      $('#email').css('border-color', '#666');
    }
    if (subject.length === 0) {
      (error = true);
      $('#subject').css('border-color', '#D8000C');
    } else {
      $('#subject').css('border-color', '#666');
    }
    if (message.length === 0) {
      (error = true);
      $('#message').css('border-color', '#D8000C');
    } else {
      $('#message').css('border-color', '#666');
    }

    
    if (error === false) {
      $('#contact-submit').attr({
        'disabled': 'false',
        'value': 'Sending...'
      });

      
      $.post('sendmail.php', $('#contact-form').serialize(), function (result) {
        
        if (result === 'enviar') {
          
          $('#cf-submit').remove();
          
          $('#mail-success').fadeIn(500);
        } else {
          
          $('#mail-fail').fadeIn(500);
          
          $('#contact-submit').removeAttr('disabled').attr('value', 'Send The Message');
        }
      });
    }
  });