import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import User from "./User";

export default function App() {
  return (
    <>
      <Routes>  
        <Route index element={<Home />} />
        <Route path="/user/:id" element={<User />}/>
      </Routes>
    </>
  )
}