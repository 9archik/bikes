import { useNavigate } from 'react-router-dom'

import s from './First.module.scss'
import firstscreen_image from '../../static/images/firstscreen.png'

export const First = () => {
    const navigate = useNavigate()
    return (
        <div className={s.wrapper} onClick={() => navigate("/second")} >
            <div className={s.image_div}>
                <img src={firstscreen_image} alt="Иконка загрузки" />
            </div>

            <div className={s.title}>
                <p>Платформа для аренды байков</p>
                <p>Сервис с прозрачной системой выбора</p>
            </div>
        </div>
    )
}