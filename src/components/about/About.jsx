import { Footer } from '../footer/Footer'
import s from './About.module.scss'


import { useNavigate } from 'react-router-dom'

export const About = () => {
    const navigate = useNavigate()
    return (
        <>
        <div className={s.wrapper} onClick={() => navigate("/support")}>
            <div className={s.title}>Как работает наш сервис</div>
            <div className={s.item}>
                <div className={s.number}>1</div>
                <div className={s.text}>Клиент формирует запрос на аренду.</div>
            </div>

            <div className={s.item}>
                <div className={s.number}>2</div>
                <div className={s.text}>Сервис в автоматическом режиме опрашивает ближайшие сервисы проката по наличию байка с нужными параметрами.</div>
            </div>

            <div className={s.item}>
                <div className={s.number}>3</div>
                <div className={s.text}>Несколько сервисов принимают приглашение, подтверждая тем самым, что скутер  находится в наличии и готов к аренде.</div>
            </div>

            <div className={s.item}>
                <div className={s.number}>4</div>
                <div className={s.text}>После того, как сервис проката подтвердил аренду, клиент получает предложение с фотографией и указанием технического состояния скутера. Указана цена исходя из всего срока аренды. </div>
            </div>

            <div className={s.item}>
                <div className={s.number}>5</div>
                <div className={s.text}>В итоге клиент получает качественную подборку предложений под свои параметры.</div>
            </div>

            <div className={s.item}>
                <div className={s.number}>6</div>
                <div className={s.text}>Оплата только после доставки клиенту.</div>
            </div>

            
        </div>
        <Footer />
        </>
    )
}