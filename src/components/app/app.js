import  React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import Todolist from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';

import './app.css';

const App = () => {

const todoData = [
    {label:'Build React App', important: false, id:1},
    {label:'Drink Coffee', important: true, id:2},
    {label:'Have a lunch', important: false, id:3}
] ;

    return (
        <div className="todo-app"> 
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />     
        </div>

        <Todolist  todos = {todoData}/>
    </div>
    );
};
  
ReactDOM.render(<App />, 
    document.getElementById('root'));

    export default App;

