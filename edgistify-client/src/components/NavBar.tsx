import { NavLink } from "react-router-dom"
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { UserOutlined,
          ShoppingCartOutlined,
          SearchOutlined,
          BellOutlined,
          ShoppingOutlined,
          LoginOutlined,
        } from '@ant-design/icons';
const NavBar = () => {
  
const cartItems: MenuProps['items'] = [{
  key: 'emptycart',
  label: (
    <div className="flex flex-col items-center justify-center p-4 text-center">
      <div>Your cart is empty</div>
      <ShoppingOutlined className=" text-2xl"/>
    </div>
  )
}];

const userItems: MenuProps['items']  = [{
    key: 'welcome',
    label: 'Welcome, User',
  },
  {
    type: 'divider',
  },
  {
    key: 'myaccount',
    label: 'My Account',
    icon: <UserOutlined />,
  },
  {
    key: 'orders',
    label: 'Orders',
    icon: <ShoppingCartOutlined />,
  },
  {
    key: 'Sign in',
    label: 'Sign in',
    icon: <LoginOutlined />,
  }
];

  return (
    <div className="flex justify-between items-center h-16 px-16 
                    bg-transparent text-black realtive shadow-sm ">
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
        <Dropdown
          menu={{items:cartItems}} 
          trigger={['hover']}
          placement="bottom"
          overlayStyle={{width: '200px', position:'absolute', top:'66px'}}
        >
          <ShoppingCartOutlined className="cursor-pointer"/>
        </Dropdown>
        <Dropdown
          menu={{ items: userItems }} 
          trigger={['hover']} 
          placement="bottom"
          overlayStyle={{width: '150px', position:'absolute', top:'66px'} }
        >          
          <UserOutlined className="cursor-pointer"/>
        </Dropdown>
        <BellOutlined className="cursor-pointer ml-4"/>
      </div>
      
    </div>
  )
}

export default NavBar