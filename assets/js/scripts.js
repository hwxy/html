
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $.backstretch([
      "assets/img/backgrounds/1.jpg"
    , "assets/img/backgrounds/2.jpg"
    , "assets/img/backgrounds/3.jpg"
    ], {duration: 3000, fade: 750});

    

    /*
        Form validation
    */
    $('.register form').submit(function(){
        var order = $(this).find('input#order').val();
        if(order == '') {
            $(this).find("label[for='order']").append("<span style='display:none' class='red'> - Please enter a valid Wowcher Code.</span>");
            $(this).find("label[for='order'] span").fadeIn('medium');
            return false;
        };
        window.location = '../../table.html?code='+order;
        return false;
    });
});


