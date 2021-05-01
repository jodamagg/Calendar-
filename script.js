$(document).ready(function () {
  //write all of our jquery inside this function

  //Variable Declarations
  //dynamically style the time blocks based on current time
  //display the date to the user
  //first grab a reference to the element that we want the time to be displayed

  var currentDay = $("#currentDay");
  //display current date in that p element
  currentDay.text(moment().format("dddd, MMM Do"));
  //Functions
  //function will be responsible for checking time and determining what class to add past present or future
  function checkTime() {
    //grab current hour using moment js
    var currentHour = moment().hours();
    //need to grab hours for the time block
    //loop through time block hours
    $("time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
    });

    //check current hour against the block hour
    //if else

    if (blockHour < currentHour) {
      $(this).addClass("past");
      // else if (blockHour === currentHour) {
    }
  }
});

//Event Handlers
$(".saveBtn").on("click", function () {
  //need to capture the info that the user inputs and store it in local storage

  //need to vapture the value of that input and need to know what timeblock its attached to

  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  //save info to local storage
  localStorage.setItem(time, value);
});
//display items that are in local storage into time blocks
$("#hour-09 .description").val(localStorage.getItem("hour-09"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
