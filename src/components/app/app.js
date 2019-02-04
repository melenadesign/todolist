import  React, { Component } from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import Todolist from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';

import './app.css';

export default class App extends Component {

    state = {
        todoData: [
           {label:'Build React App', important: false, id:1},
           {label:'Drink Coffee', important: true, id:2},
           {label:'Have a lunch', important: false, id:3}
       ] 
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
            onDeleted={ (id) => console.log('del', id)} />
        </div>
        );
    };
    }

