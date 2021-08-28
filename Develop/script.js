//assign variable to momentjs format to get current day (weekday, month day)
let currentDay = moment().format('dddd, MMMM Do');
//use jQuery to get id from html and display text of above variable
$('#currentDay').text(currentDay); 

//assign variables for each time block
let hour9 = $('#9block');
let hour10 = $('#10block');
let hour11 = $('#11block');
let hour12 = $('#12block');
let hour1 = $('#1block');
let hour2 = $('#2block');
let hour3 = $('#3block');
let hour4 = $('#4block');
let hour5 = $('#5block');
//variables for save
let saveButton = $('.saveBtn');
//varibles for time comparison
let currentTime = parseInt(moment().format('HH'));
console.log(currentTime);



//compare time blocks to current time and sort by css style(past, present, future classes)
function compareCurrentTime() {
    $(".hour").each(function() {
        let hourBlock = parseInt($(this).data("hour"));
        console.log($(this).data("hour"));
        if(hourBlock < currentTime) {
         $(this).addClass("past");
       }
         else if(hourBlock === currentTime) {
             console.log(hourBlock);
             console.log(currentTime);
         $(this).addClass("present");
       }
        else{
         $(this).addClass("future");
       }
    })
}
//call function
compareCurrentTime();



//add input into local storage when save is clicked

$(".row").each(function () {
    let id = $(this).attr("id");
    let hour = localStorage.getItem(id);

        if (hour !== null) {
            $(this).children(".hour").val(hour);
        }
    });

$(".saveBtn").on("click", function () {
    let time = $(this).parent().attr("id");
    let hour = $(this).siblings(".hour").val();

    localStorage.setItem(time, hour);
});
