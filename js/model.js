export default class Model{
	constructor(){
		this.view=null;
		this.todos = [];
		this.currentId = 1;
	}
  
	setView(view) {
	  this.view = view;
	}
  
	save() {
	  localStorage.setItem('todos', JSON.stringify(this.todos));
	}
  
	getTodos() {
	  return this.todos.map((todo) => ({...todo}));
	}
  
	findTodo(id) {
	  return this.todos.findIndex((todo) => todo.id === id);
	}
  
	toggleCompleted(id) {
	  const index = this.findTodo(id);
	  const todo = this.todos[index];
	  todo.completed = !todo.completed;
	  this.save();
	}
  
	editTodo(id, values) {
	  const index = this.findTodo(id);
	  Object.assign(this.todos[index], values);
	  this.save();
	}
  
	addTodo(title, description) {
	  const todo = {
		id: this.currentId++,
		title,
		description,
		completed: false,
	  }
  
	  this.todos.push(todo);
	  console.log(this.todos);
	  this.save();
  
	  return {...todo};
	}
  
	removeTodo(id) {
	  const index = this.findTodo(id);
	  this.todos.splice(index, 1);  
	  this.save();
	}
  }