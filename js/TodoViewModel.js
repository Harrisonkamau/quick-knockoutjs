let TodoViewModel = function () {
  // Data
  const self = this;
  self.newTodo = ko.observable();
  self.todos = ko.observableArray([]);

  // Behaviours
  self.addTodo = function () {
    self.todos.push(self.newTodo());

    // Empty the input area
    self.newTodo("");
  }
}

$(document).ready(function () {
  let todo = new TodoViewModel();
  ko.applyBindings(todo);
})