const $inputField = $(".max-job-title-input");

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

  return $taskListItemContainer
    .append($checkBox, $taskListItem, $removeButton)
    .outterHTML();
}
