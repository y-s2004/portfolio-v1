import React, { useEffect, useState } from 'react'
import '../css/Header.css'
import HeaderLink from './HeaderLink'
import iconImage from '../images/IMG_0380.GIF'

export default function Header() {
    const [showMenu, setShowMenu] = useState(false)

    useEffect(() => {
        document.body.style.overflow = showMenu ? 'hidden' : 'auto'
    }, [showMenu])

    return (
        <>
            {showMenu && (
                <div className={`menu-overlay ${showMenu ? 'show' : ''}`}>
                    <img src={iconImage} alt='Logo' className='menu-logo' />
                    <HeaderLink href='/' onClick={() => setShowMenu(false)}>Home</HeaderLink>
                    <HeaderLink href='/About' onClick={() => setShowMenu(false)}>About</HeaderLink>
                    <HeaderLink href='/contact' onClick={() => setShowMenu(false)}>Contact</HeaderLink>
                </div>
            )}

            <div className='header-controls'>
                <button onClick={() => setShowMenu(!showMenu)}>
                    {showMenu ? '✕' : '☰'}
                </button>
            </div>
        </>
    )
}