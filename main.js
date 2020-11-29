const $inputField = $(".max-job-title-input");

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

function createTaskListItem() {
  const $taskListItemContainer = $(document.createElement("div")).addClass(
    "max-task-list-item-container"
  );

  const $taskListItem = $(document.createElement("div"))
    .addClass("max-shopping-list")
    .html($inputField.val())
    .click(function () {
      $checkBox.click();
    });

  const $checkBox = $(document.createElement("input"))
    .addClass("max-check-box")
    .prop("type", "checkbox")
    .on("click", function () {
      $taskListItem.toggleClass("max-cross-out-item");
    });

  const $removeButton = $(document.createElement("button"))
    .addClass("max-task-item-remove")
    .html("Delete")

    .on("click", function () {
      $taskListItemContainer.remove();
    });

  return $taskListItemContainer.append($checkBox, $taskListItem, $removeButton);
}

function addNewTask() {
  $(".max-all-elements").append(createTaskListItem());

  $inputField.val("");
}

$buttonAddNewItem.click(function () {
  addNewTask();
});

$(".max-all-elements").submit(function (e) {
  console.log(e);
  return false;
});
