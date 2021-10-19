
// Set current time at top of page
var currentTime = moment().format("dddd, MMMM Do");

$("#currentDay").text(currentTime);

// Edit or input a task when clicking on the text field

$(".task").on("click", "p", function() {
    var text = $(this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("form-control bg-transparent")
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
    .trim();

    var textInput = $("<p>")
        .addClass("h-100 p-3")
        .text(text);

    $(this).prev().find("textarea").replaceWith(textInput);

    
    
        
    console.log(text);
});