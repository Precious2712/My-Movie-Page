import { useState } from "react";
import { trillers } from "../modules/triller";
import { romance } from "../modules/romance";

const TrillersMovies = () => {
    const [display, setDisplay] = useState();
    const [show, setShow] = useState();

    const handleInside = () => {
        setDisplay(true);
    };

    const handleOutside = () => {
        setDisplay(false);
    };

    const driveIn = () => {
        setShow(true);
    };

    const driveOut = () => {
        setShow(false);
    };

    return (
        <div className="w-[91%] sm:w-[96%] m-auto">

            <div className="mt-16">
                <div className="flex gap-7">
                    <div onMouseLeave={handleOutside} onMouseEnter={handleInside}>
                        <p className="text-white text-[20px]">Romantic Movies</p>
                    </div>
                    <div className={`flex gap-2 mt-[5px] ${display ? 'block' : 'hidden'}`}>
                        <a className="text-white" href="">Explore more</a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chevron-right text-red-800 mt-[7.5px]" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </div>
                </div>
                <div className="flex gap-3 overflow-x-auto w-full no-scrollbar">
                    {
                        romance.map((el) => {
                            return (
                                <div className="mt-3 min-w-[250px] sm:min-w-[250px] md:min-w-[290px] lg:min-w-[313px]" key={el.id}>
                                    <img className="w-full" src={el.gallerys} alt="" />
                                    <p className="text-center text-white mt-1">{el.names}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className="mt-16">
                <div className="flex gap-7">
                    <div onMouseLeave={driveOut} onMouseEnter={driveIn}>
                        <p className="text-white text-[20px]">Triller Movies</p>
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
                        trillers.map((el) => {
                            return (
                                <div className="mt-3 min-w-[250px] sm:min-w-[250px] md:min-w-[290px] lg:min-w-[313px]" key={el.id}>
                                    <img className="w-full" src={el.gallery} alt="" />
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

export default TrillersMovies