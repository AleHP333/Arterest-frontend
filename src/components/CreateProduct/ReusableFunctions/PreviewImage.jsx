import React from 'react'
import { useState } from 'react'

export default function PreviewImage({ file }) {
    const [preview, setPreview] = useState("")

    if (file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setPreview(reader.result)
        }
    }
    return (
        <div>
            <img src={preview} style={{width: "300px"}} alt="" />
        </div>
    )
}