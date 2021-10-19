// time block variables 

var nineBlock = $(".firstB");
var tenBlock = $(".secondB");
var elevenBlock = $(".thirdB");
var twelveBlock = $(".fourthB");
var oneBlock = $(".fifthB");
var twoBlock = $(".sixthB");
var threeBlock = $(".seventhB");
var fourBlock = $(".eighthB");
var fiveBlock = $(".ninthB");

var blocksArr = [nineBlock,tenBlock,elevenBlock,twelveBlock,oneBlock,twoBlock,threeBlock,fourBlock,fiveBlock];


// Set current time at top of page
var currentTime = moment().format("dddd, MMMM Do");

$("#currentDay").text(currentTime);

// Edit or input a task when clicking on the text field

$(".task").on("click", "p", function() {
    var text = $(this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("form-control-plaintext bg-transparent h-100 p-3 border-0")
        .val(text);

    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    console.log(text);
});

// Clicking on the save button saves the edited input

$(".save").click(function() {
    // get the textarea current value/text
    console.log($(this).prev().find("textarea"));
    
    var text = $(this)
    .prev()
    .find("textarea")
    .val()
    
    if (text) {
        text = text.trim();
    }

    var textInput = $("<p>")
        .addClass("h-100 p-3")
        .text(text);

    $(this).prev().find("textarea").replaceWith(textInput);

});

// Color coded time check

// var timeCheck = function(timeBlock) {
//     // get hour from span
//     var hour = $(timeBlock).find("span").text();

//     // convert to integer and switch 1-5pm into 24 hour time
//     hour = parseInt(hour);
//     if (hour < 6 && hour > 0) {
//         hour += 12;
//     }

//     // convert to moment object
//     hour = moment().set("hour", hour);
//     console.log(hour);

//     // Remove current color-coding classes
//     $(timeBlock).find(".task").removeClass("bg-secondary bg-success bg-danger");

//     // Change color-coding

    
//     if (moment().isAfter(hour)) {
//         $(timeBlock).find(".task").addClass("bg-secondary");
//     }
//     else if (moment().isSame(hour)) {
//         $(timeBlock).find(".task").addClass("bg-danger");
//     }
//     else {
//         $(timeBlock).find(".task").addClass("bg-success");
//     }


// };

// Interval set to run for loop on time checks

setInterval(function() {
    // for loop to run through each time block and pass as argument into timeCheck function
    // for (var i=0; i < blocksArr.length; i++) {
    //     timeCheck(blocksArr[i]);
    // };

    // Each method to run through all the row elements and execute the timecheck function

    $(".row").each(function(){
        // get hour from span
    var hour = $(this).find("span").text();

    // convert to integer and switch 1-5pm into 24 hour time
    hour = parseInt(hour);
    if (hour < 6 && hour > 0) {
        hour += 12;
    }

    // convert to moment object
    hour = moment().set("hour", hour);
    console.log(hour);

    // Remove current color-coding classes
    $(this).find(".task").removeClass("bg-secondary bg-success bg-danger");

        // Change color-coding

        
        if (moment().isAfter(hour)) {
            $(this).find(".task").addClass("bg-secondary");
        }
        else if (moment().isSame(hour)) {
            $(this).find(".task").addClass("bg-danger");
        }
        else {
            $(this).find(".task").addClass("bg-success");
        }

    });
}, (1000*20));


