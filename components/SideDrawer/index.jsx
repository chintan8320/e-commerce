import ShoppingCart from "@utilis/shoppingCart";
import CloseIcon from "@utilis/Close";
import { CheckOut1 } from "@lib/config";
import RightArrow1 from "@utilis/RightArrow1";
import { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { modalChange, removeProduct, total } from "@lib/features/features";

const SideDrawer = () => {
  const [count, setCount] = useState({});
  let total = 0;
  const isModalOpen = useSelector((state) => state.sideModal.modalStatus);
  const dispatch = useDispatch();
  const pro = useSelector((state) => state.sideModal.products);

  const plus = (productId) => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 1) + 1,
    }));
  };

  const minus = (productId) => {
    if (count[productId] > 1) {
      setCount((prevCounts) => ({
        ...prevCounts,
        [productId]: (prevCounts[productId] || 1) - 1,
      }));
    }
  };
  const totalFunc = (val) => {
    total = total + val;
  };
  return (
    <>
      <div className="fixed top-0 right-0 h-full w-[29%] bg-white border-l shadow-lg overflow-y-auto max-sm:w-full z-50">
        <div className="fixed top-0 right-0 h-[70%] w-[29%] overflow-y-auto">
          <div className="m-[20px]">
            <div className="flex  justify-between items-center">
              <div className="flex items-center">
                <ShoppingCart />
                <div className="ml-[18px] font-normal text-[17px] leading-[25.5px]">
                  Shopping cart ({pro.length})
                </div>
              </div>
              <button onClick={() => dispatch(modalChange(false))}>
                <CloseIcon />
              </button>
            </div>
            {pro.length === 0 ? (
              <div className="p-[60px] text-semibold text-[rgb(157,155,155)] text-center">
                &qout; No products are available &qout;
              </div>
            ) : (
              pro.map((product) => (
                <div key={product.id} className="flex mt-[50px]">
                  <div className="border-[1px] rounded-[3px] border-[#E4E4E4]">
                    <div className="grid items-center justify-center">
                      <Image
                        src={product.src}
                        alt={product.name}
                        width={90}
                        height={90}
                        className="relative w-[100px] h-[100px]"
                      />
                    </div>
                  </div>
                  <div className="ml-[15px] grid content-between w-full">
                    <div className="flex items-center justify-between w-full">
                      <div className="font-medium text-[12px] leading-[18px] ">
                        {product.name}
                      </div>
                      <div className="font-medium text-[13px] leading-[19.5px] ">
                        Rs.{" "}
                        {count[product.id] *
                          parseInt(product.price.match(/\d+/)[0]) ||
                          parseInt(product.price.match(/\d+/)[0])}
                        /-
                        {totalFunc(
                          count[product.id] *
                            parseInt(product.price.match(/\d+/)[0]) ||
                            parseInt(product.price.match(/\d+/)[0])
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-black">
                        <div className="flex justify-between w-[60px] h-[18px] text-black font-medium text-[12px] leading-[18px]">
                          {count[product.id] === 1 ? (
                            <button onClick={() => minus(product.id)} disabled>
                              -
                            </button>
                          ) : (
                            <button onClick={() => minus(product.id)}>
                              {" "}
                              -{" "}
                            </button>
                          )}
                          <div>{count[product.id] || 1}</div>
                          <button onClick={() => plus(product.id)}> + </button>
                        </div>
                        <div className="font-medium text-[12px] leading-[18px] bg-gradient-to-b  from-yellow-400 to-orange-600 inline-block text-transparent bg-clip-text w-[50px] h-[18px]">
                          <button
                            onClick={() => dispatch(removeProduct(product.id))}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        {/* lower box */}
        <div className="fixed bottom-0 h-[30%] w-[29%] border-t max-sm:w-[100%]">
          <div className="m-[20px]">
            <div className="flex justify-between mt-[30px]">
              <div>
                <div className="font-medium text-[12px] leading-[18px]">
                  Subtotal
                </div>
                <div className="font-medium text-[10px] leading-[15px] text-[#AFAFAF] mt-[10px]">
                  Shipping and taxes calculated at checkout.
                </div>
              </div>
              <div>
                <div className="font-medium text-[13px] leading-[19.5px]">
                  Rs. {total}/-
                </div>
              </div>
            </div>
            <div className="mt-[35px] flex justify-center py-[13px] bg-gradient-to-b font-medium text-[16px] leading-[24px] from-yellow-400 to-orange-600">
              <button>Check Out</button>
            </div>
            <div className="w-[140px] h-[15px] m-auto mt-[10px]">
              <div className="flex justify-between">
                <div className="flex w-[112px] h-[15px] justify-around font-medium text-[10px] leading-[15px]">
                  <div className="text-[#AEAEAE]">Or</div>
                  <div className="bg-gradient-to-b  from-yellow-400 to-orange-600 inline-block text-transparent bg-clip-text">
                    Continue Shopping
                  </div>
                </div>
                <div>
                  <RightArrow1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={() => dispatch(modalChange(false))}
        ></div>
      )}
    </>
  );
};
export default SideDrawer;
