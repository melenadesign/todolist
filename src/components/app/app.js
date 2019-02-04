import  React, { Component } from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import Todolist from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';
import ItemAddForm from '../item-add-form/';
import './app.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Build React App'),
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Have a lunch')

       ] 
       };


    createTodoItem(label) {
        return {
            label,
            important:false,
            done:false,
            id:this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState( ({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id ===id); 
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx+1)];
            return {
                todoData: newArray
            }

        });   
    };

    addItem = (text) => {
        this.setState( ({ todoData }) => {
            const newItem = this.createTodoItem(text);
        
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            }

        });   
    };

    onToggleImportant = (id) => {
        this.setState( ({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id ===id); 
            const oldItem = todoData[idx];
            const newItem = {...oldItem,
                important: !oldItem.important}
            const newImpArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx+1)];

            return {
                todoData: newImpArr
            }

        });

            console.log('Toggle important ', id);

    };

    onToggleDone = (id) => {
        this.setState( ({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id ===id); 
            const oldItem = todoData[idx];
            const newItem = {...oldItem,
                done: !oldItem.done}
            const newImpArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx+1)];

            return {
                todoData: newImpArr
            }

        });
        console.log('Toggle done ', id);

    };

    render() {
    
        return (
            <div className="todo-app"> 
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />     
            </div>
    
            <Todolist  todos = {this.state.todoData}
            onDeleted={ this.deleteItem } 
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
            />

             <ItemAddForm 
             onItemAdded={ this.addItem } />  
        </div>
        );
    };
    }

