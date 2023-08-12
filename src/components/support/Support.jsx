import { useSelector } from "react-redux"
import { Footer } from '../footer/Footer'
import s from './Support.module.scss'
import support_logo from './../../static/images/support_logo.png'

import { useNavigate } from 'react-router-dom'

export const Support = () => {
    const language = useSelector((state) => state.app.language)
    const navigate = useNavigate()

    function setLocale() {
        const loctext = {}
        if (language == "ru") {
            loctext.title = "Перейти в чат с поддержкой"
            loctext.subtitle = "Вы в любой момент можете вернуться в приложение, чтобы продолжить"
            loctext.button = "Написать менеджеру"
        } else if (language == "en") {
            loctext.title = "Go to chat with support"
            loctext.subtitle = "You can return to the app at any time to continue"
            loctext.button = "Write to the manager"
        }
        return loctext
    }

    const text = setLocale()

    return (
        <>
        <div className={s.wrapper} onClick={() => navigate("/")}>
            <div className={s.info}>
                {/* <img src={support_logo} alt="Ожидание" /> */}
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="#3A59A9"/>
                <path d="M40.319 19C30.7526 19 23 26.7918 23 36.3996C23 46.0074 30.7526 53.7992 40.319 53.7992V61.0303L52.159 49.0962C55.5312 45.9228 57.6381 41.408 57.6381 36.3996C57.6389 26.7918 49.8831 19 40.319 19ZM40.2603 41.7494C38.879 41.7494 37.6184 41.2222 36.669 40.3561H36.6666L36.3451 40.0355L36.3038 39.9916L32.6586 36.3812H34.917C34.917 33.4169 37.3096 31.0139 40.2595 31.0139C43.2125 31.0139 45.6044 33.4176 45.6044 36.3812C45.6052 39.3456 43.2133 41.7494 40.2603 41.7494Z" fill="white"/>
                </svg>

                <div>{text.title}</div>
                <div className={s.subtitle}>{text.subtitle}</div>
            </div>


            <div className={s.bottom}>
                <div className={s.button}>{text.button}</div>
            </div>
        </div>
        <Footer />
        </>
    )
}