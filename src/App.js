import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
            <img hrf="/public/logoaloevera.png"></img>
            <Link to="/">Aloeinfinito</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Carro</a>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Acceder</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Administrador</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Compras</Link>
                    <Link to="/products">Productos</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <h3>Categoria</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <ul className="categories">
            <li>
              <Link to="/category/Salud">Salud</Link>
            </li>

            <li>
              <Link to="/category/Cosmetica">Cosmetica</Link>
            </li>
            <li>
              <Link to="/category/aloe">Aloe 100%</Link>
            </li>
            
            <li><a href='about.html'>Sobre nosotros</a></li>
            <li><a href='https://exialoe.esa'>Exialoe</a></li>
            <h3> Contacto :</h3>
            <li>email : <a href='mailto:lovelylifeeuroexito@gmail.com'>lovelylifeeuroexito@gmail.com </a></li> 
            <li>Teléfono : <a href='tel:+34604014453'>+34 604 01 44 53</a></li>
            
            
          </ul>
        </aside>
   
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
          <about className='about'>
          <div className='sobre-nos'>
            <div className='image-about'>

            </div>
            <div className='text-d'>
            <h1>Aloeinfinito</h1>
            <p>
            <br></br>
              |  |  En compras superiores a 60,00 €, los gastos de envío serán gratuitos.            </p>
            </div>
          </div>
        </about>
        </main>
      
      
        <div className='nada'><br></br></div>
        <footer className="footer">
         
     
        Gbtech web &copy; </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
