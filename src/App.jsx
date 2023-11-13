import { Link, Outlet } from 'react-router-dom'
import './App.css'
import './Navbar.css'

function App() {
  return (
    <div >
      <h1>Shopping Cart</h1>
      <span style={{fontSize: '25px'}}><Link to='/'>Home</Link></span> &nbsp;&nbsp;
      <span style={{fontSize: '25px'}}><Link to='/Ordered_Products'>Check Out</Link></span>
      <Outlet></Outlet>
    </div>
  )
}

export default App
