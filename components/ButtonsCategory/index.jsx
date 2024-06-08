import Link from "next/link";

const ButtonsCategory = (props) => {
    const buttonlist = [{name : 'Headphone' , link : '/bathroom'}, {name : 'Earbuds' , link : '/toilet'}, {name : 'Speaker' ,link : '/kitchen'}, {name : 'All' ,link : '/products'}]

    return (
        <div className="flex justify-evenly">
            {buttonlist.map((item, index) => (
                item.name !== props.title && <Link key={index} href={item.link} className=" px-[90px] py-[10px] bg-[#facc15] rounded">{item.name}</Link>
            ))}
        </div>
    )
}

export default ButtonsCategory;