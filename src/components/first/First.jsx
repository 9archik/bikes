import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"

import s from './First.module.scss'
import logo_outer from '../../static/images/logo_outer.png'
import logo_inner from '../../static/images/logo_inner.png'
import logo from '../../static/images/Logo.svg'

export const First = () => {
    const navigate = useNavigate()

    return (
        <div className={s.wrapper} onClick={() => navigate("/second")} >
            <div className={s.image_div}>
                <img src={logo_outer} alt="Иконка загрузки" />
            </div>

            <div className={s.title}>
                <p>Платформа для аренды байков</p>
                <p>Сервис с прозрачной системой выбора</p>
            </div>
        </div>
    )
}