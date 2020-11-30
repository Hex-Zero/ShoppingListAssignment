const $inputField = $(".max-job-title-input");
const $maxJobListContainer = $(".max-job-list-container");

const $buttonAddNewItem = $(".max-button");

const jobsArray = loadJobs().length > 0 ? loadJobs() : [];
console.log(loadJobs());
updatePage();

function addNewTask() {
  const newJob = createItemObjcet($inputField.val(), 0, true);
  jobsArray.push(newJob);
  updatePage();
  $inputField.val("");
}

$buttonAddNewItem.click(function () {
  addNewTask();
});

function updatePage() {
  $maxJobListContainer.empty();
  jobsArray.forEach((element, index) => {
    $(createTaskListItem({ ...element, index })).appendTo($maxJobListContainer);
  });
  saveJobs(jobsArray);
}

$("#mx-new-job-form").submit(function () {
  return false;
});

$(":input").on("keyup ", function (e) {
  if (e.target.value) {
    $(e.target.labels[0]).addClass("max-show-label");
  } else {
    $(e.target.labels[0]).removeClass("max-show-label");
  }
});
