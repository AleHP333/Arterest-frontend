import { React } from "react";
import { Link } from "react-router-dom";
import Footer from "../../pages/Footer/Footer";
// import NavBar from "../NavBar/NavBar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import i1 from '../../assets/imagen1.jpeg'
import i2 from '../../assets/imagen2.jpeg'
import i3 from '../../assets/imagen3.jpeg'
import Logo from '../../pages/Assets/ArterestRed.png'


export default function LandingPage() {
  return (
    <>
      {/* <NavBar transparent /> */}
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1614812512458-29a3a834f5d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    {/* <img src={Logo} alt='arterest logo'/> */}
                    <h1 className="text-white font-semibold text-5xl">
                      Art made social
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                      Whether art is your passion or profession, you've come to the right place.
                    </p>
                  </div>
                </div>
                <div class="w-full  flex justify-center mt-4 mb-4">
                   <button className="rounded-full px-5 py-5 bg-black text-white hover:bg-rojo">
                     <Link to="/home" class="font-bold">
                       DISCOVER
                      </Link>
                  </button>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                  <Carousel autoPlay className="grid text-center " >
                    <div >
                      <img alt="" src={i1} />
                   </div>
                   <div >
                      <img alt="" src={i2} />
                    </div>
                    <div >
                      <img alt="" src={i3} />
                    </div>
                 </Carousel>
                {/* <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1594136976553-38699ae9047c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80"
                /> */}
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl font-semibold">
                    All artwork in your hands
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  all kinds of artwork in digital format for you to use and enjoy in any way you want.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-red-600 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">
                            Digital Art
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-red-600 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Paintings</h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-red-600 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-gray-600">Photography</h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// export default function LandingPage() {
//   return (
//     <div className='items-center justify-center' >
//       <div className="p-2">
//         <div className="p-2 bg-transparent shadow hover:shadow-lg">
//           <div className="grid text-center order-last md:order-first mt-10 md:mt-0">
//             <img className="object-fill h-20 w-33 mx-auto  relative inset-x-0 top-0 pb-5 rounded flex items-center justify-center " src={Logo} alt="arterest" />
//             <div className="grid  md:grid-cols-1">
//               <div className="grid pb-4 pt-0
//                 text-center order-last md:order-first mt-5 md:mt-0">
//                 <p className=" font-bold grid pb-4 pt-0
//                 text-center order-last md:order-first mt-5 md:mt-0">
//                   Art made social.
//                   Whether art is your passion or profession, you've come to the right place.
//                 </p>
//               </div>
//               <div>
//               </div>
//             </div>
//             <div class="w-full  flex justify-center mt-4 mb-4">
//         <button className="rounded-full px-5 py-5 bg-black text-white hover:bg-rojo">
//           <Link to="/home" class="font-bold">
//             DISCOVER
//           </Link>
//         </button>
//       </div>
//       {/* <div> */}
//             <div className="p-2 object-scale-down h-2/4 w-2/4  justify-center pb-3 mx-auto shadow-2xl relative inset-x-0 mt-30 rounded ">
//               <Carousel autoPlay className="grid text-center " >
//                 <div >
//                   <img alt="" src={i1} />

//                 </div>
//                 <div >
//                   <img alt="" src={i2} />

//                 </div>
//                 <div >
//                   <img alt="" src={i3} />

//                 </div>
//               </Carousel>
//             </div>
//           {/* </div> */}

//         </div>
//       </div>
      
//         <Footer class="pt-0" />
//       </div>
//     </div>
//   );
// }
