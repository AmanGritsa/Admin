cyndyApp.controller('navigationCtrl', function(){
    
     $(document).ready(function(){
       $('.dropdown').click(function(){
          // alert('hii');
           $('.dropdown-menu').toggleClass('opensimp');
       })
    })
    
    
    $(document).ready(function(){
        $('.btn-toggle-fullwidth').click(function(){
            //alert('hii');
            $('body').toggleClass('layout-fullwidth')
        })
    })
    
})