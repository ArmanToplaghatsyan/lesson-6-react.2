import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import { Item1 } from './pages/Item1';
import { Item2 } from './pages/Item2';
import { Item3 } from './pages/Item3';
import { Menu } from './component/Menu';
import { Item4 } from './pages/Item4';
import { IUser } from './type/type';
import { MyContext } from './context/MyContext';

function App() {
  const [users, setUsers] = useState<IUser[]>([
    { id: 1, name: 'Ann', surname: 'Annyan', age: 19, email: 'ann1@test.com' },
    { id: 2, name: 'Lynn', surname: 'Smitt', age: 20, email: 'lynn2@test.com' },
    {
      id: 3,
      name: 'Nalls',
      surname: 'Miller',
      age: 21,
      email: 'nalls3@test.com',
    },
    {
      id: 4,
      name: 'Nick',
      surname: 'Koulen',
      age: 22,
      email: 'nick4@test.com',
    },
    {
      id: 5,
      name: 'Mimi',
      surname: 'Coulens',
      age: 18,
      email: 'mimi5@test.com',
    },
  ]);

  const createUser = (data: IUser): void => {
    setUsers([...users, data]);
  };

  const deleteUserById = (id: number): void => {
    setUsers([...users.filter((elm) => elm.id != id)]);
  };

  return (
    <div className="App">
      <MyContext.Provider value={{ users, createUser, deleteUserById }}>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Item1 />}></Route>
            <Route path="/main" element={<Item2 />}></Route>
            <Route path="/home/page" element={<Item3 />}></Route>
            <Route
              path="*"
              element={
                <div className="error">
                  <h1>Page not found !</h1>
                </div>
              }
            ></Route>
            <Route path="/see/:id" element={<Item4 />}></Route>
          </Routes>
          <h1>footer</h1>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
