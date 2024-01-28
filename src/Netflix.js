import React, { useState } from "react";

function Netflix() {
  const [IsTrue1, setIsTrue1] = useState(false);
  const [IsTrue2, setIsTrue2] = useState(false);
  const [IsTrue3, setIsTrue3] = useState(false);
  const [IsTrue4, setIsTrue4] = useState(false);
  const [IsTrue5, setIsTrue5] = useState(false);
  const [IsTrue6, setIsTrue6] = useState(false);

  let vlu = false;

  const mystyle = {
    scale: "1",
    h: "100%",
    transition: "0.5s ",
  };
  const mystyle2 = {
    scale: "0",
    height: "0px",
    transition: "0.5s",
  };
  const rotate = {
    transform: "rotate(45deg)",
  };
  const notrotate = {};

  return (
    <>
      <section
        className="max-w-[100%]  h-[100%] bg-center "
        style={{
          backgroundImage: `url('https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg')`,
        }}
      >
        <div className="w-[100%] h-[100%] bg-black bg-opacity-50">
          <header className="max-w-[1170px] mx-auto">
            <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px] items-center">
              <figure>
                <img
                  src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
                  className="w-[148px]"
                  alt=""
                ></img>
              </figure>

              <div className="flex justify-end gap-[10px]">
                <div className="relative">
                  <select
                    name=""
                    className="bg-[black] text-white border-[1px] boder-[white] p-[5px_20px] rounded-[5px]"
                  >
                    <option value="">English</option>
                    <option value="">Hindi</option>
                  </select>
                </div>
                <button className="bg-[red] px-[10px] rounded-[5px] text-white">
                  Sign IN
                </button>
              </div>
            </div>
          </header>

          <div className="max-w-[1170px] mx-auto sm:py-[150px] py-[50px] text-center text-white">
            <h1 className="sm:text-[50px] text-[35px] font-bold">
              Unlimited movies, Shows and more
            </h1>
            <h4 className="text-[20px] py-[15px]">
              Watch anywhere. Cancel anytime.
            </h4>

            <p className="text-[20px]">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>

            <div className="max-w-[700px] mx-auto mt-[30px] sm:px-[10px] px-[40px] ">
              <form
                action=""
                className="grid  gap-[20px] sm:grid-cols-[70%_auto] grid-cols-1"
              >
                <input
                  type="text"
                  className="border-[1px] pl-[20px] h-[50px] border-[#ccc] bg-[transparent]"
                  placeholder="Email Address"
                />

                <button className="bg-red-500 rounded-[5px] text-white hover:bg-[rgb(193,17,25)] duration-300 text-[20px] sm:py-0 py-4">
                  Get started >
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[100%] bg-[black] border-t-[8px] border-t-[#605d5d] sm:py-[100px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-[15px]">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
            <div className="text-white">
              <h2 className="sm:text-[50px] text-[40px] font-bold">
                Enjoy on your Tv
              </h2>
              <p className="sm:text-[25px] text-[20px] pt-[30px]">
                Watch on smart TVs, PlayStation, Xbox, Chromecast,
                <br /> Apple TV, Blu-ray players and more.
              </p>
            </div>
            <figure className="relative">
              <video
                className="absolute w-[73.4%] left-[13%] bottom-[24.5%]"
                autoPlay
                loop
                muted
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                className="relative z-[1]"
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>

      {/* .......................


 */}

      <section className="w-[100%] bg-[black] border-t-[8px] border-t-[#605d5d] sm:py-[100px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-[15px]">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
            <figure className="relative sm:order-1 order-2">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                className="relative"
                alt=""
              />
              <div className="sm:w-[100%] w-[98%] left-[6px] absolute  border-[1px] border-[#ccc] bottom-[0px] grid grid-cols-[70%_auto] bg-[black] items-center lg:w-[73%] md:w-[80%] rounded-[5px] lg:left-[80px]">
                <div className="grid grid-cols-[25%_auto] gap-[10px] p-[10px] items-center">
                  <img src="strangerthings.jpg" className="" alt="one" />

                  <div>
                    <h3 className="text-white font-bold">Stranger Things</h3>
                    <span className="text-[blue]"> Downloading.....</span>
                  </div>
                </div>

                <div>
                  <img
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                    className=""
                    alt="one"
                  />
                </div>
              </div>
            </figure>

            <div className="text-white sm:order-2 order-1">
              <h2 className="sm:text-[50px] text-[40px] font-bold">
                Download your shows to watch offline
              </h2>
              <p className="sm:text-[25px] text-[20px] pt-[30px]">
                Save your favourites easily and always have something to watch..
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[100%] bg-[black] border-t-[8px] border-t-[#605d5d] sm:py-[100px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-[15px]">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
            <div className="text-white">
              <h2 className="sm:text-[50px] text-[40px] font-bold">
                Watch everywhere
              </h2>
              <p className="sm:text-[25px] text-[20px] pt-[30px]">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </p>
            </div>
            <figure className="relative">
              <video
                className="absolute w-[64%] left-[18%] bottom-[43%]"
                loop
                autoPlay
                muted
              >
                {/* <source src="pexels-phydio-patcho-17809337 (Original).mp4" /> */}
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                  type="video/mp4"
                />
              </video>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                className="relative z-[3]"
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="w-[100%] bg-[black] border-t-[8px] border-t-[#605d5d] sm:py-[100px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-[15px]">
          <div className="grid sm:grid-cols-2 grid-cols-1 items-center">
            <figure className="relative">
              <img
                src="https://occ-0-3213-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d"
                className="relative z-[3]"
                alt=""
              />
            </figure>

            <div className="text-white">
              <h2 className="sm:text-[50px] text-[40px] font-bold">
                Create profiles for kids
              </h2>
              <p className="sm:text-[25px] text-[20px] pt-[30px]">
                Send children on adventures with their favourite characters in a
                space made just for them—free with your membership.
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[100%] bg-[black] border-t-[8px] border-t-[#605d5d] sm:py-[100px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-[15px]">
          <h2 className="sm:text-[50px] text-[40px] font-bold text-white text-center">
            Frequently Asked Questions
          </h2>
          <div className="py-[30px]">
            <div className="bg-[#2d2d2d] md-[15px]">
              <div className="bg-[#2d2d2d] mb-[15px]">
                <div className="p-[10px] text-white text-[30px]  hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer">
                  <div className="flex justify-between">
                    <h3 className="text-white">What is Netflix?</h3>
                    <span
                      onClick={() => {
                        setIsTrue1(!IsTrue1);
                        setIsTrue2(false);
                        setIsTrue3(false);
                        setIsTrue4(false);
                        setIsTrue5(false);
                        setIsTrue6(false);
                      }}
                      style={IsTrue1 ? rotate : notrotate}
                    >
                      +
                    </span>
                  </div>

                  <div
                    className="text-white text-[20px] p-[20px]"
                    style={IsTrue1 ? mystyle : mystyle2}
                  >
                    <p>
                      Netflix is a streaming service that offers a wide variety
                      of award-winning TV shows, movies, anime, documentaries
                      and more – on thousands of internet-connected devices.
                    </p>
                    <p>
                      You can watch as much as you want, whenever you want,
                      without a single ad – all for one low monthly price.
                      There's always something new to discover, and new TV shows
                      and movies are added every week!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2d2d2d] md-[15px]">
              <div className="bg-[#2d2d2d] mb-[15px]">
                <div className="p-[10px] text-white text-[30px]  hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer">
                  <div className="flex justify-between">
                    <h3 className="text-white">How much does Netflix cost?</h3>
                    <span
                      onClick={() => {
                        setIsTrue2(!IsTrue2);
                        setIsTrue1(false);
                        setIsTrue3(false);
                        setIsTrue4(false);
                        setIsTrue5(false);
                        setIsTrue6(false);
                      }}
                      style={IsTrue2 ? rotate : notrotate}
                    >
                      +
                    </span>
                  </div>

                  <div
                    className="text-white text-[20px] p-[20px] "
                    style={IsTrue2 ? mystyle : mystyle2}
                  >
                    <p>
                      {" "}
                      Watch Netflix on your smartphone, tablet, Smart TV,
                      laptop, or streaming device, all for one fixed monthly
                      fee. Plans range from ₹649 to ₹149 a month. No extra
                      costs, no contracts.{" "}
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2d2d2d] md-[15px]">
              <div className="bg-[#2d2d2d] mb-[15px]">
                <div className="p-[10px] text-white text-[30px]  hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer">
                  <div className="flex justify-between">
                    <h3 className="text-white">Where can i watch?</h3>

                    <span
                      onClick={() => {
                        setIsTrue3(!IsTrue3);
                        setIsTrue2(false);
                        setIsTrue1(false);
                        setIsTrue4(false);
                        setIsTrue5(false);
                        setIsTrue6(false);
                      }}
                      style={IsTrue3 ? rotate : notrotate}
                    >
                      +
                    </span>
                  </div>
                  <div
                    className="text-white text-[20px] p-[20px]"
                    style={IsTrue3 ? mystyle : mystyle2}
                  >
                    <p>
                      Watch anywhere, anytime. Sign in with your Netflix account
                      to watch instantly on the web at netflix.com from your
                      personal computer or on any internet-connected device that
                      offers the Netflix app, including smart TVs, smartphones,
                      tablets, streaming media players and game consoles.
                    </p>
                    <p>
                      You can also download your favourite shows with the iOS,
                      Android, or Windows 10 app. Use downloads to watch while
                      you're on the go and without an internet connection. Take
                      Netflix with you anywhere.
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2d2d2d] md-[15px]">
              <div className="bg-[#2d2d2d] mb-[15px]">
                <div className="p-[10px] text-white text-[30px]  hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer">
                  <div className="flex justify-between">
                    <h3 className="text-white flex justify-between">
                      how do i Cancel?
                    </h3>{" "}
                    <span
                      onClick={() => {
                        setIsTrue4(!IsTrue4);
                        setIsTrue2(false);
                        setIsTrue3(false);
                        setIsTrue1(false);
                        setIsTrue5(false);
                        setIsTrue6(false);
                      }}
                      style={IsTrue4 ? rotate : notrotate}
                    >
                      +
                    </span>
                  </div>

                  <div
                    className="text-white text-[20px] p-[20px]"
                    style={IsTrue4 ? mystyle : mystyle2}
                  >
                    <p>
                      Netflix is flexible. There are no annoying contracts and
                      no commitments. You can easily cancel your account online
                      in two clicks. There are no cancellation fees – start or
                      stop your account anytime.
                    </p>
                    <p>
                      Netflix has an extensive library of feature films,
                      documentaries, TV shows, anime, award-winning Netflix
                      originals, and more. Watch as much as you want, anytime
                      you want.
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2d2d2d] md-[15px]">
              <div className="bg-[#2d2d2d] mb-[15px]">
                <div className="p-[10px] text-white text-[30px]  hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer">
                  <div className="flex justify-between">
                    <h3 className="text-white">What can i watch on Netflix?</h3>
                    <span
                      onClick={() => {
                        setIsTrue5(!IsTrue5);
                        setIsTrue2(false);
                        setIsTrue3(false);
                        setIsTrue4(false);
                        setIsTrue1(false);
                        setIsTrue6(false);
                      }}
                      style={IsTrue5 ? rotate : notrotate}
                    >
                      +
                    </span>
                  </div>

                  <div
                    className="text-white text-[20px] p-[20px]"
                    style={IsTrue5 ? mystyle : mystyle2}
                  >
                    <p>
                      The Netflix Kids experience is included in your membership
                      to give parents control while kids enjoy family-friendly
                      TV shows and films in their own space.
                    </p>
                    <p>
                      Kids profiles come with PIN-protected parental controls
                      that let you restrict the maturity rating of content kids
                      can watch and block specific titles you don’t want kids to
                      see.
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2d2d2d] md-[15px]">
              <div className="bg-[#2d2d2d] mb-[15px]">
                <div className="p-[10px] text-white text-[30px]  hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer">
                  <div className="flex justify-between">
                    <h3 className="text-white">Is Netflix good for kids?</h3>

                    <span
                      onClick={() => {
                        setIsTrue6(!IsTrue6);
                        setIsTrue2(false);
                        setIsTrue3(false);
                        setIsTrue4(false);
                        setIsTrue5(false);
                        setIsTrue1(false);
                      }}
                      style={IsTrue6 ? rotate : notrotate}
                    >
                      +
                    </span>
                  </div>

                  <div
                    className="text-white text-[20px] p-[20px]"
                    style={IsTrue6 ? mystyle : mystyle2}
                  >
                    <p>
                      Netflix is a streaming service that offers a wide variety
                      of award-winning TV shows, movies, anime, documentaries
                      and more – on thousands of internet-connected devices.
                    </p>
                    <p>
                      You can watch as much as you want, whenever you want,
                      without a single ad – all for one low monthly price.
                      There's always something new to discover, and new TV shows
                      and movies are added every week!
                    </p>{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-[100%] h-[70px] mx-auto bboder boder-[2px]  items-center flex justify-center mt-[40px]">
              <button className="bg-red-700 rounded-[5px] h-[70px] text-[25px] text-white font-bold hover:bg-[rgb(143,17,25)] duration-300 sm:py-4 px-4  text-center">
                Finish Sign UP >
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-[100%] bg-[black] border-t-[8px] border-t-[#605d5d] sm:py-[60px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-[15px]">
          <h3 className="text-[#ccc] tex-[18px]">
            Questions? Call{" "}
            <a className="underline" href="tel:000-800-919">
              000-800-919
            </a>
          </h3>

          <div className="py-[20px] grid sm:grid-cols-3 grid-cols-1">
            <div>
              <ul className="text-[#ccc]">
                <li className="mb-[10px]">
                  <a className="underline" href="#">
                    Faq
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a className="underline" href="#">
                    Media Center
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a className="underline" href="#">
                    Ways to Watch
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a className="underline" href="#">
                    Cookie Preferences
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a className="underline" href="#">
                    Speed Test
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="text-[#ccc]">
                <li className="mb-[10px]">
                  <a className="underline" href="#">
                    Faq
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a className="underline" href="#">
                    Media Center
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a className="underline" href="#">
                    Ways to Watch
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a className="underline" href="#">
                    Cookie Preferences
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a className="underline" href="#">
                    Speed Test
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className="text-[#ccc]">
                <li className="mb-[10px]">
                  <a className="underline" href="#">
                    Faq
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a className="underline" href="#">
                    Media Center
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a className="underline" href="#">
                    Ways to Watch
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a className="underline" href="#">
                    Cookie Preferences
                  </a>
                </li>
                <li className="mb-[10px]">
                  <a className="underline" href="#">
                    Speed Test
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex pt-[20px] gap-[10px]">
              <div className="relative">
                <select className="bg-[black] text-white border-[1px] boder-[white] p-[5px_20px] rounded-[5px]">
                  <option value="">English</option>
                  <option value="">Hindi</option>
                </select>

                <h3 className="text-[#ccc] pt-[20px]">Netflix India</h3>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Netflix;
