

import s from './CatItem.module.scss'

import scoopy from './../../../static/images/bikes/scoopy.png'

export const CatItem = () => {

    return (
        <div className={s.wrapper}>
            <div className={s.image}>
                <img src={scoopy} alt="Bike" />
            </div>

            <div className={s.info}>
                <div className={s.title_price}>
                    <span>Мини скутеры</span>
                    <span>от 3$</span>
                </div>
                <div className={s.subtitle}>
                    <span>Для девушек / одиночных поездок</span>
                </div>
            </div>
        </div>
    )
}