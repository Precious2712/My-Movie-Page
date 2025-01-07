import NetflixLogo from "@/svg";

const Header = () => {
    return (
        <div className="flex justify-between">
            <div className="mt-6 ml-7">
                <NetflixLogo />
            </div>

            <div className="mt-6 mr-7">
                {/* <button className="bg-red-800 border-2 border-red-600 rounded w-20 h-8 text-white text-sm">Sign In</button> */}
                <button type="button" class="btn btn-danger rounded-[5px] w-20 h-9 text-white bg-[rgb(229,9,20)]">Sign In</button>
            </div>
        </div>
    )
};

export default Header