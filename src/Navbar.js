import logo from './images/logo.svg'

const Navbar = () => {
    return ( 
  <nav className="nav">
     <div className="logo">
            <img src={logo} alt=""/>
     </div>
        <div className="nav-menu">
          <a href="#">Home</a>
          <a href="#">New</a>
          <a href="#">Popular</a>
          <a href="#">Trending</a>
          <a href="#">Categories</a>
        </div>
 </nav>

     );
}
 
export default Navbar;