import { Route, Routes } from "react-router-dom"
import { Home } from "./pages"
import { TopNavbar } from "./components"

const App = () => {

  return (
    <main className="h-screen w-screen overflow-x-hidden bg-primaryVariantOne">
      <TopNavbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
