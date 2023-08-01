import { Footer } from '../footer/Footer'
import s from './Support.module.scss'
import logo from './../../static/images/firsticonsvg.svg'

import { useNavigate } from 'react-router-dom'

export const Support = () => {
    const navigate = useNavigate()
    return (
        <>
        <div className={s.wrapper} onClick={() => navigate("/")}>
            <div className={s.info}>
                <img src={logo} alt="Ожидание" />
                <div>Перейти в чат с поддержкой</div>
                <div className={s.subtitle}>Вы в любой момент можете вернуться в приложение, чтобы продолжить</div>
            </div>


            <div className={s.bottom}>
                <div className={s.button}>Написать менеджеру</div>
            </div>
        </div>
        <Footer />
        </>
    )
}