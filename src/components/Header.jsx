import React, { useEffect, useState } from 'react'

export const Header = () => {
    const [show, setShow] = useState(false)
    const [header, setHeader] = useState(0)
    const myMenuFunction = () => {
        return setShow(!show)
    }
    const boxShadow = { boxShadow: "0 1px 6px rgba(0, 0, 0, 0.1)", height: "70px", lineHeight: "70px" }
    const notBoxShadow = { boxShadow: "none", height: "90px", lineHeight: "90px" }
    useEffect(() => {
        const handleScroll = () => {
            setHeader(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')

        const scrollActive = () => {
            const scrollY = window.scrollY;

            sections.forEach(current => {
                const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 50,
                    sectionId = current.getAttribute('id')

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
                } else {
                    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
                }
            })
        }

        window.addEventListener('scroll', scrollActive)
        return () => {
            window.removeEventListener('scroll', scrollActive)
        }
    }, [])

    return (
        <>
            <nav id="header" style={header > 50 ? boxShadow : notBoxShadow}>
                <div className="nav-logo">
                    <p className="nav-name">Gohel</p>
                    <span>.</span>
                </div>
                <div className={show ? "responsive nav-menu" : "nav-menu"} id="myNavMenu">
                    <ul className="nav_menu_list">
                        <li className="nav_list">
                            <a href="#home" className="nav-link active-link">Home</a>
                            <div className="circle"></div>
                        </li>
                        <li className="nav_list">
                            <a href="#about" className="nav-link">About</a>
                            <div className="circle"></div>
                        </li>
                        <li className="nav_list">
                            <a href="#projects" className="nav-link">Projects</a>
                            <div className="circle"></div>
                        </li>
                        <li className="nav_list">
                            <a href="#contact" className="nav-link">Contact</a>
                            <div className="circle"></div>
                        </li>
                    </ul>
                </div>
                <div className="nav-button">
                    <button className="btn"> <a className="link" href="assets/CV/Ramji Gohel.pdf" download>Download CV <i
                        className="uil uil-file-alt"></i></a></button>
                </div>
                <div className="nav-menu-btn">
                    <i className="uil uil-bars" onClick={myMenuFunction}></i>
                </div>
            </nav>
        </>
    )
}
