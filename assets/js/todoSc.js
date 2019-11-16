// on click toggle cross through
$("ul").on("click","li", function(){
    $(this).toggleClass("remove");
});

//this is the click that must be made on the span to remove
//if we dont actually remove the elements then they will stay there which will slow down the execution
//so .remove() is important
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(400, function(){
      $(this).remove();
    });
    event.stopPropagation();
});

//create you todo
$('input[type="text"]').keypress(function(event){
    if(event.which === 13){
      var text = $('input[type="text"]').val();
        if(text != ""){
          $("ul").append('<li><span><i class="fa fa-trash"/></span>'+text+'</li>');
          $('input[type="text"]').val("");
        }else{
          alert("Enter something dumbass");
        }
    }
});
var slideUp = false;
$("#add").on("click", function(){
    if(slideUp){
      $('input[type="text"]').css("opacity", 1);
      $('input[type="text"]').slideDown();
      slideUp = false;;
    }else{
      $('input[type="text"]').css("opacity", 0);
      $('input[type="text"]').slideUp();
      slideUp = true;
    }
});
