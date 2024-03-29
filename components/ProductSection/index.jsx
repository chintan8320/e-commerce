import Image from "next/image";
import { useState } from "react";
import SideDrawer from "@components/SideDrawer";
import SimpleSliderS from "@components/SliderI";
import { prodList } from "@components/ProductList/prod";
import { useParams } from "next/navigation";

const ProductSection = () => {
  const [count, setCount] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const productList = prodList()
  const params = useParams()

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  const cons = () => {
    setOpenModal(!openModal);
    console.log(openModal);
  };

  function findObjectById(array, id) {
    return array.find(obj => obj.id == id);
  }

  const product = findObjectById(productList , params.id )

  return (
    <div>
      <div className="container py-[100px]">
        <div className="grid gap-5 grid-cols-2 max-sm:grid-cols-1">
          <div>
            <SimpleSliderS  src={product.src}/>
          </div>
          {/* <div className="hidden font-medium text-center flex text-[50px] leading-[75px] max-sm:block">
              ENOX RING
            </div> */}
          <div>
            <div className="font-medium text-[50px] leading-[75px] ">
              {product.name}
            </div>
            {/* <div className="hidden max-sm:block">
            <SimpleSliderS/>
            </div> */}
            <div className="font-semibold text-[33px] leading-[49.5px] bg-gradient-to-b  from-yellow-400 to-orange-600 inline-block text-transparent bg-clip-text mt-[10px] max-sm:mt-[15px]">
              {product.price}
            </div>
            <div className="font-normal text-[17px] leading-[25.5px] mt-[10px]">
              well finish presents Dream hand towel hanger made up of 202 grade
              of stainless-steel that can be used in your bathroom, kitchen and
              around your washbasin area to hang your towels and napkins.
            </div>
            <div className="font-normal text-[22px] leading-[33px] mt-[20px]">
              QTY:
            </div>
            <div className="flex gap-[10px] columns-2 mt-[15px]">
              <div className=" flex justify-center border-[1px] border-black rounded-[3px] w-[155px] h-[50px] font-normal text-[32px] leading-[48px] px-[5px]">
                <div className="flex justify-between w-full h-[43.64px] text-[#AAAAAA]">
                  {count === 1 ? (
                    <button onClick={minus} disabled>
                      -
                    </button>
                  ) : (
                    <button onClick={minus}>-</button>
                  )}
                  <div>{count}</div>
                  <button onClick={plus}>+</button>
                </div>
              </div>
              <button
                className="w-[155px] h-[50px] bg-gradient-to-b  from-yellow-400 to-orange-600 rounded-[3px]"
                onClick={() => console.log(product)}
              >
                <div className="font-medium text-[16px] leading-[24px] ">
                  ADD TO CART
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="font-semibold text-[32px] leading-[48px] mt-[10px] max-sm:text-[25px] max-sm:leading-[35px]">
          Description:
        </div>
        <div className="font-normal text-[28px] leading-[42px] mt-[20px] max-sm:text-[20px] max-sm:leading-[30px]">
          Features: Material – Stainless-Steel Finish - Nickel-chrome mirror
          finish Stay above ground and countertop Free holds towels and napkin
          as well as keeps them dry Provides storage and keeps them within reach
          Rust proof and Non-corrosive Strong Build PLANTEX is a leading brand
          in Home Improvement for all kinds of bathroom fittings and accessories
          with material Stainless Steel, Aluminium, Brass & Acrylic. It is
          suggested to clean this napkin holder for kitchen/bathroom/ashbasin
          periodically. Use wet and dry clothes to keep dust and water droplets
          off the product.
        </div>
      </div>
      {openModal && <SideDrawer />}
    </div>
  );
};

export default ProductSection;
