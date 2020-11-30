function createItemObjcet(title, salary, complete) {
  return { title, salary, complete };
}

function createTaskListItem({ title, salary, complete, index }) {
  const $taskListItemContainer = $(document.createElement("div")).addClass(
    "max-task-list-item-container"
  );
  const $taskListItem = $(document.createElement("div"))
    .addClass("max-shopping-list")
    .html(title + index)
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
      deleteJobFromArray(index);
      updatePage();
    });

  return $taskListItemContainer.append($checkBox, $taskListItem, $removeButton);
}

function deleteJobFromArray(index) {
  jobsArray.splice(index, 1);
  saveJobs(jobsArray);
}
