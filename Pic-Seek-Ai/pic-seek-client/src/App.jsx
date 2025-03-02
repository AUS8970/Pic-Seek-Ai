import { Route, Routes } from "react-router"
import Root from "./layouts/Root"
import Home from "./pages/Home"
import GenerateImage from "./pages/GenerateImage"
import Tasks from "./pages/Tasks"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Root/>}>
        <Route index element={<Home />} />
        <Route path="generate-image" element={<GenerateImage />} />
        <Route path="tasks" element={<Tasks />} />
      </Route>
    </Routes>
  )
}

export default App
