
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Jainamaj from './Pages/Home/Products/Jainamaj';
import Tupi from './Pages/Home/Products/Tupi';
import Tasbih from './Pages/Home/Products/Tasbih';
import Attar from './Pages/Home/Products/Attar';
import Panjabi from './Pages/Home/Products/Panjabi';
import Borka from './Pages/Home/Products/Borka';
import QuranAndHadith from './Pages/Home/Products/QuranAndHadith';
import Products from './Pages/Home/Products/Products';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import SearchContainer from './Pages/Home/SearchContainer';
import BuyNow from './Pages/BuyNow/BuyNow';
import RequireAuth from './Pages/Login/RequireAuth';
import Cart from './Pages/Cart/Cart';
import UserProfile from './Pages/UserProfile/UserProfile';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Donation from './Pages/Home/Donation/Donation';
import OrphanageDetails from './Pages/Home/Donation/OrphanageDetails';
import OldAgeHomeDetails from './Pages/Home/Donation/OldAgeHomeDetails';
import Users from './Pages/Home/Admin/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddProduct from './Pages/Home/Admin/AddProduct';
import ManageProduct from './Pages/Home/Admin/ManageProduct';
import UpdateProduct from './Pages/Home/Admin/UpdateProduct';

function App() {
  return (
    <div>
      <hr />
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<Products></Products>}></Route>
          <Route path='QuranandHadith' element={<QuranAndHadith></QuranAndHadith>}></Route>
          <Route path='panjabi' element={<Panjabi></Panjabi>}></Route>
          <Route path='borka' element={<Borka></Borka>}></Route>
          <Route path='tupi' element={<Tupi></Tupi>}></Route>
          <Route path='jainamaj' element={<Jainamaj></Jainamaj>}></Route>
          <Route path='tasbih' element={<Tasbih></Tasbih>}></Route>
          <Route path='attar' element={<Attar></Attar>}></Route>
          <Route path='search' element={<SearchContainer></SearchContainer>}></Route>
        </Route>
        <Route path='donation' element={<Donation></Donation>}></Route>
        <Route path='orphanage' element={<OrphanageDetails></OrphanageDetails>}></Route>
        <Route path='oldagehome' element={<OldAgeHomeDetails></OldAgeHomeDetails>}></Route>

        <Route path='/addProduct' element={
          <RequireAdmin>
          <AddProduct></AddProduct>
          </RequireAdmin>
        }></Route>

        <Route path='/manageProduct' element={
          <RequireAdmin>
          <ManageProduct></ManageProduct>
          </RequireAdmin>
        }></Route>
        
        <Route path='/manageProduct/:productId' element={
          <RequireAdmin>
          <UpdateProduct></UpdateProduct>
          </RequireAdmin>
        }></Route>

        <Route path='/manageUsers' element={
          <RequireAdmin>
          <Users></Users>
          </RequireAdmin>
        }></Route>
       
        
        <Route path='/buynow/:productId' element={
          <RequireAuth>
            <BuyNow></BuyNow>
          </RequireAuth>
        }></Route>

        <Route path='/cart' element={
          <RequireAuth>
            <Cart></Cart>
          </RequireAuth>
        }></Route>

        <Route path='userprofile' element={<UserProfile></UserProfile>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
