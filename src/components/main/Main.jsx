import { useNavigate } from 'react-router-dom'

import { Footer } from '../footer/Footer'

import s from './Main.module.scss'

export const Main = () => {
    const navigate = useNavigate()

    return (
        <div className={s.wrapper} onClick={() => navigate("/")}>
            sad

            <Footer />
        </div>
    )
}