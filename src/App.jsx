import "./App.css";

import StoreContext from "./hooks/storeContext";
import { useEffect, useState } from "react";
import RootLayout from "./layouts/RootLayout";
import ContactUs from "./pages/ContactUs";
import Product_Desc from "./pages/Product_Desc";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import Products from "./pages/Products";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import ShoppingCart from "./pages/ShoppingCart";
import OrderSent from "./pages/OrderSent";
import BackToTopButton from "./components/BackToTopButton";
import WhatsAppButton from "./components/WhatsAppButton";
// import fetchData from "./hooks/fetchData";
// import axios from 'axios';
import { FetchSettings } from "./hooks/FetchSettings";

import { SkeletonTheme } from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'

import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="ordersent" element={<OrderSent />} />
      <Route path="*" element={<NotFound />} />
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="products" element={<Products />} />
        <Route path="productdesc" element={<Product_Desc />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="shoppingcart" element={<ShoppingCart />} />
      </Route>
    </>
  )
);

function App() {
  const [fetchProducts, setFetchProducts] = useState("products?populate=*");
  const [products, setProducts] = useState([]);
  const { data, loading, error } = useFetch(fetchProducts);

  useEffect(() => {
    data && setProducts(data);
  }, [data]);


  // const [ingcoDay, setIngcoDay] = useState([]);
  // // const { ingcoDaydata, ingcoDayloading, ingcoDayerror } = useFetch("/ingco-days?populate=*");
  // const { data2 } = useFetch("/ingco-days?populate=*");

  // useEffect(() => {
  //   data2 && setIngcoDay(data2);
  // }, [data2]);



  const [fetchSettings, setFetchSettings] = useState('settings');
  // const { fetchSettings } = useContext(StoreContext);
  const [settingsdata, setSettingsData] = useState({});
  const { settings, dataloading, dataerror } = FetchSettings(fetchSettings);
  useEffect(() => {
    settings && setSettingsData(settings);
  }, [settings]);

  // console.log(settingsdata);

  const notify = (message) => toast(message, {
    position: "top-center",
    // autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Zoom,
  });


  return (
    <SkeletonTheme baseColor="#bbbbbb" highlightColor="#f5f5f5">
      <StoreContext.Provider
        value={{ fetchProducts, setFetchProducts, notify, products, loading, error, settings, settingsdata, dataloading, dataerror }}
      >
        <RouterProvider router={router} />
        <BackToTopButton />
        <WhatsAppButton />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition:Zoom
        // toastStyle={{ color: "red" }}
        // className="toast-container"
        />
      </StoreContext.Provider>
    </SkeletonTheme>
  );
}

export default App;
