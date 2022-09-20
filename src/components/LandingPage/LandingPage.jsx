import { React } from "react";
import { Link } from "react-router-dom";
import Footer from "../../pages/Footer/Footer";
import NavBar from "../NavBar/NavBar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import i1 from '../../assets/imagen1.jpeg'
import i2 from '../../assets/imagen2.jpeg'
import i3 from '../../assets/imagen3.jpeg'
import Logo from '../../pages/Assets/ArterestRed.png'

export default function LandingPage() {
  return (
    <div className='items-center justify-center' >
      <div className="p-2">
        <div className="p-2 bg-transparent shadow hover:shadow-lg">
          <div className="grid text-center order-last md:order-first mt-10 md:mt-0">
            <img className="object-fill h-20 w-33 mx-auto  relative inset-x-0 top-0 pb-5 rounded flex items-center justify-center " src={Logo} alt="arterest" />
            <div className="grid  md:grid-cols-1">
              <div className="grid pb-4 pt-0
                text-center order-last md:order-first mt-5 md:mt-0">
                <p className=" font-bold grid pb-4 pt-0
                text-center order-last md:order-first mt-5 md:mt-0">
                  Art made social.
                  Whether art is your passion or profession, you've come to the right place.
                </p>
              </div>
              <div>
              </div>
            </div>
            <div class="w-full  flex justify-center mt-4 mb-4">
        <button className="rounded-full px-5 py-5 bg-black text-white hover:bg-rojo">
          <Link to="/home" class="font-bold">
            DISCOVER
          </Link>
        </button>
      </div>
      {/* <div> */}
            <div className="p-2 object-scale-down h-2/4 w-2/4  justify-center pb-3 mx-auto shadow-2xl relative inset-x-0 mt-30 rounded ">
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
            </div>
          {/* </div> */}

        </div>
      </div>
      
        <Footer class="pt-0" />
      </div>
    </div>
  );
}
