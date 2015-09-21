$(function() {
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });
  // Setup page
  $(window).on('load', function() {
    adjustPageSize()
    $.post('newSignup.php', function(result) {
      $('#nRegis').html(result);
      // console.log(result)
    });
  });

  $(window).on('resize', function() {
    adjustPageSize()
  })

  var adjustPageSize = function() {
    $('.page').hide()
    $.each($('.page'), function(i, v) {
      $(v).css({
        top: (i * 100) + '%',
        height: window.innerHeight
      })
    });
    $('.page').fadeIn('fast')
  };

  $('#btn-register').on('click', function() {
    // console.log('click')
    $('#email').focus();
  });

  $('#submitEmail').on('click', function(e) {
    e.preventDefault();
    var $email = $('#email').val();
    $('#submitEmail').html('กำลังส่ง')
    $.post("https://my.sendinblue.com/users/subscribeembed/js_id/26kuw/id/1", {
        js_id: "26kuw",
        listid: "2",
        from_url: "yes",
        hdn_email_txt: "",
        email: $email
      },
      function(data) {
        var obj = jQuery.parseJSON(data);
        //alert(obj.result.result);


        switch (obj.result.result) {
          case "success":
            // bootbox.alert("เรียบร้อย ขอบคุณครับ!");
            $.get('newSignup.php', function(res) {
              setTimeout(function() {
                location.href = "thankyou.html"
                $('#email').val('');
              }, 500);
            });
            break;
          case "invalidEmail":
            bootbox.alert("กรุณาใส่อีเมลให้ถูกนะครับ");
            break;
          case "emailExist":
            bootbox.alert("เคยลงทะเบียนแล้วนะครับ :)");
            $('#email').val('');
            break;
          default:
            bootbox.alert("อะไรบางอย่างผิดพลาดนะครับ :(");
            break;

        }
      });
  });
})