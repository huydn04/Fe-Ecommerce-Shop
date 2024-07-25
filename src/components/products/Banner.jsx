import React from "react";

import { LuHome } from "react-icons/lu";


const Banner = () => {
    const [active, setActive] = useState("Cải thìa");
    const useNavbar = [
        {
            name: "",
            icon: LuHome,
            link: "/home-pages",
        },
        {
            name: "Danh mục",
            icon: '',
            link: "/home-pages",
        },
        {
            name: "",
            icon: '',
            link: "/home-pages",
        },
        {
            name: "Cải thìa",
            icon: '',
            link: "/menu-detail",
        },

    ]

    return (
        <div className='w-screen h-[100px] relative'>
            <Menu>
                {useNavbar.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <Menu.Item key={index} className="relative text-gray-500 ">
                            <Link
                                to={item.link}
                                className={`btn flex  items-center justify-start font-semibold  rounded-none shadow-white hover:bg-gray-100 hover:text-primary hover:border-l-4 hover:border-y-0 hover:border-r-0 hover:border-solid hover:border-[#00B207] hover:font-bold  ${active === item.name
                                        ? "font-bold text-primary hover:border-none bg-gray-200"
                                        : "bg-transparent font-light "
                                    } relative pl-4`}
                                onClick={() => setActive(item.name)}
                            >
                                <div
                                    className={`${active === item.name
                                            ? "absolute left-0 top-0 h-full w-1 bg-primary"
                                            : ""
                                        }`}
                                />
                                <Icon className={"ml-2 mr-2 h-5 w-5"} />
                                {item.name}
                            </Link>
                        </Menu.Item>
                    );
                })}
                {/* <img className='w-full' src={Banner} alt="" />
            <div className='absolute bottom-10 left-40 flex flex-row justify-center items-center gap-2 text-gray-300 text-md'>
                <ul><li><a className='' href=""><LuHome className='mt-[1px] w-[22px] h-[22px] hover:text-green-500' /></a></li></ul>
                <HiMiniChevronRight className='mt-[5px]' />
                <ul><li><a className='hover:text-green-500' href="">Danh mục</a></li></ul>
                <HiMiniChevronRight className='mt-[5px]' />
                <ul><li><a className='hover:text-green-500' href="">Rau củ quả</a></li></ul>
                <HiMiniChevronRight className='mt-[5px]' />
                <ul><li><a className='hover:text-green-500' href="">Cải thìa</a></li></ul>
            </div> */}
            </Menu>
        </div>
    )
}