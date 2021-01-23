$(document).ready(function(){

    // array of buttons
    let buttonArray = [];

    // Save input to the time block
    $("#btn7").click(function(){
        let newListItem = $("#description7").val();
        if (newListItem.length > 0){
            // $("#description7").val("");
            buttonArray.push({
                description: newListItem
            })
            localStorage.setItem("new added task", newListItem);
            console.log(newListItem);
        }

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            newListItem.innerHtml += `${value}`
            
        }

    });
    $("#btn8").click(function(){
        let newListItem = $("#description8").val();
        if (newListItem.length > 0){
            // $("#description8").val("");
            buttonArray.push({
                description: newListItem
            })
            localStorage.setItem("new added task", newListItem);
            console.log(newListItem);
        }

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            newListItem.innerHtml += `${value}`
            
        }

    });

    $("#btn9").click(function(){
        let newListItem = $("#description9").val();
        if (newListItem.length > 0){
            // $("#description9").val("");
            buttonArray.push({
                description: newListItem
            })
            localStorage.setItem("new added task", newListItem);
            console.log(newListItem);
        }

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            newListItem.innerHtml += `${value}`
            
        }

    });
    $("#btn10").click(function(){
        let newListItem = $("#description10").val();
        if (newListItem.length > 0){
            // $("#description10").val("");
            buttonArray.push({
                description: newListItem
            })
            localStorage.setItem("new added task", newListItem);
            console.log(newListItem);
        }

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            newListItem.innerHtml += `${value}`
            
        }

    });
    $("#btn11").click(function(){
        let newListItem = $("#description11").val();
        if (newListItem.length > 0){
            // $("#description11").val("");
            buttonArray.push({
                description: newListItem
            })
            localStorage.setItem("new added task", newListItem);
            console.log(newListItem);
        }

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            newListItem.innerHtml += `${value}`
            
        }

    });
    $("#btn12").click(function(){
        let newListItem = $("#description12").val();
        if (newListItem.length > 0){
            // $("#description12").val("");
            buttonArray.push({
                description: newListItem
            })
            localStorage.setItem("new added task", newListItem);
            console.log(newListItem);
        }

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            newListItem.innerHtml += `${value}`
            
        }

    });
    $("#btn13").click(function(){
        let newListItem = $("#description13").val();
        if (newListItem.length > 0){
            // $("#description13").val("");
            buttonArray.push({
                description: newListItem
            })
            localStorage.setItem("new added task", newListItem);
            console.log(newListItem);
        }

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            newListItem.innerHtml += `${value}`
            
        }

    });
    $("#btn14").click(function(){
        let newListItem = $("#description14").val();
        if (newListItem.length > 0){
            // $("#description14").val("");
            buttonArray.push({
                description: newListItem
            })
            localStorage.setItem("new added task", newListItem);
            console.log(newListItem);
        }

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            newListItem.innerHtml += `${value}`
            
        }

    });
    $("#btn15").click(function(){
        let newListItem = $("#description15").val();
        if (newListItem.length > 0){
            // $("#description15").val("");
            buttonArray.push({
                description: newListItem
            })
            localStorage.setItem("new added task", newListItem);
            console.log(newListItem);
        }

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            newListItem.innerHtml += `${value}`
            
        }

    });
    $("#btn16").click(function(){
        let newListItem = $("#description16").val();
        if (newListItem.length > 0){
            // $("#description16").val("");
            buttonArray.push({
                description: newListItem
            })
            localStorage.setItem("new added task", newListItem);
            console.log(newListItem);
        }

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);

            newListItem.innerHtml += `${value}`
            
        }

    });

    // Moment.js for the time sections
    const time = moment();
    let todayDate = moment().format("LL");
    let currentHour = moment().format("HH");
    let timeBlock7 = $("#btn7").data().time;
    let timeBlock8 = $("#btn8").data().time;
    let timeBlock9 = $("#btn9").data().time;
    let timeBlock10 = $("#btn10").data().time;
    let timeBlock11 = $("#btn11").data().time;
    let timeBlock12 = $("#btn12").data().time;
    let timeBlock13 = $("#btn13").data().time;
    let timeBlock14 = $("#btn14").data().time;
    let timeBlock15 = $("#btn15").data().time;
    let timeBlock16 = $("#btn16").data().time;

    
    $("#currentDay").append("<div>" + todayDate + "</div>")

    if (timeBlock7 < currentHour) {
        $("#description7").addClass("past")
    } else if (timeBlock7 > currentHour) {
        $("#description7").addClass("future")
    } else if (timeBlock7 == currentHour) {
        $("#description7").addClass("present")
    }
    if (timeBlock8 < currentHour) {
        $("#description8").addClass("past")
    } else if (timeBlock8 > currentHour) {
        $("#description8").addClass("future")
    } else if (timeBlock8 == currentHour) {
        $("#description8").addClass("present")
    }
    if (timeBlock9 < currentHour) {
        $("#description9").addClass("past")
    } else if (timeBlock9 > currentHour) {
        $("#description9").addClass("future")
    } else if (timeBlock9 == currentHour) {
        $("#description9").addClass("present")
    }
    if (timeBlock10 < currentHour) {
        $("#description10").addClass("past")
    } else if (timeBlock10 > currentHour) {
        $("#description10").addClass("future")
    } else if (timeBlock10 == currentHour) {
        $("#description10").addClass("present")
    }
    if (timeBlock11 < currentHour) {
        $("#description11").addClass("past")
    } else if (timeBlock11 > currentHour) {
        $("#description11").addClass("future")
    } else if (timeBlock11 == currentHour) {
        $("#description11").addClass("present")
    }
    if (timeBlock12 < currentHour) {
        $("#description12").addClass("past")
    } else if (timeBlock12 > currentHour) {
        $("#description12").addClass("future")
    } else if (timeBlock12 == currentHour) {
        $("#description12").addClass("present")
    }
    if (timeBlock13 < currentHour) {
        $("#description13").addClass("past")
    } else if (timeBlock13 > currentHour) {
        $("#description13").addClass("future")
    } else if (timeBlock13 == currentHour) {
        $("#description13").addClass("present")
    }
    if (timeBlock14 < currentHour) {
        $("#description14").addClass("past")
    } else if (timeBlock14 > currentHour) {
        $("#description14").addClass("future")
    } else if (timeBlock14 == currentHour) {
        $("#description14").addClass("present")
    }
    if (timeBlock15 < currentHour) {
        $("#description15").addClass("past")
    } else if (timeBlock15 > currentHour) {
        $("#description15").addClass("future")
    } else if (timeBlock15 == currentHour) {
        $("#description15").addClass("present")
    }
    if (timeBlock16 < currentHour) {
        $("#description16").addClass("past")
    } else if (timeBlock16 > currentHour) {
        $("#description16").addClass("future")
    } else if (timeBlock16 == currentHour) {
        $("#description16").addClass("present")
    }

});







