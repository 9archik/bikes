import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"

import s from './First.module.scss'
import logo_outer from '../../static/images/logo_outer.png'
import logo_inner from '../../static/images/logo_inner.png'
import logo from '../../static/images/Logo.svg'

export const First = () => {
    const navigate = useNavigate()
    const app = useSelector((state) => state.app.language)


    return (
        <div className={s.wrapper} onClick={() => navigate("/second")} >
            <div className={s.image_div}>
                <img src={logo_outer} alt="Иконка загрузки" />
                {/* <img src={logo_inner} alt="Иконка загрузки" />
                <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="130" height="130" rx="65" fill="#EEEEEE"/>
                </svg>

                <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_37_2672)">
                    <rect x="20" y="20" width="90" height="90" rx="45" fill="white"/>
                    </g>
                    <defs>
                    <filter id="filter0_d_37_2672" x="0" y="0" width="130" height="130" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset/>
                    <feGaussianBlur stdDeviation="10"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0784314 0 0 0 0 0.0784314 0 0 0 0 0.0784314 0 0 0 0.05 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_37_2672"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_37_2672" result="shape"/>
                    </filter>
                    </defs>
                </svg>

                <img src={logo} alt="Иконка загрузки" /> */}
            </div>

            <div className={s.title}>
                <p>Платформа для аренды байков</p>
                <p>Сервис с прозрачной системой выбора</p>
            </div>
        </div>
    )
}