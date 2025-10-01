import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export function fetchCartData(){
    return async (dispatch) => {
        async function fetchData() {
            const response = await fetch("https://database-4f2be-default-rtdb.firebaseio.com/cart.json");

            if (!response.ok){
                throw new Error("Fetching cart data failed.");
            }

            const data = await response.json();

            return data;
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        }
        catch (error) {
            dispatch(uiActions.showNotification({
                status: "error",
                title: "Failed!",
                message: "Fetching data failed!",
            }));
            console.error(error);
        }
    }
}

export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({status: "pending", title: "Sending...", message: "Sending cart data..."})
    )

    const sendRequest = async () => {
      const response = await fetch('https://database-4f2be-default-rtdb.firebaseio.com/cart.json', {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      if (!response.ok){
        throw new Error("Sending cart data failed.");
      }
    }
    try{
      await sendRequest();
      dispatch(uiActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Sent cart data successfully!",
      }))
    }
    catch(error) {
      dispatch(uiActions.showNotification({
        status: "error",
        title: "Failed!",
        message: "Sending data failed!",
      }));
      console.error(error);
    } 
  }
}