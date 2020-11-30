function saveJobs(jobs) {
  localStorage.setItem("jobsList", JSON.stringify(jobs));
}

function loadJobs() {
  return JSON.parse(localStorage.getItem("jobsList"));
}
