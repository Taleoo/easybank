$( document ).ready(function() {
    
        $("#menu").click(function () {
        if ($('#mobilemenu').length < 1){
            $("#phoneimage").append($("<div />", { id: "mobilemenu" }));
            $( ".menulist" ).clone().appendTo( "#mobilemenu" );
            $("#mobilemenu.menulist").css("display", "inline-block");
            } else {$('#mobilemenu').toggle();
            };
        });
    
});