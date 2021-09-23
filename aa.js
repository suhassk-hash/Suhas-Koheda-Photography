window.addEventListener('contextmenu', function (e) { 
    // do something here... 
    e.preventDefault(); 
  }, false);
  $(document).ready(function() {
    $('.image-link').magnificPopup({type:'image'});
  });
  