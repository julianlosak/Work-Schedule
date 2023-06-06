var dateEl = $(".date")
var saveBtnEl = $(".saveBtn")

$(function () {
  let today = new Date().toISOString().slice(0, 10)
  console.log(today)
  dateEl.text(today)

  saveBtnEl.on("click", function(){
    console.log("Save Button")
    var textValue = $(this).siblings(".description").val()
    var timeValue = $(this).parent().attr("id")
    console.log(timeValue)
    localStorage.setItem(timeValue, textValue)
  })

  $(".time-block").each(function() {
    var currentHour = dayjs().hour();
    var value = +$(this).attr("id").split("-")[1];
    var objects = {};
    console.log(value)
  
    if (currentHour < value) {
      objects["future"] = {
        className: "future",
      };
    } else if (currentHour === value) {
      objects["present"] = {
        className: "present",
      };
    } else {
      objects["past"] = {
        className: "past",
      };
    }
  
    console.log(objects.past);
    console.log(objects.present);
    console.log(objects.future); 
  
    var className = objects.past
      ? objects.past.className
      : objects.present
      ? objects.present.className
      : objects.future.className;
  
    $(this).addClass(className);
  });
  
  
  
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-1 .description").val(localStorage.getItem("hour-1"))
  $("#hour-2 .description").val(localStorage.getItem("hour-2"))
  $("#hour-3 .description").val(localStorage.getItem("hour-3"))
  $("#hour-4 .description").val(localStorage.getItem("hour-4"))
  $("#hour-5 .description").val(localStorage.getItem("hour-5"))
});
