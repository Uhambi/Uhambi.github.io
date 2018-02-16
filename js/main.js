var filters = {
  all: function (todos) {
    return todos
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
};

new Vue({
  el: ".Todo",
  data: {
    todos: [],
    newTodo: "",
    editableTodo: "",
    todoVisability: "all"
  },
  computed: {
    filteredTodos: function () {
      return filters[this.todoVisability](this.todos);
    },
    remainingTodos: function () {
      return filters.active(this.todos);
    }
  },
  created: function () {
    this.fetchTodos();
  },
  watch: {
    todos: {
      handler: function () {
        this.saveTodo()
      },
      deep: true
    }
  },
  methods: {
    fetchTodos: function () {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    },
    saveTodo: function () {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    addTodo: function () {
      if (!this.newTodo) return;

      this.todos.push({
        title: this.newTodo.trim(),
        editable: false,
        completed: false
      });
      this.newTodo = "";
    },
    removeTodo: function (item) {
      if (this.todos.indexOf(item) >= 0) {
        this.todos.splice(this.todos.indexOf(item), 1);
      }
    },
    completeTodo: function (item) {
      item.completed = !item.completed
    },
    completeAll: function () {
      var completedTotos = this.todos.filter(function (item) {
        return item.completed
      });

      if (completedTotos.length === this.todos.length) {
        this.todos.forEach(function (item) {
          item.completed = false
        });
      } else {
        this.todos.forEach(function (item) {
          item.completed = true
        });
      }
    },
    editTodo: function (item) {
      item.editable = true;
      item.title = item.title.trim();
      this.editableTodo = item.title;
    },
    doneEdit: function (item) {
      if (!item.title) {
        this.removeTodo(item);
      }
      item.editable = false;
    },
    cancelEdit: function (item) {
      item.title = this.editableTodo;
      item.editable = false;
    }
  },
  directives: {
    'todo-focus': function (el, binding) {
      setTimeout(function () {
        el.focus();
      }, 100);
    }
  }
});
