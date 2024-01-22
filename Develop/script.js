$(function () {
  // Display the current date in the header
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  // Get the current hour using Day.js
  const currentHour = dayjs().hour();

  // Dynamically generate time-blocks
  for (let hour = 9; hour <= 17; hour++) {
    const timeBlock = $("<div>").addClass("row time-block");
    const hourDiv = $("<div>").addClass("col-2 col-md-1 hour text-center py-3").text(`${hour}AM`);
    const descriptionTextarea = $("<textarea>").addClass("col-8 col-md-10 description").attr("rows", "3");
    const saveBtn = $("<button>").addClass("btn saveBtn col-2 col-md-1").attr("aria-label", "save").html('<i class="fas fa-save" aria-hidden="true"></i>');

    // Add past, present, or future class based on the comparison with the current hour
    if (hour < currentHour) {
      timeBlock.addClass("past");
    } else if (hour === currentHour) {
      timeBlock.addClass("present");
    } else {
      timeBlock.addClass("future");
    }

    // Append elements to the time-block
    timeBlock.append(hourDiv, descriptionTextarea, saveBtn);
    $(".container-fluid").append(timeBlock);
  }

  // TODO: Add event listener for the save button and local storage logic
});
