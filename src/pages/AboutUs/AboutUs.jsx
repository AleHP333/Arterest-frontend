import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import Footer from '../Footer/Footer';
import './AboutUs.css'
import style from './aboutUs.module.css'

export default function AboutUs() {

  return (
    <div className='containerAboutUs'>
      <div className={style.container}>
        <h1>About Us</h1>
        <div className={style.containerData}>

          <div className="relative flex mt-20">
            <div className="w-60 h-60 bg-indigo-100 mx-auto rounded-full shadow-2xl relative inset-x-0 top-0 -mt-24 flex items-center justify-center">
              <img src='https://res.cloudinary.com/deqxuoyrc/image/upload/v1663251660/logoArterest_fotatr.png'
                className="rounded-full"
                viewBox="0 0 20 20"
                fill="currentColor"
                alt='Arterest'>
              </img>
            </div>
          </div>
          <div>
            <h3 className={style.titleDescription}>
              Your place of interest in digital art
            </h3>
            <p>
              We are an ecommerce dedicated to offer you all the authors and their incredible talent,
              in this growing world of digital art.
              We want to bring you the best titles, so that you have a wide range of choice of the works
              that move and inspire us.
            </p>
            <p>
              In Arterest you can find a wide gallery of images, their detail and the artist's detail,
              leave opinions, reviews, give like to the artworks, create  personalized lists with your
              preferences, buy and be part of a great community of people who are passionate
              about digital art... passionate about digital art... just like us!
            </p>
            <p>
              Don't be left out, the digital art revolution is coming.
            </p>
          </div>
        </div>
      </div>

      <h1 className='PageTitle'>OUR STAFF</h1>
      <hr className='dividerAboutUs' />
      <span className='textAboutUs'>We are a team of web developers that wants to make your dreams come true.</span>
      <div className="grid  md:grid-cols-2">
        <div className='TeamCard'>
          <img className='imageAboutUs' src="https://avatars.githubusercontent.com/u/100927307?v=4" alt="Mariana Stocco" />
          <p>Mariana Stocco</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/MarianaStocco">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/mariana-stocco-36525726/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img className='imageAboutUs' src="https://media-exp1.licdn.com/dms/image/D4E35AQESDPmUf9Yj_g/profile-framedphoto-shrink_800_800/0/1647449636471?e=1663934400&v=beta&t=3m4L7a2LX52DpKy8AohwBfs-5E4etnaIeJYnkr2Fql4" alt="Alejandro Héctor Palavecino" />
          <p>Alejandro Héctor Palavecino</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/AleHP333">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/alejandro-h%C3%A9ctor-palavecino-579b251aa/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img className='imageAboutUs' src="https://avatars.githubusercontent.com/u/98348984?v=4" alt="Martín Araujo" />
          <p>Martín Araujo</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/MNAHEAVY">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/martin-araujo-3ab8a7189/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img className='imageAboutUs' src="https://media-exp1.licdn.com/dms/image/D4D35AQE3WytYuDz8BA/profile-framedphoto-shrink_800_800/0/1657489756513?e=1663934400&v=beta&t=HXfx6vTnXosMbaitiFmbne-HecOUk4XKvUV1QabCECg" alt="Carlos Mamani" />
          <p>Carlos Mamani</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/carlos-mamani-784992238/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img className='imageAboutUs' src="https://avatars.githubusercontent.com/u/101676235?v=4" alt="" />
          <p>Kevin David Gutiérrez</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/David-G18">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kevin-david-%C3%A1lvarez-guti%C3%A9rrez-b4ba13241/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>
        <div className='TeamCard'>
          <img className='imageAboutUs' src="https://avatars.githubusercontent.com/u/96081069?v=4" alt="Anibal Alvarez" />
          <p>Anibal Alvarez</p>
          <div className='IconDiv'>
            <a rel="noreferrer" target="_blank" href="https://github.com/1alvrz">
              <BsGithub className='CardIcon' />
            </a>
            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
              <BsLinkedin className='CardIcon' />
            </a>
          </div>
        </div>

      </div>
      <Footer/>
    </div>
  )
}