var tasks = {};

moment().toDate();


var createTask = function(taskText, taskDate, taskList) {
    // create elements that make up a task item
    var taskLi = $("<li>").addClass("list-group-item");
    var taskSpan = $("<span>")
      .addClass("badge badge-primary badge-pill")
      .text(taskDate);
    var taskP = $("<p>")
      .addClass("m-1")
      .text(taskText);
  
    // append span and p element to parent li
    taskLi.append(taskSpan, taskP);
  
  
    // append to ul list on the page
    $("#list-" + taskList).append(taskLi);
  };
  
  var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    // loop over object properties
    $.each(tasks, function(list, arr) {
      console.log(list, arr);
      // then loop over sub-array
      arr.forEach(function(task) {
        createTask(task.text, task.date, list);
      });
    });
};

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };