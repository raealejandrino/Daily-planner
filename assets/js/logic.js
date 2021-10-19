
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
    var text = $(this)
    .closest(".task");
        
    console.log(text);
});