import React from 'react';
import './App.css';
import Task from './components/Task';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      priority: '',
      isSaveBtnDisabled: true,
      taskList: [],
    };
  }

  handleChange = (event) => {
    const { target } = event;
    const value = target.checked ? target.checked : target.value;
    this.setState({ [target.name]: value }, this.validateTask);
  };

  validateTask = () => {
    const { task, priority } = this.state;

    const validTask = task.length === 0;
    const validPriority = priority.length <= 3;

    this.setState({ isSaveBtnDisabled: validTask || validPriority });
  };

  addTask = () => {
    const { task, priority } = this.state;

    // const newArray = [];

    // taskList.forEach((task) => {
    //   newArray.push(task);
    // });

    // newArray.push({ task, priority });

    // this.setState({ taskList: newArray });

    this.setState((prevState) => ({
      taskList: [...prevState.taskList, { task, priority }],
      task: '',
      priority: '',
      isSaveBtnDisabled: true,
    }));
  };

  removeTask = (taskNumber) => {
    const { taskList } = this.state;

    const filteredList = taskList.filter((_task, index) => (
      index !== taskNumber));

    this.setState({ taskList: filteredList });
  };

  render() {
    const { isSaveBtnDisabled, task, priority, taskList } = this.state;
    return (
      
      <section>
        <Task />
        <form>
          <label htmlFor="task-input">
            Digite a tarefa
            <input
              type="text"
              name="task"
              value={ task }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="priority-input">
            Prioridade
            <input
              type="text"
              name="priority"
              value={ priority }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            onClick={ this.addTask }
            disabled={ isSaveBtnDisabled }
          >
            Adicionar Tarefa
          </button>
        </form>
        <section>
          <h1>Tarefas Salvas</h1>
          {
            taskList.map((task, index) => (
              <div key={ task.task }>
                <div>{ `Tarefa: ${task.task} - Prioridade: ${task.priority}` }</div>
                <button
                  type="button"
                  onClick={ () => this.removeTask(index) }
                >
                  Excluir
                </button>
              </div>
            ))
          }
        </section>
      </section>
   );
  };
}

export default App;
