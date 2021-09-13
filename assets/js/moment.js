var tasks = {};

var createTask = function(taskText, taskDate, taskList) {

    var taskLi = $("<li>").addClass("list-group-item");
    var taskSpan = $("<span>")
      .addClass("badge badge-primary badge-pill")
      .text(taskDate);
    var taskP = $("<p>")
      .addClass("m-1")
      .text(taskText);
  
    taskLi.append(taskSpan, taskP);
  
  
    $("#list-" + taskList).append(taskLi);
  };
  
  var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  
    $.each(tasks, function(list, arr) {
      console.log(list, arr);
      arr.forEach(function(task) {
        createTask(task.text, task.date, list);
      });
    });
};



