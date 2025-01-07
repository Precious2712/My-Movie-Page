import page from '@/assets/Netflix.jp.jpg';
import Header from './header';
import Wordings from './words';

const Allunits = () => {
    return (
        <div className='w-full overflow-x-hidden '>
            <div
                className='min-h-[95vh] bg-cover bg-gradient-to-bl '
                style={{
                    backgroundImage: `linear-gradient(to bottom left, rgba(0, 0, 0, 0.5) 80%, rgba(0, 0, 0, 0.5)), url(${page})`
                }}
            >
                {/* Your content goes here */}

                <Header />

                <Wordings />
            </div>
            <hr className="border-black w-full h-1.5 border-t-2 bg-black opacity-80 " />
        </div>

    );
};

export default Allunits;
