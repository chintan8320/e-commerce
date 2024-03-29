import { Blog1, Blog2, Blog3 } from "@lib/config";
import Calender from "@utilis/calender";
import Image from "next/image";
import LeftArrow from "@utilis/left";
import RightArrow from "@utilis/right";
import { useState } from "react";
import { useParams } from "next/navigation";


const BlogSec = () => {
  const params = useParams()
 
  const blogList = [
    {
      src: Blog1,
      date: "June 29, 2023",
      id: 1,
      item: "Which is Best for Bathroom Towel Ring, Rod, or Rack?",
      content:
        "These bath accessories are important to store the clothes as well as the towels you require while you are using the bathroom. They keep these towels and clothes dry and give an organized look to the bathroom. Imagine having to keep fresh clean towels on the floor because you do not have a designated place to hang them for post-bath usage! This is why storage of essentials is as important as having them. a straight long rectangular or round rod is wall mounted on either of the walls inside the bathroom to hang towels and clothes. The towel rods are strong and sturdy and have a good load-bearing capacity. These rods are sleek and have polished edges that prevent any cloth tearing or ripping. The towel rods can be installed in shower areas, or opposite the washbasin vanity area depending on the space.",
    },
    {
      src: Blog2,
      date: "June 14, 2023",
      id: 2,
      item: "Shelf Tray & Towel Rack Best for Both Bathroom",
      content:
        "Starting with shelf tray, these seemingly simple pieces of furniture can greatly enhance the functionality of your home, particularly in the bathroom . In the bathroom, a shelf tray is invaluable. With all the bathroom essentials - from personal hygiene items to grooming tools and even decorative accents - that need to be at our fingertips, a shelf tray is a perfect solution for easy accessibility. Organize your soaps, shampoos, razors, and other necessities neatly on the shelf tray. This way, you can find what you need without rummaging through drawers or cabinets. Moreover, shelf trays offer more space to establish bathroom items, enabling you to have a more organized and less cluttered bathroom. In the bathroom, a towel rack allows you to place multiple towels at the same time, making them readily accessible after a shower or bath. ",
    },
    {
      src: Blog3,
      date: "June 16, 2023",
      id: 3,
      item: "Which is Best for Bathroom Towel Ring, Rod, or Rack?",
      content:
        "Liquid soap dispenser are an excellent choice for maintaining hygiene as they minimize the need for direct contact. Unlike bar soap, which can collect bacteria on its surface over time, a soap dispenser allows everyone to get their soap without touching the entire supply. With a liquid soap dispenser, each press provides a controlled amount of soap, ensuring there is no wastage. This can be a cost-effective solution, especially in a high-traffic washroom Liquid soap dispensers are easily refilled, reducing maintenance time. Also, it's easy to monitor soap levels and refill when necessary. Since liquid soap dispensers release a specific amount of soap with each pump, it's straightforward to monitor usage and make the soap last longer. Dispensers come in an array of designs, colours, and materials, allowing for customization based on the bathroom decor. Plus, they can be wall-mounted or placed on the countertop, depending on space and preference.",
    },
  ];
  const [current, setCurrent] = useState(Number(params.id));

  const handlePrevious = (cur) => {
    if (cur === 0) {
      setCurrent(2);
    } else {
      const pre = cur - 1;
      setCurrent(pre);
    }
    
  };

  const handleNext = (cur) => {
    if (cur === 2) {
      setCurrent(0);
    } else {
      const pre = cur + 1;
      setCurrent(pre);
    }
  };

  return (
    <div className="container py-[100px]">
      <div className="grid gap-5 grid-cols-2 max-sm:grid-cols-1">
        <div className="relative items-center ">
          <div className="text-3xl font-semibold">{blogList[current].item}</div>
          <div className="flex items-center mt-[10px] ">
            <div className=" mt-auto h-5 w-5">
              <Calender />
            </div>
            <div className="font-medium text-[18px] ml-[5px] bg-gradient-to-b  from-yellow-400 to-orange-600 inline-block text-transparent bg-clip-text">
              {blogList[current].date}
              <button
                onClick={() => {
                  console.log(ob);
                }}
              ></button>
            </div>
          </div>
          <div className="font-medium text-[20px] mt-[10px] mb-[20px]">
            {blogList[current].content}
          </div>
          <hr />
          <div className="flex justify-between  gap-2 mt-[10px] ">
            <button onClick={() => handlePrevious(current)}>
              <div className="flex w-full ">
                <div className="m-auto">
                  <LeftArrow />
                </div>

                <Image
                  src={
                    current === 0 ? blogList[2].src : blogList[current - 1].src
                  }
                  width={75}
                  height={75}
                  alt="blog1"
                  className="max-sm:w-[50px] max-sm:h-[50px]"
                />
                <div className="font-medium text-[13px] leading-[21px] text-left flex-col text-xs ml-2 max-sm:text-[8px] max-sm:leading-[10px]">
                  <div>Previous post</div>
                  <div className="font-semibold text-[15px] leading-[24px] bg-gradient-to-b  from-yellow-400 to-orange-600 inline-block text-transparent bg-clip-text max-sm:text-[8px] max-sm:leading-[10px]">
                    {current === 0
                      ? blogList[2].item
                      : blogList[current - 1].item}
                  </div>
                </div>
              </div>
            </button>
            <button onClick={() => handleNext(current)}>
              <div className="flex w-full">
                <div className="font-medium text-[13px] leading-[21px] flex-col text-xs text-right mr-2 max-sm:text-[8px] max-sm:leading-[10px]">
                  <div>Next post</div>
                  <div className="font-semibold text-[15px] leading-[24 px] bg-gradient-to-b  from-yellow-400 to-orange-600 inline-block text-transparent bg-clip-text max-sm:text-[8px] max-sm:leading-[10px]">
                    {current === 2
                      ? blogList[0].item
                      : blogList[current + 1].item}
                  </div>
                </div>
                <Image
                  src={
                    current === 2 ? blogList[0].src : blogList[current + 1].src
                  }
                  width={75}
                  height={75}
                  alt="blog1"
                  className="max-sm:w-[50px] max-sm:h-[50px]"
                />
                <div className="m-auto">
                  <RightArrow />
                </div>
              </div>
            </button>
          </div>
        </div>
        <div>
          <div>
            <div className="font-medium text-2xl mb-[10px]">Archives</div>
            <hr />
            <div className="flex items-center text-[#969696] mt-[10px]">
              <div>
                <RightArrow />
              </div>
              <div>June 2023</div>
            </div>
          </div>
          <div>
            <div className="font-medium text-2xl mt-[10px] mb-[10px]">
              Categories
            </div>
            <hr />
            <div className="flex items-center text-[#969696] mt-[10px]">
              <div>
                <RightArrow />
              </div>
              <div>{blogList[current].item}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSec;
