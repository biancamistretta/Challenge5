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

    // Retrieve data from local storage
    const savedEvent = localStorage.getItem(`event-${hour}`);
    if (savedEvent) {
      descriptionTextarea.val(savedEvent);
    }

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

    // Event listener for the save button
    saveBtn.on("click", function () {
      // Get the text from the textarea
      const eventText = descriptionTextarea.val();

      // Save the text to local storage
      localStorage.setItem(`event-${hour}`, eventText);
      alert("Event saved!");
    });
  }
});
