import { Link } from 'react-router-dom'

import s from './First.module.scss'
import firstscreen_image from '../../static/images/firstscreen.png'

export const First = () => {
    return (
        <Link className={s.wrapper} to="/second">
            <div className={s.image_div}>
                <img src={firstscreen_image} alt="Иконка загрузки" />
            </div>

            <div className={s.title}>
                <p>Платформа для аренды байков</p>
                <p>Сервис с прозрачной системой выбора</p>
            </div>
        </Link>
    )
}