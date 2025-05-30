import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {
    const[menu, setMenu] = useState()
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right='0'
    }
        const closeMenu = () => {
        menuRef.current.style.right='0'
    }
    return(
        <div className='navbar'>
            <img src={logo}/>
            <img src={menu_open} onClick={openMenu} className='nav-mob-open'/>

            <ul ref={menuRef} className='nav-menu'>
                <img src={menu_close}  onClick={closeMenu} className='nav-mob-close'/>
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === 'home' ? <img src ={underline}/> : <></> } </li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === 'about' ? <img src ={underline}/> : <></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu("services")}>Services</p></AnchorLink>{menu === 'services' ? <img src ={underline}/> : <></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu === 'portfolio' ? <img src ={underline}/> : <></> }</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === 'contact' ? <img src ={underline}/> : <></> }</li>
            </ul>
            <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact with me</AnchorLink></div>
        </div>
    )
}
export default Navbar;