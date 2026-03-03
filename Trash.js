// 一个简单的待办事项管理器

const todos = [
  { id: 1, title: "学习 Git", done: false },
  { id: 2, title: "写点 JS 代码", done: true }
];

// 添加任务
function addTodo(title) {
  const newTodo = {
    id: todos.length + 1,
    title,
    done: false
  };
  todos.push(newTodo);
  console.log("已添加任务:", newTodo);
}

// 标记任务完成
function completeTodo(id) {
  const todo = todos.find(item => item.id === id);
  if (todo) {
    todo.done = true;
    console.log(`任务 "${todo.title}" 已完成`);
  } else {
    console.log("未找到该任务");
  }
}

// 打印所有任务
function listTodos() {
  console.log("当前任务列表:");
  todos.forEach(todo => {
    console.log(
      `[${todo.done ? "✔" : " "}] ${todo.id}. ${todo.title}`
    );
  });
}

// 测试一下
addTodo("练习 JavaScript");
completeTodo(1);
listTodos();