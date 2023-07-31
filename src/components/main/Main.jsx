import { useNavigate } from 'react-router-dom'

import { Footer } from '../footer/Footer'

import s from './Main.module.scss'
import { CatItem } from './catalogItem/CatItem'

export const Main = () => {
    const navigate = useNavigate()

    return (
        <div className={s.wrapper} onClick={() => navigate("/catalog")}>
            <div className={s.title}>Выберите тип скутера</div>
            <div className={s.items}>
                <CatItem />
                <CatItem />
                <CatItem />
                <CatItem />
                <CatItem />
            </div>

            <Footer />
        </div>
    )
}