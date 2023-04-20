import React from "react";
import Container from "../../components/Container";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  cartIncrement,
  cartDecrement,
  cartDelete,
  cartClear,
} from "../../store/feachers/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItem,totalPrice } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const hanldeInc = (id: number) => {
    dispatch(cartIncrement(id));
  };

  const hanldeDec = (id: number) => {
    dispatch(cartDecrement(id));
  };

  const handleDelte = (id: number) => {
    dispatch(cartDelete(id));
  };

  return (
    <Container>
      {cartItem.length > 0 && (
        <div className="grid grid-cols-6 items-center text-center gap-6 mb-4 mt-10 border-b border-gray-300 pb-4">
          <div className="text-lg font-medium">Image</div>
          <div className="text-lg font-medium">Name</div>
          <div className="text-lg font-medium">INC / DEC</div>
          <div className="text-lg font-medium">Price</div>
          <div className="text-lg font-medium">Total Price</div>
          <div className="text-lg font-medium">Delete</div>
        </div>
      )}
      {cartItem.length ? (
        cartItem.map((item) => (
          <div className="grid grid-cols-6 items-center gap-6 mb-4 mt-6 text-center">
            <img src={item.image} className="w-[150px] h-[100px]" alt="" />
            <h1 className="text-lg font-semibold">
              {item.title?.slice(0, 20)}...
            </h1>
            <div className="">
              <button
                onClick={() => hanldeDec(item.id)}
                className="bg-orange-500 font-bold px-4 py-1 text-white inline-block"
              >
                -
              </button>
              <span className="px-6 border border-orange-500 py-1">
                {item.cartQuantity}
              </span>
              <button
                onClick={() => hanldeInc(item.id)}
                className="bg-orange-500 font-bold px-4 py-1 text-white inline-block"
              >
                +
              </button>
            </div>
            <h3>{item.price.toFixed(2)}</h3>
            <h3>{item.price * item.cartQuantity}</h3>
            <div className="">
              <button
                onClick={() => handleDelte(item.id)}
                className="bg-red-500 px-6 py-2 rounded text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center mt-10">
          <h1 className="text-2xl mb-4 font-semibold">Your Cart is Empty</h1>
          <Link to="/">
            <button className="bg-orange-500 px-6 py-2 rounded text-white">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
      {cartItem.length > 0 && (
        <div className="mt-16 flex justify-between border-t border-gray-300 pt-3">
          <div className="">
            <button
              onClick={() => dispatch(cartClear())}
              className="border border-orange-500 px-6 py-2 inline-block font-semibold rounded hover:bg-orange-500 hover:text-white duration-300"
            >
              Clear Cart
            </button>
          </div>
          <div className="">
            <h1 className="text-2xl font-semibold">Total Price: {totalPrice.toFixed(2)}</h1>
            <button className="bg-orange-500 px-6 py-2 inline-block text-white rounded font-medium mt-4">
              Check Out
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;
