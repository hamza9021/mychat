import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}