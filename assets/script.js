$(document).ready(function(){

// Save input to the time block
$("#btn7").click(function(){
    console.log("clicked");
    let newListItem = $("#description7").val();
    if (newListItem.length > 0){
        $("#description7").append("<li>" + newListItem + "</li>");
        $("#description7").val();
        console.log(newListItem);
    }
});



});