// React utilities
import React, { useState } from "react";
import { Link } from "react-router-dom";
// Mui
import Fab from '@mui/material/Fab';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// Styles
import './Footer.css';

export default function Footer() {

    const [isOpen, setIsOpen] = useState(false);
    const [styleButton, setStyleButton] = useState({
        backgroundColor: ""
    })

    function handlerChange() {
        isOpen ?  closeButton() : openButton();
    }

    function openButton () {
        setIsOpen(true);
        setStyleButton({
            backgroundColor: "white"
        })
    }

    function closeButton () {
        setIsOpen(false);
        setStyleButton({
            backgroundColor: "#e0e0e0"
        })
    }

    const tabsFooter = [
        {
            name: "Contact Us",
            description: "If you want to tell us something",
            link: "/contact"
        },
        {
            name: "About Us",
            description: "You wanna know more about us?",
            link: "/about" 
        },
        {
            name: "FAQ",
            description: "FAQ",
            link: "/faq"
        },
        {
            name: "Terms",
            description: "Terms",
            link: "/terms"
        },
    ]

    return (
        <div className="fixed bottom-8 right-8">
            <Fab 
                style={styleButton}
                onClick={() => handlerChange()}
                aria-label="footer"
            >
                <QuestionMarkIcon />
            </Fab>
            {
                !isOpen ? null :
                <div 
                    className="expandFooter fixed bottom-8 right-28 bg-white border rounded-lg font-semibold text-x1 text-black p-2"
                >
                    {
                        tabsFooter.map((tab, i) => {
                            return (
                                <Link key={i} to={tab.link} onClick={() => closeButton()}>
                                    <div 
                                        className="flex flex-row gap-10 rounded-lg p-2 hover:bg-gray-200"
                                    >
                                        {tab.description}
                                        <ArrowOutwardIcon className="flex ml-auto"/>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
}