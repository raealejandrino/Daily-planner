

var tasks = {};


var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // if nothing in localStorage, create a new object to track all tasks
    if (!tasks) {
      tasks = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: []
      };
    }

    for (const [key, value] of Object.entries(tasks)) {
        createTasks(key, value);
    }
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };


var createTasks = function(key, value) {
    var taskElements = $(".save").closest(".row");

    $(taskElements[key]).find("p").text(value);

};
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


    // get the task block position
    var blockIndex = $(this)
        .closest(".row")
        .index();

    tasks[blockIndex] = text;
    saveTasks();
});

// Color coded time check

// Interval set to run for loop on time checks

setInterval(function() {
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

        // Block color-coding

        // Change past timeblocks to grey
        if (moment().isAfter(hour)) {
            $(this).find(".task").addClass("bg-secondary");
        }
        // Change current timeblock to red
        else if (moment().isSame(hour)) {
            $(this).find(".task").addClass("bg-danger");
        }
        // Change future timeblocks to green
        else {
            $(this).find(".task").addClass("bg-success");
        }

    });
}, (1000*20));


loadTasks();

