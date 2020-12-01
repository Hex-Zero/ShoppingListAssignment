function setupNewUser() {
  $("#myModal").modal("show");
  $("#start-button").click(function () {
    saveNewUser(true);
    saveTotal($("#initial-total").val());
    updatePage();
    $("#myModal").modal("hide");
  });
}
