import axios from "axios";
import {
  PRODUCTS_FAIL,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_FAIL,
  PRODUCT_ADD_SUCCESS,
  REMOVE_ERROR,
} from "../types";

export const listproducts = () => async (dispatch, getState) => {
  try {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : "";
    dispatch({ type: PRODUCTS_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
        "x-auth-key": userInfo.token,
      },
    };
    const { data } = await axios.get(`/api/products/get`, config);
    dispatch({
      type: PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: PRODUCTS_FAIL, payload: error.response });
  }
};

export const removeError = () => (dispatch) => {
  dispatch({ type: REMOVE_ERROR });
};
export const addProduct = (newProduct) => async (dispatch) => {
  try {
    const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : "";
    dispatch({ type: PRODUCT_ADD_REQUEST });
    const config = {
      headers: {
        "Content-type": "application/json",
        "x-auth-key": userInfo.token,
      },
    };
    const { data } = await axios.post(`/api/products/addproduct`, newProduct, config);
    dispatch({ type: PRODUCT_ADD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_ADD_FAIL,
      payload: error.response.data.msg,
    });
  }
};