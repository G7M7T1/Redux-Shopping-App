import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";

export const fetchData = () => {
    return async (dispatch) => {

        const fetchHandler = async () => {
            const res = await fetch(`${process.env.REACT_APP_URL}`)
            const data = await res.json()
            return data
        }

        try {
            let cartData = await fetchHandler()
            if (!('itemsList' in cartData)) {
                cartData.itemsList = [];
            }
            dispatch(cartActions.replaceData(cartData))
        }

        catch (err) {
            dispatch(uiActions.showNotification({
                open: true,
                message: err,
                type: "error"
            }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                open: true,
                message: "Sending Request Right Now",
                type: "info"
            }))

        const sendRequest = async () => {
            await fetch(`${process.env.REACT_APP_URL}`, {
                method: "PUT",
                body: JSON.stringify(cart)
            })
            // const data = await res.json()
            // send state as request is successful
            dispatch(uiActions.showNotification({
                open: true,
                message: "Successfully Sent Request",
                type: "success"
            }))
        }

        try {
            await sendRequest()
        }

        catch (err) {
            dispatch(uiActions.showNotification({
                open: true,
                message: err,
                type: "error"
            }))
        }
    }
}
