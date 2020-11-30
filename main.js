const $buttonAddNewItem = $(".max-button");

const jobsArray = getCookie("jobList");

$inputField.keydown(function (e) {
  if (e.keyCode === 13) {
    addNewTask();
  }
});

$(":input").on("keyup ", function (e) {
  if (e.target.value) {
    $(e.target.labels[0]).addClass("max-show-label");
  } else {
    $(e.target.labels[0]).removeClass("max-show-label");
  }
});

function addNewTask() {
  $(".max-all-elements").append(createTaskListItem());

  $inputField.val("");
}

$(".max-all-elements").submit(function () {
  addNewTask();
  return false;
});
