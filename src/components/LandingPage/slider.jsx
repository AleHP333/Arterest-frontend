import React, {useEffect, useRef, useState} from "react";
import animation from './animation.css'
import {AiOutlineVerticalRight, AiOutlineVerticalLeft} from 'react-icons/ai'

const featuredProducts = [
    'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/06/27/16563243629196.jpg',
    'https://los40es00.epimg.net/los40/imagenes/2019/10/25/los40classic/1572017061_846745_1572017658_rrss_normal.jpg',
    'https://indiehoy.com/wp-content/uploads/2020/10/arctic-monkeys.jpg'
]

let count = 0;

let slideInterval;

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const slideRef = useRef()

    const removeAnimation = () => {
        slideRef.current.classList.remove('fade-anim')
    }
    
    useEffect(() => {
        slideRef.current.addEventListener('animationend', removeAnimation)

        slideRef.current.addEventListener('mouseenter', pauseSlider)
        slideRef.current.addEventListener('mouseleave', startSlider)

        startSlider()
    }, [])

    const startSlider = () => {
        slideInterval = setInterval(() => {
            handleNext();
        }, 4000)
    }

    const pauseSlider = () => {
        clearInterval(slideInterval)
    }

    const handleNext = () => {
        count = (count + 1) % featuredProducts.length;
        setCurrentIndex(count)
        slideRef.current.classList.add('fade-anim')
    }

    const handlePrev = () => {
        const productsLength = featuredProducts.length;
        count = (currentIndex + productsLength - 1) % productsLength
        setCurrentIndex(count)
        slideRef.current.classList.add('fade-anim')
    }

    return (
        <div ref={slideRef} class='w-full select-none relative'>
            <div class='max-w-full max-h-full'>
                <img class='h-10'src={featuredProducts[currentIndex]} alt='' />
            </div>
            <div class='absolute w-full top-1/2 transform -translate-y-1/2  px-3 flex justify-between'>
                <button onClick={handlePrev}><AiOutlineVerticalRight size={30}/></button>
                <button onClick={handleNext}><AiOutlineVerticalLeft size={30}/></button>
            </div>
        </div>
    )
}