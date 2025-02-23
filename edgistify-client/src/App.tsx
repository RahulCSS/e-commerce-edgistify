import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Products from './components/Products.tsx'
import NewLaunches from './components/NewLaunches.tsx'
import Support from './components/Support.tsx'
import AboutUs from './components/AboutUs.tsx'
import NavBar from './components/NavBar.tsx'

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/newlaunches" element={<NewLaunches />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>   
    </>
  )
}

export default App