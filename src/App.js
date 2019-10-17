import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from "./containers/AddTodo";
import Footer from "./components/Footer";
import VisibleTodoList from "./containers/VisibleTodoList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h2>Todo App CM Group</h2>
            </header>
            <AddTodo />
            <VisibleTodoList />
            <Footer />

        </div>
    );
}

export default App;
