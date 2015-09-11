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
      e.preventDefault()
      $.post('https://my.sendinblue.com/users/subscribeembed/js_id/26kuw/id/1', function() {
 
      })
             alert("เรียบร้อย! ขอบคุณมากครับ　：）");
    })