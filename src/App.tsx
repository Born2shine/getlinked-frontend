import { Route, Routes } from "react-router-dom"
import { Contact, Home } from "./pages"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { SmoothScroll } from "./components";

const App = () => {

  return (
    <main className="h-screen w-screen overflow-x-hidden bg-primaryVariantOne">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ToastContainer/>
      <SmoothScroll/>
    </main>
  )
}

export default App
