import { useNavigate } from 'react-router-dom'

import s from './Second.module.scss'
import russia_flag from './../../static/images/flag-for-russia.png'
import united_kingdom from './../../static/images/flag-for-united-kingdom.png'
import arrow from './../../static/images/arrow.png'

export const Second = () => {
    const navigate = useNavigate()
    return (
        <div className={s.wrapper} onClick={() => navigate("/")}>
        {/* <Link className={s.wrapper} to="/third"> */}
            <div className={s.title}>
                <p>Выберите язык</p>
                <p>Select language</p>
            </div>

            <div className={s.languages}>
                <div className={s.border}>
                    <div className={s.left_block}>
                        <img src={russia_flag} alt="Флаг России" />
                        <p>Русский</p>      
                    </div>
                     
                    <img className={s.arrow} src={arrow} alt="Стрелка" />         
                </div>

                <div className={s.border}>
                    <div className={s.left_block}>
                        <img src={united_kingdom} alt="Флаг Великобритании" />
                        <p>English</p>      
                    </div>
                     
                    <img className={s.arrow} src={arrow} alt="Стрелка" />         
                </div>
            </div>

        {/* </Link> */}
        </div>
    )
}