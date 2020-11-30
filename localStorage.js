function saveJobs(jobs) {
  console.log(jobs);
  localStorage.setItem("jobsList", JSON.stringify(jobs));
}

function loadJobs() {
  return localStorage.getItem("jobsList");
}
