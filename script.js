jQuery(function ($){
    $('div').click(function(event){
        var pdiv = $(this).parent('li');
        pdiv.insertChildBefore(pdiv.prev)
        //console.log($('div').attr('class'))
        // console.log(event.target.getAttribute('class'))
        // console.log($(this));
        // var obj = event.target;
        // console.log(obj.getAttribute('class'))
    });
} );