const $inputField = $(".max-job-title-input");
const $salaryInput = $(".max-salary-input");
const $maxJobListContainer = $(".max-job-list-container");
const $totalInput = $(".max-total-input");

const $buttonAddNewItem = $(".max-button");
saveTotal(-1000);

const jobsArray = loadJobs().length > 0 ? loadJobs() : [];
updatePage();

function addNewTask() {
  const newJob = createItemObjcet($inputField.val(), $salaryInput.val(), false);
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
  calculateTotal();
  $totalInput.val(loadTotal());
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
