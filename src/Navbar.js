import { Link } from 'react-router-dom';

const Navbar = () => {
  // const { items, setItems } = useContext(ItemContext);
  return (
    <div className="navbar" >
      <h1>Household Inventory</h1>
        <div className="links">
          <nav>
            <ul>
            <Link to="/"><li><h1>Home</h1></li></Link>
            <Link to="/low" style={{color: 'red', fontWeight: 'bold'}} ><li>Low on Stock</li></Link>
            </ul>
          </nav>
        </div>
    </div> 
   );
};
 
export default Navbar;