import React, { useState } from 'react'
import "./App.css";
import List from './components/List';
import Done from './components/Done';
import Layout from './components/Layout';

const App = () => {
  const [todolist, setTodolist]= useState([
    {id : 1, title : '리액트 기초 공부', contents : '기초공부', isDone : 'false'},
    {id : 2, title : '리액트 기초 공부', contents : 'Todolist 만들기', isDone :'true'},
    {id : 3, title : '리액트 기초 공부', contents : 'CSS 뿌시기', isDone :'false'},
    {id : 4, title : '리액트 기초 공부', contents : '팀 과제 하기', isDone :'false'},
  ]);

  const [title, setTitle] =useState('');
  const [contents, setContents] =useState('');

  const titleChangeHandler =(event) => {
    setTitle(event.target.value);
  };

  const contentsChangeHandler =(event) => {
    setContents(event.target.value);
  };

  const clickAddHandler = () => {
    const newTodo ={
      id: todolist.length +1,
      title,
      contents,
      isDone :'false'
    }
    setTodolist([...todolist,newTodo])
    setTitle('');
    setContents('');
  };

  const clickDeleteHandler =(id) => {
    const newTodo = todolist.filter(todo=> todo.id !== id)
    setTodolist(newTodo);
  };

  const clickFalseChanger = (id) => {
    let newTodo = todolist.map((item) => {
        if (item.id === id) {
            item.isDone = 'true'
            return item
        } else {
            return item
        }
    });
    setTodolist(newTodo)
  }

  const clickTrueChanger = (id) => {
    let newTodo = todolist.map((item) => {
        if (item.id === id) {
            item.isDone = 'false'
            return item
        } else {
            return item
        }
    });
    setTodolist(newTodo)
  }

  return (
    <Layout>
      <div>
        <div className='todoHead-box'>
        <div style={{fontWeight : 'bold'}}>My Todo List</div>&nbsp;
        <div style={{fontWeight : 'bold'}}>React</div>
        </div>
        <div className='todoInput-box' style={{fontWeight : 'bold'}}>
        &nbsp;제목&nbsp;
        <input type ='text' value={title} onChange={titleChangeHandler} />
        &nbsp;내용&nbsp;<input type ='text' value={contents} onChange={contentsChangeHandler} />
        &nbsp; 
        <button onClick={clickAddHandler}>추가하기</button>
      </div>
      <br/>

      <div style={{fontWeight : 'bold', fontSize :'30px'}}>&nbsp;&nbsp;✍️Working..✍️</div>
      <div className='app-style'>
          {todolist.filter(item => item.isDone == 'false').map(item => {
              return (
                <List key={item.id} 
                item={item} 
                clickDeleteHandler={clickDeleteHandler} 
                clickFalseChanger={clickFalseChanger}/>
              );
            })
          }
        </div>
      <br/>
      <div style={{fontWeight : 'bold', fontSize :'30px'}}>&nbsp;&nbsp;😍Done..😍</div>
      <div className='app-style'>
        {todolist.filter(item => item.isDone == 'true').map(item => {
          return (
            <Done item={item} 
            key={item.id} 
            clickDeleteHandler={clickDeleteHandler} 
            clickTrueChanger={clickTrueChanger}/>
          );
        })
        }
      </div>
    </div>
    </Layout>
  );
}

export default App;