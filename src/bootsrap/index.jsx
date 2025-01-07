import './bootcamp.css'
import { useState } from "react";

const BootStrapPage = () => {
  const [modal, setModalOpen] = useState(false);
  const [rotates, setRotate] = useState(false);

  const [modalOne, setModalOpenOne] = useState(false);
  const [rotattion, setRotation] = useState(false);

  const [ball, setBall] = useState(false);
  const [rotating, setRoating] = useState(false);

  const [modalTwo, setModalTwo] = useState(false);
  const [mutiply, setMultiply] = useState(false);

  const [openButton, setOpenButton] = useState(false);
  const [openButtonTwo, setOpenButtonTwo] = useState(false);

  const [showingModal, setShowingModal] = useState(false);
  const [openRotate, setOpenRotate] = useState(false);

  function showModal() {
    setModalOpen(!modal);
    setRotate(!rotates);
  }
  // console.log(modal, 'is not false');

  function showModalOne() {
    setModalOpenOne(!modalOne);
    setRotation(!rotattion);
  }

  function openModal() {
    setBall(!ball);
    setRoating(!rotating);
  }

  function openModalTwo() {
    setModalTwo(!modalTwo);
    setMultiply(!mutiply);
  }

  function handleClickOpen() {
    setOpenButton(!openButton);
    setOpenButtonTwo(!openButtonTwo);
  }

  function handleShowModal() {
    setShowingModal(!showingModal);
    setOpenRotate(!openRotate);
  }

  return (
    <div>
      <div className='bg-black pb-16'>
        <div className=''>
          <h1 className='font-bold text-white text-center text-3xl pt-16 sm:text-5xl'>Frequently Asked Questions</h1>

          <div className='mt-12'>
            <div className='my-2 '>
              <div onClick={showModal} className='flex items-center justify-between bg-[rgb(45,45,45)] h-20 w-[95%] m-auto hover:bg-[rgb(63,63,63)]'>
                <h1 className='font-bold text-white text-1xl ml-8 sm:text-2xl'>What is Netflix</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-plus-lg cursor-pointer fill-white h-8 w-8 mr-8 sm:w-10 h-10 ${rotates ? 'rotate-45 ' : 'rotate-0'}`} viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2z" />
                </svg>
              </div>

              <div className={`bg-[rgb(45,45,45)] ${modal ? 'block' : 'hidden'} w-[95%] m-auto mt-1 pt-3 pb-3`}>
                <p className='text-white text-[18px] ml-8 sm:text-[24px]'>
                  Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, <br />
                  documentaries, and more on thousands of internet-connected devices. <br />
                  You can watch as much as you want, whenever you want without a single commercial – all for one low <br />
                  monthly price. There's always something new to discover and new TV shows and movies are added <br />
                  every week!
                </p>
              </div>
            </div>

            <div>
              <div onClick={showModalOne} className='flex items-center justify-between bg-[rgb(45,45,45)] h-20 w-[95%] m-auto hover:bg-[rgb(63,63,63)]'>
                <h1 className='font-bold text-white text-1xl ml-8 sm:text-2xl'>How much does Netflix cost</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-plus-lg fill-white h-8 w-8 sm:w-10 h-10 mr-8 ${rotattion ? 'rotate-45' : 'rotate-0'}`} viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                </svg>
              </div>

              <div className={`bg-[rgb(45,45,45)] ${modalOne ? 'block' : 'hidden'} w-[95%] m-auto mt-1 pt-3 pb-3`}>
                <p className='text-white text-[18px] ml-8 sm:text-[24px]'>
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed <br />
                  monthly fee. Plans range from ₦1,600 to ₦5,000 a month. No extra costs, no contracts.
                </p>
              </div>
            </div>

            <div>
              <div onClick={openModal} className='flex items-center justify-between bg-[rgb(45,45,45)] h-20 w-[95%] m-auto my-2 hover:bg-[rgb(63,63,63)]'>
                <h1 className='font-bold text-white text-1xl ml-8 sm:text-2xl'>Where can I watch?</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-plus-lg fill-white h-8 w-8 sm:w-10 h-10 mr-8 ${rotating ? 'rotate-45' : 'rotate-0'}`} viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                </svg>
              </div>

              <div className={`bg-[rgb(45,45,45)] ${ball ? 'block' : 'hidden'} w-[95%] m-auto mt-1 pt-3 pb-3`}>
                <p className='text-white text-[18px] ml-8 sm:text-[24px]'>
                  Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com <br />
                  from your personal computer or on any internet-connected device that offers the Netflix app, including <br />
                  smart TVs, smartphones, tablets, streaming media players and game consoles.
                </p>

                <p className='text-white text-[18px] ml-8 mt-5 sm:text-[24px]'>
                  You can also download your favorite shows with the iOS or Android app. Use downloads to watch while <br />
                  you're on the go and without an internet connection. Take Netflix with you anywhere.
                </p>
              </div>
            </div>

            <div className='my-2'>
              <div className='flex items-center justify-between bg-[rgb(45,45,45)] h-20 w-[95%] m-auto hover:bg-[rgb(63,63,63)]' onClick={openModalTwo}>
                <h1 className='font-bold text-white text-1xl ml-8 sm:text-2xl'>How do I cancel?</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class={`bi bi-plus-lg fill-white h-8 w-8 sm:w-10 h-10 mr-8 ${mutiply ? 'rotate-45' : 'rotate-0'}`} viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                </svg>
              </div>

              <div className={`bg-[rgb(45,45,45)] ${modalTwo ? 'block' : 'hidden'} w-[95%] m-auto mt-1 pt-3 pb-3`}>
                <p className='text-white text-[18px] ml-8 sm:text-[24px]'>
                  Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your <br />
                  account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                </p>
              </div>
            </div>

            <div className='my-2'>
              <div className='flex items-center justify-between bg-[rgb(45,45,45)] h-20 w-[95%] m-auto hover:bg-[rgb(63,63,63)]' onClick={handleClickOpen}>
                <h1 className='font-bold text-white text-1xl ml-8 sm:text-2xl'>What can I watch on Netflix</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-plus-lg fill-white h-8 w-8 sm:w-10 h-10 mr-8 ${openButtonTwo ? 'rotate-45' : 'rotate-0'}`} viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                </svg>
              </div>

              <div className={`bg-[rgb(45,45,45)] w-[95%] m-auto mt-1 pt-3 pb-3 ${openButton ? 'block' : 'hidden'} `}>
                <p className='text-white text-[18px] ml-8 sm:text-[24px]'>
                  Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix <br />
                  originals, and more. Watch as much as you want, anytime you want.
                </p>
              </div>
            </div>

            <div>
              <div onClick={handleShowModal} className='flex items-center justify-between bg-[rgb(45,45,45)] h-20 w-[95%] m-auto hover:bg-[rgb(63,63,63)]'>
                <h1 className='font-bold text-white text-1xl ml-8 sm:text-2xl'>Is Netflix good for kids</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class={`bi bi-plus-lg fill-white h-8 w-8 sm:w-10 h-10 mr-8 ${openRotate ? 'rotate-45' : 'rotate-0'} `} viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                </svg>
              </div>

              <div className={`bg-[rgb(45,45,45)] w-[95%] m-auto mt-1 pt-3 pb-3 ${showingModal ? 'block' : 'hidden'}`}>
                <p className='text-white text-[18px] ml-8 sm:text-[24px]'>
                  The Netflix Kids experience is included in your membership to give parents control while kids enjoy <br />
                  family-friendly TV shows and movies in their own space. <br />
                </p>

                <p className='text-white text-[18px] ml-8 mt-5 sm:text-[24px]'>
                  Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content <br />
                  kids can watch and block specific titles you don’t want kids to see.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className='text-white text-[16px] text-center mt-5 ml-8 sm:text-[20px] '>Ready to watch? Enter your email to create or restart your membership.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <div className="field-box w-full sm:w-auto flex flex-col items-center">
              <input
                className="w-[75%] sm:w-80 h-14 border rounded bg-black opacity-60 font-bold text-white pl-3 py-1 placeholder-transparent"
                type="text"
                placeholder=" "
                id="email"
              />
              <label htmlFor="email" className="float-labeling">Email address</label>
            </div>

            <div className="w-full sm:w-auto flex justify-center">
              <button
                type="button"
                className="w-[40%] sm:w-52 h-14 bg-red-600 rounded font-bold text-white text-2xl"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

      </div>
      <hr className="border-black w-full h-1.5 border-t-2 bg-black opacity-80 " />
    </div>
  );
};

export default BootStrapPage;
