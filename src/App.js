import React, {useEffect} from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import {useDispatch, useSelector} from "react-redux";
import Notification from "./components/Notification";
import {fetchData, sendCartData} from "./store/cart-actions";

let isFirstRender = true

function App() {
    const dispatch = useDispatch()
    const notification = useSelector(state => state.ui.notification)
    const cart = useSelector(state => state.cart)
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

    useEffect(() => {
        dispatch(fetchData())
    },[dispatch])

    useEffect(() => {
        if(isFirstRender) {
            isFirstRender = false
            return;
        }

        if (cart.change) {
            dispatch(sendCartData(cart))
        }
    },[cart, dispatch])

  return (
    <div className="App">
        {notification && <Notification type={notification.type} message={notification.message}/>}
        {!isLoggedIn && <Auth />}
        {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
