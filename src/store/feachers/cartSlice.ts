import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProdect } from "../services/prodectApi";
import toast from "react-hot-toast"

interface CartState {
  cartItem: IProdect[];
  totalPrice: number;
  totalQuantatay: number;
}

const initialState: CartState = {
  cartItem: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || "{}") : [],
  totalPrice: 0,
  totalQuantatay: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProdect | any>) => {
      const existData = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existData >= 0) {
        state.cartItem[existData].cartQuantity += 1;
        toast.success("Prodect Cart Increment",{
          className:"px-4 py-2 border border-green-500 rounded font-semibold"
        })
      } else {
        state.cartItem.push({ ...action.payload, cartQuantity: 1 });
        toast.success("Prodect Add TO Cart",{
          className:"px-4 py-2 border border-green-500 rounded font-semibold"
        })
      }

     

      localStorage.setItem("cart",JSON.stringify(state.cartItem))
    },

    cartIncrement:(state,action)=>{
        const isExist = state.cartItem.findIndex(item =>item.id === action.payload);
            state.cartItem[isExist].cartQuantity += 1
        localStorage.setItem("cart",JSON.stringify(state.cartItem))
        toast.success("Prodect Cart Increment",{
          className:"px-4 py-2 border border-green-500 rounded font-semibold"
        })
    },

    cartDecrement:(state,action)=>{
        const isExist = state.cartItem.findIndex(item =>item.id === action.payload);
        if(state.cartItem[isExist].cartQuantity > 1){
            state.cartItem[isExist].cartQuantity -= 1
        }
        toast.error("Prodect Cart Decrement",{
          className:"px-4 py-2 border border-green-500 rounded font-semibold"
        })
        localStorage.setItem("cart",JSON.stringify(state.cartItem))
    },

    cartDelete:(state,action)=>{
        state.cartItem = state.cartItem.filter(item =>item.id !== action.payload)
        toast.error("Prodect is Deleted",{
          className:"px-4 py-2 border border-green-500 rounded font-semibold"
        })
        localStorage.setItem("cart",JSON.stringify(state.cartItem))
    },

    cartClear:(state)=>{
        state.cartItem = [];
        toast.error("Delete All Item",{
          className:"px-4 py-2 border border-green-500 rounded font-semibold"
        })
        localStorage.removeItem("cart")
    },

    cartTotalCalculate:(state)=>{
      const { total,quantity  } =   state.cartItem.reduce((totalItem,currentItem)=>{
            const totalPrice = currentItem.price * currentItem.cartQuantity;
            totalItem.total += totalPrice
            totalItem.quantity += currentItem.cartQuantity

            return totalItem
        },{total:0,quantity:0})

        state.totalPrice = total
        state.totalQuantatay = quantity
    }
  },
});

export default cartSlice.reducer;
export const { addToCart,cartIncrement,cartDecrement,cartDelete,cartClear,cartTotalCalculate } = cartSlice.actions;
