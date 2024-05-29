"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { WishList, QuickView, Compare, Troli } from "@utilis/categories";
import Pagination from "@components/Pagination";
import SearchBar from "@components/SearchBar";
import { useDispatch } from "react-redux";
import ApiInstance from "@components/ApiInstance/ApiInstance";
import { useParams, useRouter } from "next/navigation";
import { UserContext } from "@lib/context_provider";
import RangeSlider from "@components/RangeSlider";
import { SearchIcon } from "@utilis/searchIcons";

const ProducList = () => {
  const [hovered, setHovered] = useState(null);
  const [productList, setProductList] = useState([]);
  const [wishLists, setWishLists] = useState([])
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [searchQuery, setSearchQuery] = useState("");
  const params = useParams();
  const router = useRouter();

  const user = useContext(UserContext);

  const itemsPerPage = 9;
  const dispatch = useDispatch();
  const totalPages = Math.ceil(productList.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = productList.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleAddToCart = (product) => {
    dispatch(modalChange(true));
    dispatch(addProduct(product));
  };

  const handleWishList = (productId) => {
    ApiInstance.post("/wishList", { userId: user, productId: productId })
      .then((res) => {
        console.log(res);
        handleAddWishList()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteWishList = (productId) => {
    ApiInstance.delete(`/${user}/wishlist/${productId}`)
    .then((res) => {
      console.log(res)
      handleAddWishList()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const getAllProduct = () => {
    let query = `/product/get?category=${params.id}`;
    if (searchQuery) {
      query += `&searchQuery=${searchQuery}`;
    }
    if (minPrice) {
      query += `&minPrice=${minPrice}`;
    }
    if (maxPrice) {
      query += `&maxPrice=${maxPrice}`;
    }
    ApiInstance.get(query).then((res) => {
      setProductList(res?.data);
      console.log(res?.data, params);
    });
  }

  const handleAddWishList = () => {
    ApiInstance.get(`/${user}`).then((res) => {
      setWishLists(res.data.map((item) => item._id))
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    getAllProduct()
  }, [router, searchQuery, minPrice, maxPrice]);

  useEffect(() => {
    
    handleAddWishList()
    
  }, [])

  return (
    <div className="container py-20">
      <div className="grid grid-cols-4 xl:grid-cols-3 max-lg:grid-cols-2 md:grid-cols-2 gap-3 max-sm:grid-cols-1">
        <div className="col-span-3  md:col-span-3 max-md:order-2 ">
          {/* <ButtonsCategory title='All'/> */}
          
            <div className="flex justify-evenly">
              <div className="text-black bg-white flex items-center justify-center">
                <div className="relative w-full mt-[10px] max-w-[324px] max-sm:w-[230px]">
                  <input
                    type="text"
                    className="px-10 py-2 rounded-[35px] h-[60px] w-full bg-[#ECECEC] max-sm:py-[5px]"
                    placeholder="Search Products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                    <SearchIcon />
                  </div>
                </div>
              </div>
              
            </div>
          
          <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 md:pl-[55px]  gap-4 my-[5rem] max-sm:flex max-sm:flex-col max-sm:justify-evenly max-sm:items-center">
            {paginatedItems.map((product, index) => (
              <div
                key={index}
                className={`h-[452px] w-[277px] flex flex-col items-center justify-around hover:shadow-md `}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="w-[277px] h-[306px] relative">
                  <div className=" w-full h-[306px] mb-4 flex justify-center items-center bg-[#ECECEC] hover:bg-[#CACACA]">
                    <Image
                      src={product.file.url}
                      alt={product.name}
                      height={186}
                      width={186}
                    />
                    {hovered === index && (
                      <div className=" absolute bottom-[0] mb-4 flex justify-center w-full mt-2 cursor-pointer">
                        <div class="hover:stroke-white relative flex flex-col items-center group">
                          <div
                            className={`hover:text-white mr-2 bg-white rounded-full p-1 hover:bg-[#facc15]`}
                          >
                            {wishLists.some(item => item === product._id) ?
                            <button onClick={() => deleteWishList(product._id)}>
                              <WishList fill_color='rgb(250 204 21)'/>
                            </button>
                            :
                            <button onClick={() => handleWishList(product._id)}>
                              <WishList fill_color='none'/>
                            </button>

                            }
                          </div>
                          <div class="absolute bottom-0 top-[-25px] flex flex-col items-center hidden mb-6 group-hover:flex">
                            <span class="relative z-10 p-1 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg w-[104px] flex justify-center">
                              Add To Wishlist
                            </span>
                            <div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                          </div>
                        </div>
                        <div class="relative hover:fill-white flex flex-col items-center group">
                          <div className="mr-2 bg-white rounded-full p-1 hover:bg-[#facc15]">
                            <button
                              onClick={() =>
                                router.push(
                                  `/product/${params.id}/${product._id}`
                                )
                              }
                            >
                              <QuickView />
                            </button>
                          </div>
                          <div class="absolute hover:fill-white bottom-0 top-[-25px] flex flex-col items-center hidden mb-6 group-hover:flex">
                            <span class="relative z-10 p-1 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg w-[104px] flex justify-center">
                              Quick View
                            </span>
                            <div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-center w-full flex flex-col py-5 hover:bg-[#FFFFFF]">
                  <div className="font-bold text-lg">{product.name}</div>
                  <div className="font-semibold">${product.price}</div>
                  {hovered === index && (
                    <div
                      className={`flex m-auto justify-center items-center cursor-pointer mt-2 p-1 w-40 ${
                        hovered === index
                          ? "bg-black rounded-full hover:bg-[#facc15]"
                          : ""
                      }`}
                    >
                      <Troli />
                      <button onClick={() => handleAddToCart(product)}>
                        <span className="ml-2 text-white">Add to Cart</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProducList;
