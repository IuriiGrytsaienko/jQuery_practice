jQuery(function ($){
    $('button.up').click(function(event){
        var parentElem = $(this).parent().parent();
        parentElem.insertBefore(parentElem.prev());
        return false
    });
    $('button.down').click(function(event){
        var parentElem = $(this).parent().parent();
        parentElem.insertAfter(parentElem.next());
        return false
    });
} );