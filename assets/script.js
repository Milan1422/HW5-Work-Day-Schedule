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
    
    $("#currentDay").append("<div>" + todayDate + "</div>")

    
});







