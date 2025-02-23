import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Edgistify</NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/newlaunches">New Launches</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
        </ul>
        </nav>
    </div>
  )
}

export default NavBar