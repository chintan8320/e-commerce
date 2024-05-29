import {
  AboutPage,
  AboutRec,
  AboutPage_2,
  AboutWing_2,
} from "@lib/config";
import Image from "next/image";
import Link from "next/link";

const AboutSection = ({ isHomePage }) => {
  return (
    <div className="container mt-20 max-sm:mt-10">
      <div className="text-center">
        <div>
          <h6 className="bg-[#facc15] inline-block text-transparent bg-clip-text font-medium text-[20px] leading-8 max-sm:flex max-sm:leading-[22.5px] max-sm:text-[15px] max-sm:justify-center">
            ABOUT US
          </h6>

          <h4 className="font-medium text-4xl leading-[3.75rem] max-sm:font-semibold max-sm:leading-[22.5px] max-sm:text-[15px] max-sm:flex justify-center">
            ABOUT PREMIUM SOUND
COLLECTIONS
          </h4>
        </div>
      </div>

      <div className="grid gap-2 lg:grid-cols-2 md:grid-cols-1 max-sm:flex max-sm:flex-col ">
      <div className="max-sm:order-first pl-36  max-sm:m-auto">
              <div className="relative ">
                <Image
                  className="relative left-[-94px] max-sm:h-[216px] max-sm:w-[153.3px] "
                  src={AboutPage}
                  width={391}
                  height={552}
                  alt="AboutPage"
                />
                
              </div>
            </div>
        <div className="m-auto  max-sm:pt-5">
        <div className="">
              <p className="font-normal text-[16px]   leading-[26px] max-sm:text-[10px] max-sm:leading-[15px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde magnam doloribus nemo aut necessitatibus esse quod sit maiores ab, consequuntur nobis, ad, voluptates cupiditate? Nobis dolores provident veritatis vitae dicta?
              </p>
              <p className="font-normal text-[16px]   leading-[26px] max-sm:text-[10px] max-sm:leading-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eveniet officiis? Dignissimos obcaecati, odio reprehenderit sunt consectetur unde neque dolore expedita quas nulla harum rerum tenetur nesciunt officia aliquid recusandae!
              </p>
              <p className="font-normal text-[16px]   leading-[26px] max-sm:text-[10px] max-sm:leading-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nostrum porro repudiandae illo inventore maxime eligendi vero est architecto magni sint totam odio alias aliquid esse, repellendus illum dicta enim.
              </p>
              
            </div>
          {isHomePage && (
            <button class="bg-gradient-to-b from-yellow-400 to-orange-600 text-black font-semibold py-2 px-4  w-[155px] h-[50px] mt-[30px] text-[16px] leading-[24px] max-sm:w-[74px] max-sm:h-[18px] max-sm:m-auto mt-2 max-sm:text-[7px] max-sm:leading-[12px] max-sm:mt-2 max-sm:flex max-sm:justify-center max-sm:items-center md:flex md:items-center md:justify-center md:m-auto md:mt-4">
              ABOUT US
            </button>
          )}
        </div>
      </div>

      {!isHomePage && (
        <div className="py-[50px]">
          <div className="grid gap-2 lg:grid-cols-2 md:grid-cols-1 max-sm:flex max-sm:flex-col">
            <div className="m-auto max-sm:pt-5">
              <p className="font-normal text-[16px]   leading-[26px] max-sm:text-[10px] max-sm:leading-[15px]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, quisquam ipsum. Asperiores illum facilis deleniti laboriosam sequi repellat. Dolorem harum dicta tempore ut voluptatibus laboriosam molestiae nihil, quis voluptatum natus.
              </p>
              <p className="font-normal text-[16px]   leading-[26px] max-sm:text-[10px] max-sm:leading-[15px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit cumque illo eligendi esse necessitatibus numquam facilis ducimus quibusdam hic quaerat consequatur saepe quod, provident incidunt modi quasi nihil. Molestiae, nobis?
              </p>
              <p className="font-normal text-[16px]   leading-[26px] max-sm:text-[10px] max-sm:leading-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quis maiores aliquam, quam cumque doloribus blanditiis sunt beatae soluta assumenda ea quaerat odit in atque repellat tempora est numquam dicta?
              </p>
              
            </div>
            <div className="max-sm:order-first md:order-first pl-36  max-sm:m-auto">
              <div className="relative ">
                <Image
                  className="relative left-[50px] max-sm:h-[216px] max-sm:w-[153.3px] max-sm:left-[-53px]"
                  src={AboutPage_2}
                  width={391}
                  height={552}
                  alt="Aboue-page_2"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutSection;
