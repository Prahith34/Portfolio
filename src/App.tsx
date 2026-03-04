import Home from "@/pages/Home"
import About from "@/pages/About"
import Projects from "@/pages/Projects"
import Experience from "@/pages/Experience"
import Contact from "@/pages/Contact"
import { Routes, Route } from "react-router-dom"
import { ScrollToHash } from "./components/ScrollToHash"
import { Toaster } from 'sonner'

function App() {
  return (
    <div className="antialiased">
      <Toaster richColors position="top-center" duration={4000} closeButton/>
      <ScrollToHash/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/#experience" element={<Experience/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
