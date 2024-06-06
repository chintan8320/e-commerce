import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import SideDrawer from "@components/SideDrawer";
import SimpleSliderS from "@components/SliderI";
import { prodList } from "@components/ProductList/prod";
import { useParams } from "next/navigation";
import ApiInstance from "@components/ApiInstance/ApiInstance";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "@lib/context_provider";
import { modalChange } from "@lib/features/features";

const ProductSection = () => {
  const [count, setCount] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [product, setProduct] = useState({})
  const params = useParams()
  const user = useContext(UserContext);
  const open = useSelector((state) => state.sideModal.modalStatus)
  const dispatch = useDispatch()  

  const plus = () => {
    setCount(count + 1);
    handleAddToCart()
  };

  const minus = () => {
    setCount(count - 1);
    handleDelete()
  };

  const cons = () => {
    setOpenModal(!openModal);
    console.log(openModal);
  };

  function findObjectById(array, id) {
    return array.find(obj => obj.id == id);
  }

  const handleRe = () => {
    dispatch(modalChange(true))
    
  }
  const handleDelete = () => {
    ApiInstance.delete(`/${user}/oneorders/${params.productId}`)
    .then((res) => {
      getAllOrders()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const getCountOfIdOccurrences = (arr) => {
    let count = 0;
    for (const obj of arr) {
      if (obj._id === params.productId) {
        count++;
      }
    }
    setCount(count)
  };

  const getAll = () => {
    ApiInstance.get(`/orders/${user}`).then((res) => {
      console.log(res.data,'res')
      getCountOfIdOccurrences(res.data)
    })
  }
  const handleAddToCart = () => {
    ApiInstance.post("/orders", { userId: user, productId: params.productId })
      .then((res) => {
        console.log('success')
      })
      .catch((err) => {
        console.log(err);
      });
  };


  useEffect(() => {
    ApiInstance.get(`/product/${params.productId}`).then((res) => {
      console.log(res?.data)
      setProduct(res?.data)
    })
    getAll()
  }, [])

  return (
    <div>
      <div className="container py-[100px]">
        <div className="grid gap-5 grid-cols-2 max-sm:grid-cols-1">
          <div>
            <SimpleSliderS  src={product?.file?.url}/>
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
                onClick={() => {
                  handleAddToCart()
                  handleRe()
                }}
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
          {product.description}
        </div>
      </div>
      {open && <SideDrawer user={user}/>}
    </div>
  );
};

export default ProductSection;
