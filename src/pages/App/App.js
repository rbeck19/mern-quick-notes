import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import AuthPage from "../AuthPage/AuthPage"
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NotesPage from "../NotesPage/NotesPage"
import NavBar from "../../components/NavBar/NavBar";
import './App.css';

import { getUser } from "../../utilities/users-service"

export default function App() {

      //getUser will insert token if there is one in local storage 
      //otherwise it will be a value of "null"
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes >
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/notes" element={<NotesPage />} />
          </Routes> 
        </> 
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


