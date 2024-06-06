import { RoseGold } from "@lib/config";
import Image from "next/image";
import CloseIcon from "@utilis/Close";
import CartBI from "@utilis/cartBI";
import { useSelector, useDispatch } from "react-redux";
import { removeWishList , modalChange , addProduct} from "@lib/features/features";
import ApiInstance from "@components/ApiInstance/ApiInstance";
import { UserContext } from "@lib/context_provider";
import { useContext, useEffect, useState } from "react";
import Loader from "react-js-loader";

const WishListSec = () => {
  const [wishLists, setWishLists] = useState([])
  const [loader, setLoader] = useState([])
    const dispatch = useDispatch()
    const user = useContext(UserContext);
    const wishList = useSelector((state) => state.sideModal.wishList);

    const handleCart = (obj) => {
        dispatch(modalChange(true))
        dispatch(addProduct(obj))

    }

    const getWishList = () => {
      setLoader(true)
      ApiInstance.get(`/${user}`).then((res) => {
        setWishLists(res.data)
        setLoader(false)
      })
      .catch((err) => {
        console.log(err)
        setLoader(false)
      })
    }

    const deleteWishList = (productId) => {
      ApiInstance.delete(`/${user}/wishlist/${productId}`)
      .then((res) => {
        console.log(res)
        getWishList()
      })
      .catch((err) => {
        console.log(err)
      })
    }

    useEffect(() => {
      getWishList()
    }, [])

  return (
    <div className="container py-[100px] ">
      {wishLists.length > 0 ? wishLists.map((obj) => (
            <div key={obj.id} className="border border-[#000000] border-opacity-[30%]">
            <div className="flex justify-between">
              <div className="border-r border-[#000000] border-opacity-[30%] p-[14px] max-sm:p-[5px]">
                <div className="bg-[#ECECEC] py-[23px] px-[12px] max-sm:py-[10px] max-sm:px-[5px]">
                  <Image
                    src={obj.file.url}
                    width={100}
                    height={131}
                    alt={obj.name}
                    className="relative w-[100px] h-[120px] max-sm:w-[20px] max-sm:h-[30px]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-5 items-center max-sm:grid-cols-3 gap-[10px] max-sm:gap-[2px]">
                <div className="flex flex-col col-span-4 gap-[5px] max-sm:col-span-2 max-sm:gap-[2px]">
                  <div className="font-normal text-[20px] leading-[30px] max-sm:text-[10px] max-sm:leading-[15px]">
                    {obj.name}
                  </div>
                  <div className="font-normal text-[20px] leading-[30px] max-sm:text-[10px] max-sm:leading-[15px] text-black opacity-[50%]">
                    Rs. {obj.price}/-
                  </div>
                </div>
                <div>
                  <button className="flex font-medium text-[16px] leading-[24px] bg-[#facc15] items-center gap-[10px] p-[12px] max-sm:text-[7px] max-sm:leading-[5px] max-sm:p-[5px]">
                    <div className="max-sm:hidden">
                      <CartBI />
                    </div>
                    <div><button onClick={() => handleCart(obj)}>ADD TO CART</button></div>
                  </button>
                </div>
              </div>
              <div className="border-l border-[#000000] border-opacity-[30%] flex items-center px-[28px] max-sm:px-[5px]">
                <button onClick={() => deleteWishList(obj._id)}>
                  <CloseIcon />
                </button>
              </div>
            </div>
          </div>
        )) : <div className="flex bg-[#ECECEC] w-full col-span-3 justify-evenly p-[10px]">{loader ? 'Loading...': 'No found'}</div>}
      
    </div>
  );
};

export default WishListSec;
