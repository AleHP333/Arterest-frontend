import React from 'react'
import { useState } from 'react'

export default function PreviewImage2({ file }) {
    const [preview, setPreview] = useState("")

    if (file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreview(reader.result)
        }
    }
    return (
        <div className='flex items-center justify-center'>
            <img src={preview} className="w-52 h-24 rounded-full" alt="" />
        </div>
    )
}