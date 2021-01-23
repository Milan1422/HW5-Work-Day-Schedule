$(document).ready(function(){

// array of buttons
let buttonArray = [];

// Save input to the time block
$("#btn7").click(function(){
    let newListItem = $("#description7").val();
    if (newListItem.length > 0){
        // $("#description7").val("");
        buttonArray.push({
            time: "7am",
            description: newListItem
        })
        localStorage.setItem("new added task", JSON.stringify(buttonArray));
        console.log(newListItem);

        
    }


});

$(":button").on("click", function(){    
    let newTask = $(this).attr("data-time");
    console.log(newTask);
    let textTask = $(".description").val();
    $(".description").change(function(event){
        $("input").append("<p>" + textTask + "</p>")
        // console.log(textTask)
    })



    });
});







