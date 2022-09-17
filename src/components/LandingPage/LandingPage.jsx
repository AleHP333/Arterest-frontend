import { React } from "react";
import { Link } from "react-router-dom";
import Footer from "../../pages/Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function LandingPage() {
  return (
    <div class="h-full flex flex-col bg-gray-100">
      <div class="flex flex-row w-full h-3/5 pt-10">
        <div class="w-2/4 flex justify-center align-middle mt-auto mb-auto px-20">
          <p class="w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            expedita, corrupti error in beatae culpa quisquam totam, fugit,
            asperiores tempora labore ut libero cum voluptatum et. Corrupti
            eaque natus veritatis.
          </p>
        </div>
        <div class="w-2/4 flex justify-center align-middle mt-auto mb-auto">aca va una imagen o algo</div>
      </div>
      <div class="w-full  flex justify-center mt-4">
        <button className="rounded-full px-5 py-5 bg-rojo text-white hover:bg-black">
          <Link to="/home" class="font-bold">
            DISCOVER
          </Link>
        </button>
      </div>
      <div class="w-full">
        <Footer class="pt-0" />
      </div>
    </div>
  );
}
