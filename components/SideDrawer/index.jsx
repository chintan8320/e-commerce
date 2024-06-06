import ShoppingCart from "@utilis/shoppingCart";
import CloseIcon from "@utilis/Close";
import { CheckOut1 } from "@lib/config";
import RightArrow1 from "@utilis/RightArrow1";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { modalChange, removeProduct, total } from "@lib/features/features";
import ApiInstance from "@components/ApiInstance/ApiInstance";
import { UserContext } from "@lib/context_provider";

const SideDrawer = ({user}) => {
  const [count, setCount] = useState({});
  const [product, setProduct] = useState([]);
  let total = 0;
  const isModalOpen = useSelector((state) => state.sideModal.modalStatus);
  const dispatch = useDispatch();
  const pro = useSelector((state) => state.sideModal.products);
  

  const plus = (productId) => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 1) + 1,
    }));
    handleAddToCart(productId)
  };

  const minus = (productId) => {
    if (count[productId] > 1) {
      setCount((prevCounts) => ({
        ...prevCounts,
        [productId]: (prevCounts[productId] || 1) - 1,
      }));
      handleDelete(productId)
    }
  };
  const totalFunc = (val) => {
    total = total + val;
  };

  const handleAddToCart = (productId) => {
    ApiInstance.post("/orders", { userId: user, productId: productId })
      .then((res) => {
        console.log('success')
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (productId) => {
    ApiInstance.delete(`/${user}/oneorders/${productId}`)
    .then((res) => {
      getAllOrders()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const getAllOrders = () => {
    ApiInstance.get(`/orders/${user}`)
    .then((res) => {
      const counts = res.data.reduce((acc, element) => {
        if (!acc[element._id]) {
          acc[element._id] = { ...element, count: 0 };
        }
        acc[element._id].count += 1;
        return acc;
      }, {});
      setProduct(Object.values(counts))
      Object.values(counts).map((item) => {
        setCount((prev) => ({
          ...prev,
          [item._id]: item.count
        }));
      })
    })
  }

  const deleteOrders = (productId) => {
    ApiInstance.delete(`/${user}/orders/${productId}`)
    .then((res) => {
      getAllOrders()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getAllOrders()
  }, [])

  return (
    <>
      <div className="fixed top-0 right-0 h-full w-[29%] bg-white border-l shadow-lg overflow-y-auto max-sm:w-full z-50">
        <div className="fixed top-0 right-0 h-[70%] w-[29%] overflow-y-auto">
          <div className="m-[20px]">
            <div className="flex  justify-between items-center">
              <div className="flex items-center">
                <ShoppingCart />
                <div className="ml-[18px] font-normal text-[17px] leading-[25.5px]">
                  Shopping cart ({product.length})
                </div>
              </div>
              <button onClick={() => dispatch(modalChange(false))}>
                <CloseIcon />
              </button>
            </div>
            {product.length === 0 ? (
              <div className="p-[60px] text-semibold text-[rgb(157,155,155)] text-center">
                No products are available 
              </div>
            ) : (
              product.map((product) => (
                <div key={product._id} className="flex mt-[50px]">
                  <div className="border-[1px] rounded-[3px] border-[#E4E4E4]">
                    <div className="grid items-center justify-center">
                      <Image
                        src={product.file.url}
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
                        {count[product._id] *
                          parseInt(product.price) ||
                          parseInt(product.price)}
                        /-
                        {totalFunc(
                          count[product._id] *
                            parseInt(product.price) ||
                            parseInt(product.price)
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-black">
                        <div className="flex justify-between w-[60px] h-[18px] text-black font-medium text-[12px] leading-[18px]">
                          {count[product._id] === 1 ? (
                            <button onClick={() => minus(product._id)} disabled>
                              -
                            </button>
                          ) : (
                            <button onClick={() => minus(product._id)}>
                              {" "}
                              -{" "}
                            </button>
                          )}
                          <div>{count[product._id] || 1}</div>
                          <button onClick={() => plus(product._id)}> + </button>
                        </div>
                        <div className="font-medium text-[12px] leading-[18px] bg-gradient-to-b  from-yellow-400 to-orange-600 inline-block text-transparent bg-clip-text w-[50px] h-[18px]">
                          <button
                            onClick={() => deleteOrders(product._id)}
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
