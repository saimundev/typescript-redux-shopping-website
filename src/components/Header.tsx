import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../store/hooks";

const Header = () => {
  const navigate = useNavigate();
  const {  totalQuantatay } = useAppSelector(state =>state.cart)
  
const hanldeNavigate = ()=>{
  navigate("/")
}

  return (
    <div>
      <nav className="bg-white shadow-lg border-b border-gray-300">
        <Container>
          <div className="flex justify-between items-center">
            <div className="text-orange-500 text-2xl font-bold cursor-pointer" onClick={hanldeNavigate}>E-SHOP</div>
            <div className="flex items-center gap-5">
              <Link to="/" className="text-black font-medium py-4 px-2">
                Home
              </Link>
              <Link
                to="/cart"
                className="text-white font-medium py-4 px-2 relative"
              >
                <BsCart3 size={24} color="black"/>
                <div className="w-[20px] h-[20px] rounded-full bg-orange-500 text-white flex justify-center items-center font-semibold absolute top-2 right-0">
                  {totalQuantatay}
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </nav>
    </div>
  );
};

export default Header;
