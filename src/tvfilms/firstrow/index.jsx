import { pictures } from "@/images/img";
import './scroll.css'
import { gallery } from "@/images/pics";
import { useState } from "react";
import { drama } from "@/images/korean";

const Partone = () => {
    const [show, setShow] = useState();

    const [visible, setVisible] = useState();

    const [edible, setEdible] = useState();

    const handleShow = () => {
        setShow(true);
    };

    const handleHides = () => {
        setShow(false);
    };

    const handlePress = () => {
        setVisible(true);
    };

    const handleSet = () => {
        setVisible(false);
    };

    const physical = () => {
        setEdible(true);
    };

    const inVisibility = () => {
        setEdible(false);
    };

    return (
        <div className="w-[91%] sm:w-[96%] m-auto">

            <div className="mt-8">
                <div className="flex gap-7">
                    <div onMouseLeave={handleHides} onMouseEnter={handleShow}>
                        <p className="text-white text-[20px]">Your Next Watch</p>
                    </div>
                    <div className={`flex gap-2 mt-[5px] ${show ? 'block' : 'hidden'}`}>
                        <a className="text-white" href="">Explore more</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-right text-red-800 mt-[7.5px]" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                </div>
                <div className="flex gap-3 overflow-x-auto w-full no-scrollbar">
                    {
                        pictures.map((el) => {
                            return (
                                <div className="mt-3 min-w-[250px] sm:min-w-[250px] md:min-w-[290px] lg:min-w-[313px]" key={el.id}>
                                    <img className="w-full" src={el.pixel} alt="" />
                                    <p className="text-center text-white mt-1">{el.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="mt-16">
                <div className="flex gap-7">
                    <div onMouseLeave={handleSet} onMouseEnter={handlePress}>
                        <p className="text-white text-[20px]">Hollywood Movies</p>
                    </div>
                    <div className={`flex gap-2 mt-[5px] ${visible ? 'block' : 'hidden'}`}>
                        <a className="text-white" href="">Explore more</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-right text-red-800 mt-[7.5px]" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                </div>
                <div className="flex gap-3 overflow-x-auto w-full no-scrollbar">
                    {
                        gallery.map((elem) => {
                            return (
                                <div className="mt-3 min-w-[250px] sm:min-w-[250px] md:min-w-[290px] lg:min-w-[313px]" key={elem.id}>
                                    <img className="w-full" src={elem.photo} alt="" />
                                    <p className="text-center text-white mt-1">{elem.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="mt-16">
                <div className="flex gap-7">
                    <div onMouseLeave={inVisibility} onMouseEnter={physical}>
                        <p className="text-white text-[20px]">K-Dramas</p>
                    </div>
                    <div className={`flex gap-2 mt-[5px] ${edible ? 'block' : 'hidden'}`}>
                        <a className="text-white" href="">Explore more</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-right text-red-800 mt-[7.5px]" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                </div>
                <div className="flex gap-3 overflow-x-auto w-full no-scrollbar">
                    {
                        drama.map((elem) => {
                            return (
                                <div className="mt-3 min-w-[250px] sm:min-w-[250px] md:min-w-[290px] lg:min-w-[313px]" key={elem.id}>
                                    <img className="w-full" src={elem.imagery} alt="" />
                                    <p className="text-center text-white mt-1">{elem.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
};

export default Partone;