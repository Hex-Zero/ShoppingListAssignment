const $inputField = $(".max-shopping-list-input")

const $buttonAddNewItem = $(".max-button")

setCookie("jobList", ["one","two"])

console.log(getCookie("jobList"));


$inputField.keydown(function(e){
    if(e.keyCode === 13){
        addNewTask()
    }
})

function createTaskListItem(){

    const $taskListItemContainer = $(document.createElement("div"))
    .addClass("max-task-list-item-container")

    
    const $taskListItem = $(document.createElement("div"))
    .addClass("max-shopping-list")
    .html($inputField.val())
    .click(function(){
        $checkBox.click();
    })

    const $checkBox = $(document.createElement("input"))
    .addClass("max-check-box")
    .prop("type", "checkbox") 
    .on("click" , function(){
        $taskListItem.toggleClass("max-cross-out-item")  
    })

    const $removeButton = $(document.createElement("button"))
    .addClass("max-task-item-remove")
    .html('Delete')
    .on("click", function(){
        $taskListItemContainer.remove();
    });

   return $taskListItemContainer.append( $checkBox, $taskListItem, $removeButton)
}

function addNewTask(){
    $(".max-warning-message").remove()

    if(!$inputField.val()){
        $(".max-input-container")
        .append("<div class='max-warning-message'>Please Enter Task Name!!!!</div>")
        return;
    }

    $(".max-all-elements").append(createTaskListItem())

    $inputField.val("")
}

$buttonAddNewItem.click(function(){
    addNewTask()
}); 


