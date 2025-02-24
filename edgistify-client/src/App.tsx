import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import Products from './components/Products.tsx'
import NewLaunches from './components/NewLaunches.tsx'
import Support from './components/Support.tsx'
import AboutUs from './components/AboutUs.tsx'
import NavBar from './components/NavBar.tsx'
import Footer from './components/Footer.tsx'

const App = () => {
  const location = useLocation();

  const hideNavFootpaths = ['/login', '/register'];
  const hideNavbarFooter = hideNavFootpaths.includes(location.pathname);;
  return (
    <>
      {!hideNavbarFooter && <NavBar/>}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/newlaunches" element={<NewLaunches />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      {!hideNavbarFooter && <Footer/>} 
    </>
  )
}

export default App