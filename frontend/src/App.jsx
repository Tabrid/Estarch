
import Feature from "./Pages/Home/Feature"
import Footer from "./Pages/Home/Footer"
import Subscribe from "./Pages/Home/Subscription"

import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/Routes"


function App() {

  return (
    <>
      <Footer />
      <Subscribe />
      <Feature/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
