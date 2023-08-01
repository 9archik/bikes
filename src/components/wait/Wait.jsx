import s from './Wait.module.scss'

import wait_img from './../../static/images/wait.png'
import { useNavigate } from 'react-router-dom'

export const Wait = () => {
    const navigate = useNavigate()
    return (
        <div className={s.wrapper} onClick={() => navigate("/about")}>
            <div className={s.arrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12H3M3 12L9.75 5M3 12L9.75 19" stroke="#202020" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

            <div className={s.info}>
                <img src={wait_img} alt="Ожидание" />
                <div>Ожидайте пожалуйста</div>
                <div className={s.subtitle}>Сейчас мы опрашиваем сервисы проката. Обычно это занимает не более 3-х минут. Можете закрыть приложение</div>
            </div>


            <div className={s.footer}>
                <div className={s.button}>Закрыть приложение</div>
            </div>
        </div>
    )
}