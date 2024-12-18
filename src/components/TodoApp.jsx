import React, { useState } from "react";
import { useTodos } from "./useTodos";
import styled from "styled-components";

// Styled components for the UI
const Head = styled.h1`
  color: white;
  text-align: center;
  font-size: 2.5rem;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Container = styled.div`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
  padding: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  margin: 20px 0;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1.1rem;
  margin-right: 10px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

const TodoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  background-color: #444;
  padding: 15px;
  margin: 5px 0;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
`;

const TaskText = styled.span`
  flex-grow: 1;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`;

const EditCancelButton = styled.button`
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 5px;
  &:hover {
    background-color: #d32f2f;
  }
`;

const SaveButton = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 5px 10px;
  margin-left: 5px;
  &:hover {
    background-color: #1976d2;
  }
`;

const TaskButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const TodoApp = () => {
  const { todoList, addTask, toggleTask, editTask, deleteTask } = useTodos();
  const [newTask, setNewTask] = useState("");
  const [editing, setEditing] = useState({ id: null, updatedTask: "" });

  // Function to check if a task already exists
  const isDuplicateTask = (task) => {
    return todoList.some((todo) => todo.task.toLowerCase() === task.toLowerCase());
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }
    if (isDuplicateTask(newTask)) {
      alert("Task already exists!");
      return;
    }
    addTask(newTask);
    setNewTask("");
  };

  const handleSaveEdit = () => {
    if (editing.updatedTask.trim() === "") {
      alert("Edited task cannot be empty!");
      return;
    }
    if (isDuplicateTask(editing.updatedTask)) {
      alert("Task already exists!");
      return;
    }
    editTask({ id: editing.id, newTask: editing.updatedTask });
    setEditing({ id: null, updatedTask: "" });
  };

  return (
    <Container>
      <Head>Todo List</Head>

      {/* Add New Task Section */}
      <InputContainer>
        <Input
          type="text"
          placeholder="New task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button onClick={handleAddTask}>Add Task</Button>
      </InputContainer>

      {/* Edit Task Section */}
      {editing.id && (
        <InputContainer>
          <Input
            type="text"
            placeholder="Edit your task"
            value={editing.updatedTask}
            onChange={(e) =>
              setEditing({ ...editing, updatedTask: e.target.value })
            }
          />
          <SaveButton onClick={handleSaveEdit}>Save Edit</SaveButton>
          <EditCancelButton onClick={() => setEditing({ id: null, updatedTask: "" })}>
            Cancel
          </EditCancelButton>
        </InputContainer>
      )}

      {/* Display Task List */}
      <TodoList>
        {todoList.map((todo) => (
          <TodoItem key={todo.id}>
            <TaskText completed={todo.completed}>{todo.task}</TaskText>
            <TaskButtons>
              <Button
                onClick={() => setEditing({ id: todo.id, updatedTask: todo.task })}
              >
                Edit
              </Button>
              <Button onClick={() => deleteTask(todo.id)}>Delete</Button>
              <Button onClick={() => toggleTask(todo.id)}>
                {todo.completed ? "Undo" : "Mark"}
              </Button>
            </TaskButtons>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
};

export default TodoApp;
