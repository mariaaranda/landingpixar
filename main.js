$(document).ready(function(){
    $(".burguer").click(function(){
        $(".lateral").toggleClass("posicion");
    });
    $(".primero").click(function(){
        var menu_change = $(this).attr("data-menu"); 

        $(".primero").removeClass("activo");
        $(this).addClass("activo");
        $("#"+menu_change).addClass("activo");
        console.log(menu_change);
    });
});