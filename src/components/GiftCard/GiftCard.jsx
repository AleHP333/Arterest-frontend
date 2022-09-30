import React from 'react'
import Logo from '../../assets/logoArterest.png'
import Fondo from '../../assets/fondo.jpg'


export default function GiftCard() {
  return (
    <div className="h-screen gradient-form bg-gray-200 md:h-screen">
      <div className="container py-12 px-6 h-full">
        <div className="flex justify-center items-center flex-wrap h-3/6 g-6 text-black">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="h-full lg:flex lg:flex-wrap g-0">
                <div className="flex mx-0 mb-8 mt-12 p-6 w-auto h-auto m-auto shadow-2xl rounded-xl transition-transform transform hover:scale-110">
                  <img className="relative object-cover w-full h-full rounded-xl" src={Fondo} />
                  <img className="w-14 h-14" src={Logo} />
                  <div className="w-auto h-auto px-8 absolute top-0">
                    <div className="pt-12 pr-6">
                      <div className="flex justify-start">
                        <div className=' pb-8'>
                          <p className="font-semibold text-xl">
                            Gift Card
                          </p><p className="font-medium tracking-wider text-sm">
                            $
                          </p>
                        </div>

                      </div>
                    </div>
                    <div className="pt-12 pr-6">
                      <div className=' pb-8' >
                        <p className="font-light tracking-widest">
                          This is your Gift Card sent from...
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <p className="font-semibold tracking-widest">
                        Use this card for purchasing artworks.
                      </p>
                      <a href='/home' className="font-light">
                        See Artworks Here...
                      </a>
                    </div>
                  </div>
                </div>
                <div class="lg:w-6/12 flex items-center lg:rounded-l-lg bg-transparent text-black" >
                  <div class="text-black px-4 py-6 md:p-12 md:mx-6">
                    {/* <h4 class="text-xl font-semibold mb-6">Fill up the form to give someone a great gift</h4> */}
                    <form action="" >
                      <div className="text-4xl font-bold text-gray-500 m-5"><h1>Gift Art</h1></div>
                      <div className='pt-6'>
                        <label htmlFor="email" className="text-gray-500 mb-4">Send this gift card to</label>
                        <input
                          className="form-control block w-full mt-4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                          id="email"
                          name="email"
                          type="email"
                          placeholder='email'
                        />
                      </div>
                      <div className='pt-6'>
                        <label htmlFor="password" className="text-gray-500">Choose an amount</label>
                        <div class="flex items-center justify-center mb-3">
                          <div class="inline-flex shadow-md pt-6 pb-4 hover:shadow-lg focus:shadow-lg" role="group">
                            <button type="button" class="rounded-l inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out">$ 150</button>
                            <button type="button" class="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out">$ 250</button>
                            <button type="button" class="rounded-r inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase hover:bg-red-700 focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out">$ 350</button>
                          </div>
                        </div>
                      </div>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <button
                          type="submit"
                          className="inline-block px-6 py-2.5  font-medium text-xl leading-tight uppercase  shadow-md  w-full mb-3 border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700">
                          CHECKOUT
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
