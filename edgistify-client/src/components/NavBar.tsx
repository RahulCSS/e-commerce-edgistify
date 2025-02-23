import { NavLink } from "react-router-dom"
import { UserOutlined,
          ShoppingCartOutlined,
          SearchOutlined,
          BellOutlined,
        } from '@ant-design/icons';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center h-16 px-16 
                    bg-transparent text-black relative shadow-sm ">
      <div className="text-4xl font-semibold px-4">
        <NavLink to="/" >Edgistify</NavLink>
      </div>
      <nav>
        <ul className="flex space-x-16 text-xl px-2">
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
      <div className="flex space-x-4 text-2xl px-2">
        <SearchOutlined className="cursor-pointer"/>
        <ShoppingCartOutlined className="cursor-pointer"/>
        <UserOutlined className="cursor-pointer"/>
        <BellOutlined className="cursor-pointer ml-4"/>
      </div>
    </div>
  )
}

export default NavBar