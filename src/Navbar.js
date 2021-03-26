import { Link } from 'react-router-dom';

const Navbar = () => {
  // const { items, setItems } = useContext(ItemContext);
  return (
    <div className="navbar" >
      <h1>Household Inventory</h1>
        <div className="links">
          <nav>
            <ul style={{listStyle: 'none'}} >
              <Link to="/"><li>Home</li></Link>
              <Link to="/low"><li>Low on Stock</li></Link>
            </ul>
          </nav>
        </div>
    </div> 
   );
};
 
export default Navbar;