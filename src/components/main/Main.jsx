import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import { Footer } from '../footer/Footer'
import s from './Main.module.scss'
import { CatItem } from './catalogItem/CatItem'


import scoopy from './../../static/images/bikes/scoopy.png'
import vario from './../../static/images/bikes/vario.png'
import fazzio from './../../static/images/bikes/fazzio.png'
import lexi from './../../static/images/bikes/lexi.png'

import nmax from './../../static/images/bikes/nmax.png'
import adv from './../../static/images/bikes/adv.png'
import pcx from './../../static/images/bikes/pcx.png'

import vespa from './../../static/images/bikes/vespa.png'
import xmax from './../../static/images/bikes/xmax.png'

export const Main = () => {
    const navigate = useNavigate()
    const language = useSelector((state) => state.app.language)

    const mini = [   
            {
                name: "Scoopy",
                img: scoopy,
                price: 3,
            }, 
            {
                name: "Vario",
                img: vario,
                price: 3,
            },
            {
                name: "Fazzio",
                img: fazzio,
                price: 3,
            },
            {
                name: "Lexi",
                img: lexi,
                price: 4,
            }
        
    ]

    const highways = [   
        {
            name: "Nmax",
            img: nmax,
            price: 4,
        }, 
        {
            name: "ADV",
            img: adv,
            price: 6,
        },
        {
            name: "PCX",
            img: pcx,
            price: 4,
        },
    ]

    const luxe = [   
        {
            name: "Vespa",
            img: vespa,
            price: 8,
        }, 
        {
            name: "Xmax",
            img: xmax,
            price: 11,
        },    
    ]

    function setLocale() {
        const loctext = {}
        if (language == "ru") {
            loctext.title = "Выберите тип скутера"
        } else if (language == "en") {
            loctext.title = "Choose the type of scooter"
        }
        return loctext
    }

    const text = setLocale()

    return (
        <div className={s.wrapper}
        //  onClick={() => navigate("/catalog")}
         >
            <div className={s.title}>{text.title}</div>
            <div className={s.items}>
                <CatItem dataset={mini}/>
                <CatItem dataset={highways}/>
                <CatItem dataset={luxe}/>
            </div>

            <Footer />
        </div>
    )
}