const $buttonAddNewItem = $(".max-button");

saveJobs([]);

const jobsArray = [];
updatePage();

function addNewTask() {
  const $newJob = createTaskListItem();
  jobsArray.push($newJob);
  updatePage();
  saveJobs(jobsArray);
  console.log(loadJobs());
  $inputField.val("");
}

function updatePage() {
  jobsArray.forEach((element) => {
    console.log(element);
    if (element) $(element).appendTo($(".max-all-elements"));
  });
}

$(":input").on("keyup ", function (e) {
  if (e.target.value) {
    $(e.target.labels[0]).addClass("max-show-label");
  } else {
    $(e.target.labels[0]).removeClass("max-show-label");
  }
});

$(".max-all-elements").submit(function () {
  addNewTask();
  return false;
});
