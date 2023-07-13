import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-66618-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Can not fetch cart data..!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success.!.",
          message: "Sending Cart Data Successfully..!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending..",
        message: "Sending Cart Data..!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-66618-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending Cart Data Failed..!");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error..!",
          message: "Sending Cart Data Failed..!",
        })
      );
    }

    dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Success.!.",
        message: "Sending Cart Data Successfully..!",
      })
    );
  };
};
