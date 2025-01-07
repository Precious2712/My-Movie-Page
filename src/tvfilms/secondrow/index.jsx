import { useState } from "react";
import { movies } from "./africa";
import { adventures } from "./action";
import { KidShow } from "./kid";

const MadeInAfrica = () => {
    const [hover, setHover] = useState();
    const [present, setPresent] = useState();
    const [bold, setBold] = useState();

    const handleIn = () => {
        setHover(true);
    }

    const handleLeave = () => {
        setHover(false);
    };

    const handleInside = () => {
        setPresent(true);
    };

    const handleOutside = () => {
        setPresent(false);
    };

    const handleMoveIn = () => {
        setBold(true);
    };

    const handleMoveOut = () => {
        setBold(false);
    };


    return (
        <div className="w-[91%] sm:w-[96%] m-auto">

            <div className="mt-16">
                <div className="flex gap-7">
                    <div onMouseLeave={handleLeave} onMouseEnter={handleIn}>
                        <p className="text-white text-[20px]">Made in Africa</p>
                    </div>
                    <div className={`flex gap-2 mt-[5px] ${hover ? 'block' : 'hidden'}`}>
                        <a className="text-white" href="">Explore more</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-right text-red-800 mt-[7.5px]" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                </div>
                <div className="flex gap-3 overflow-x-auto w-full no-scrollbar">
                    {
                        movies.map((el) => {
                            return (
                                <div className="mt-3 min-w-[250px] sm:min-w-[250px] md:min-w-[290px] lg:min-w-[313px]" key={el.id}>
                                    <img className="w-full" src={el.africa} alt="" />
                                    <p className="text-center text-white mt-1">{el.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="mt-16">
                <div className="flex gap-7">
                    <div onMouseLeave={handleOutside} onMouseEnter={handleInside}>
                        <p className="text-white text-[20px]">Action & Adventure Movies</p>
                    </div>
                    <div className={`flex gap-2 mt-[5px] ${present ? 'block' : 'hidden'}`}>
                        <a className="text-white" href="">Explore more</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-right text-red-800 mt-[7.5px]" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                </div>
                <div className="flex gap-3 overflow-x-auto w-full no-scrollbar">
                    {
                        adventures.map((el) => {
                            return (
                                <div className="mt-3 min-w-[250px] sm:min-w-[250px] md:min-w-[290px] lg:min-w-[313px]" key={el.id}>
                                    <img className="w-full" src={el.actions} alt="" />
                                    <p className="text-center text-white mt-1">{el.titles}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="mt-16">
                <div className="flex gap-7">
                    <div onMouseLeave={handleMoveOut} onMouseEnter={handleMoveIn}>
                        <p className="text-white text-[20px]">Kids & Family TV</p>
                    </div>
                    <div className={`flex gap-2 mt-[5px] ${bold ? 'block' : 'hidden'}`}>
                        <a className="text-white" href="">Explore more</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-right text-red-800 mt-[7.5px]" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                </div>
                <div className="flex gap-3 overflow-x-auto w-full no-scrollbar">
                    {
                        KidShow.map((el) => {
                            return (
                                <div className="mt-3 min-w-[250px] sm:min-w-[250px] md:min-w-[290px] lg:min-w-[313px]" key={el.id}>
                                    <img className="w-full" src={el.album} alt="" />
                                    <p className="text-center text-white mt-1">{el.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
};

export default MadeInAfrica;