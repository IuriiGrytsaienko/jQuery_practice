jQuery(function ($){
    $('button.up').click(function(event){
        var parentElem = $(this).closest('li');
        parentElem.insertBefore(parentElem.prev());
    });
    $('button.down').click(function(event){
        var parentElem = $(this).closest('li');
        parentElem.insertAfter(parentElem.next());
    });
} );
