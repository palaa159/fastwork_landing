    $("a[href^='#']").on('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();

       // animate
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top
         }, 300, function(){
   
           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = 'howitworks';
         });

    });

    $('#submitEmail').on('click', function(e) {
      e.preventDefault();
      var $email = $('#email').val();

      $.post( "https://my.sendinblue.com/users/subscribeembed/js_id/26kuw/id/1",
      { js_id: "26kuw", listid: "2", from_url: "yes", hdn_email_txt: "", email: $email },
       function( data ) {
        var obj = jQuery.parseJSON(data);
        //alert(obj.result.result);


        switch (obj.result.result) {
    case "success":
        alert("เรียบร้อย ขอบคุณครับ!");
        break;
    case "invalidEmail":
        alert("กรุณาใส่อีเมลให้ถูกนะครับ");
        break;
    case "emailExist":
        alert("เคยลงทะเบียนแล้วนะครับ :)");
        break;
    default:
        alert("อะไรบางอย่างผิดพลาดนะครับ :(");
        break;

        }
      });


    });