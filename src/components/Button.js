import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'


const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large']

function Button({children, type, onClick, btnStyle, btnSize}) {
    const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0]
    const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0]
    return (
        <Link to='/sign-up' className='btn--mobile'>
            <button className={`btn ${checkBtnStyle} ${checkBtnSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}

export default Button;
