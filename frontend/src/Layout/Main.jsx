import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"


function Main() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Main