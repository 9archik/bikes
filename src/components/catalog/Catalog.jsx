import { useState } from 'react'
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'

import s from './Catalog.module.scss'


export const Catalog = () => {
    const language = useSelector((state) => state.app.language)
    const dataset = useSelector((state) => state.dataset)
    const navigate = useNavigate()
    const [num, setNum] = useState(0)

    var current_dataset = {}

    if (dataset.selected_bike.type == "mini") {
        current_dataset = dataset.mini.items
    } else if (dataset.selected_bike.type == "highways") {
        current_dataset = dataset.highways.items
    } else if (dataset.selected_bike.type == "luxe") {
        current_dataset = dataset.luxe.items
    }

    function setLocale() {
        const loctext = {}
        if (language == "ru") {
            switch (dataset.selected_bike.type) {
                case 'mini':
                    loctext.head_title = "Мини скутеры"
                    break
                case 'highways':
                    loctext.head_title = "Шоссейные"
                    break
                case 'luxe':
                    loctext.head_title = "Премиум"
                    break
            }
            loctext.subtitle = "Изображение рекламного объекта может отличаться от реального"
            loctext.period = "Срок аренды"
            loctext.date_at = "Дата начала аренды"
            loctext.date_to = "Завершение аренды"
            loctext.date = "дд.мм.гг"
            loctext.release = "Год выпуска"
            loctext.from = "от"
            loctext.color = "Цвет"
            loctext.white = "Белый"
            loctext.red = "Красный"
            loctext.blue = "Синий"
            loctext.black = "Черный"
            loctext.yellow = "Желтый"
            loctext.bright = "Яркий"
            loctext.count_helmet = "Количество шлемов"
            loctext.one_helmet = "Один шлем"
            loctext.two_helmet = "Два шлема"
            loctext.no_helmet = "Не нужно"
            loctext.additional_options = "Доп.опции"
            loctext.keyless_access = "Бесключевой доступ"
            loctext.send_location = "Отправить локацию"
        } else if (language == "en") {
            switch (dataset.selected_bike.type) {
                case 'mini':
                    loctext.head_title = "Mini scooters"
                    break
                case 'highways':
                    loctext.head_title = "Highways"
                    break
                case 'luxe':
                    loctext.head_title = "Premium"
                    break
            }
            loctext.subtitle = "The image of the advertising object may differ from the real one"
            loctext.period = "Rental period"
            loctext.date_at = "Rental start date"
            loctext.date_to = "Completion of the lease"
            loctext.date = "dd.mm.yy"
            loctext.release = "Year of release"
            loctext.from = "from"
            loctext.color = "Color"
            loctext.white = "White"
            loctext.red = "Red"
            loctext.blue = "Blue"
            loctext.black = "Black"
            loctext.yellow = "Yellow"
            loctext.bright = "Bright"
            loctext.count_helmet = "Number of helmets"
            loctext.one_helmet = "One helmet"
            loctext.two_helmet = "Two helmets"
            loctext.no_helmet = "No need"
            loctext.additional_options = "Additional options"
            loctext.keyless_access = "Keyless access"
            loctext.send_location = "Send location"
        }
        return loctext
    }

    const text = setLocale()

    function increment(number) {
        if (number == current_dataset.length - 1) {
            number = 0
            return number
        } else {
            return number + 1
        }
    }

    function decrement(number) {
        if (number == 0) {
            number = dataset.length - 1
            return number
        } else {
            return number - 1
        }
    }

    console.log(current_dataset)


    return (
        <>
        <div className={s.head_title} onClick={() => navigate("/main")}>
            <div className={s.header_absolute}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12H3M3 12L9.75 5M3 12L9.75 19" stroke="#202020" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>{text.head_title}</span>
            </div>

        </div>


        <div className={s.wrapper} >
            
            <div className={s.wrapper_inner}>
                <div className={s.image}>

                    <div className={s.arrows}>
                        <div className={s.arrow} onClick={(e) => {
                        e.stopPropagation()
                        setNum(decrement(num))
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M12.4446 14.8886L7.55569 9.99973L12.4446 5.11084" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>          
                        </div>
                        <div className={s.arrow} onClick={(e) => {
                        e.stopPropagation()
                        setNum(increment(num))
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                                <path d="M7.97925 16.0413L13.0209 10.9997L7.97925 5.95801" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>        
                        </div>
                    </div>
                    <div className={s.bikes_swaiper}>
                        <div className={s.active}>{current_dataset[num].name}</div>
                    </div>
                    


                    <img src={current_dataset[num].img} alt="Bike" />
                </div>
                <div className={s.image_attention}>
                    <span>*</span>
                    <span>{text.subtitle}</span>
                </div>
    
            </div>

            <div className={s.wrapper_inner}>
                <div className={s.title}>
                    <span>{text.period}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M11 3C6.584 3 3 6.584 3 11C3 15.416 6.584 19 11 19C15.416 19 19 15.416 19 11C19 6.584 15.416 3 11 3ZM11.8 16.6H10.2V15H11.8V16.6ZM13.456 10.4L12.736 11.136C12.16 11.72 11.8 12.2 11.8 13.4H10.2V13C10.2 12.12 10.56 11.32 11.136 10.736L12.128 9.728C12.424 9.44 12.6 9.04 12.6 8.6C12.6 7.72 11.88 7 11 7C10.12 7 9.4 7.72 9.4 8.6H7.8C7.8 6.832 9.232 5.4 11 5.4C12.768 5.4 14.2 6.832 14.2 8.6C14.2 9.304 13.912 9.944 13.456 10.4Z" fill="#B7B7B7" fill-opacity="0.7"/>
                    </svg>
                </div>

                <div className={s.calendar}>
                    <div className={s.calendar_item}>
                        <div className={s.c_title}>{text.date_at}</div>
                        <div className={s.input}>
                            <span>{text.date}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M17.4167 3.6665H4.58333C3.57081 3.6665 2.75 4.48732 2.75 5.49984V18.3332C2.75 19.3457 3.57081 20.1665 4.58333 20.1665H17.4167C18.4292 20.1665 19.25 19.3457 19.25 18.3332V5.49984C19.25 4.48732 18.4292 3.6665 17.4167 3.6665Z" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.6666 1.8335V5.50016" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.33337 1.8335V5.50016" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.75 9.1665H19.25" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    <div className={s.calendar_item}>
                        <div className={s.c_title}>{text.date_to}</div>
                        <div className={s.input}>
                            <span>{text.date}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M17.4167 3.6665H4.58333C3.57081 3.6665 2.75 4.48732 2.75 5.49984V18.3332C2.75 19.3457 3.57081 20.1665 4.58333 20.1665H17.4167C18.4292 20.1665 19.25 19.3457 19.25 18.3332V5.49984C19.25 4.48732 18.4292 3.6665 17.4167 3.6665Z" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.6666 1.8335V5.50016" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.33337 1.8335V5.50016" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.75 9.1665H19.25" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.wrapper_inner}>
                <div className={s.title}>
                    <span>{text.release}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M11 3C6.584 3 3 6.584 3 11C3 15.416 6.584 19 11 19C15.416 19 19 15.416 19 11C19 6.584 15.416 3 11 3ZM11.8 16.6H10.2V15H11.8V16.6ZM13.456 10.4L12.736 11.136C12.16 11.72 11.8 12.2 11.8 13.4H10.2V13C10.2 12.12 10.56 11.32 11.136 10.736L12.128 9.728C12.424 9.44 12.6 9.04 12.6 8.6C12.6 7.72 11.88 7 11 7C10.12 7 9.4 7.72 9.4 8.6H7.8C7.8 6.832 9.232 5.4 11 5.4C12.768 5.4 14.2 6.832 14.2 8.6C14.2 9.304 13.912 9.944 13.456 10.4Z" fill="#B7B7B7" fill-opacity="0.7"/>
                    </svg>
                </div>

                <div className={s.items_flex_start}>
                    <div>2023</div>
                    <div>{text.from} 2022</div>
                    <div className={s.active}>{text.from} 2020</div>
                    <div>{text.from} 2018</div>
                </div>
            </div>

            <div className={s.wrapper_inner}>
                <div className={s.title}>
                    <span>{text.color}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M11 3C6.584 3 3 6.584 3 11C3 15.416 6.584 19 11 19C15.416 19 19 15.416 19 11C19 6.584 15.416 3 11 3ZM11.8 16.6H10.2V15H11.8V16.6ZM13.456 10.4L12.736 11.136C12.16 11.72 11.8 12.2 11.8 13.4H10.2V13C10.2 12.12 10.56 11.32 11.136 10.736L12.128 9.728C12.424 9.44 12.6 9.04 12.6 8.6C12.6 7.72 11.88 7 11 7C10.12 7 9.4 7.72 9.4 8.6H7.8C7.8 6.832 9.232 5.4 11 5.4C12.768 5.4 14.2 6.832 14.2 8.6C14.2 9.304 13.912 9.944 13.456 10.4Z" fill="#B7B7B7" fill-opacity="0.7"/>
                    </svg>
                </div>
                

                <div className={s.items_flex_start}>
                    <div>{text.white}</div>
                    <div className={s.active}>{text.red}</div>
                    <div>{text.blue}</div>
                </div>

                <div className={s.items_flex_start}>
                    <div>{text.black}</div>
                    <div>{text.yellow}</div>
                    <div>{text.bright}</div>
                </div>
            </div>

            <div className={s.wrapper_inner}>
                <div className={s.title}>
                    <span>{text.count_helmet}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M11 3C6.584 3 3 6.584 3 11C3 15.416 6.584 19 11 19C15.416 19 19 15.416 19 11C19 6.584 15.416 3 11 3ZM11.8 16.6H10.2V15H11.8V16.6ZM13.456 10.4L12.736 11.136C12.16 11.72 11.8 12.2 11.8 13.4H10.2V13C10.2 12.12 10.56 11.32 11.136 10.736L12.128 9.728C12.424 9.44 12.6 9.04 12.6 8.6C12.6 7.72 11.88 7 11 7C10.12 7 9.4 7.72 9.4 8.6H7.8C7.8 6.832 9.232 5.4 11 5.4C12.768 5.4 14.2 6.832 14.2 8.6C14.2 9.304 13.912 9.944 13.456 10.4Z" fill="#B7B7B7" fill-opacity="0.7"/>
                    </svg>
                </div>
                

                <div className={s.items_flex_start}>
                    <div className={s.active}>{text.one_helmet}</div>
                    <div>{text.two_helmet}</div>
                    <div>{text.no_helmet}</div>
                </div>
            </div>

            <div className={s.wrapper_inner}>
                <div className={s.title}>
                    <span>{text.additional_options}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M11 3C6.584 3 3 6.584 3 11C3 15.416 6.584 19 11 19C15.416 19 19 15.416 19 11C19 6.584 15.416 3 11 3ZM11.8 16.6H10.2V15H11.8V16.6ZM13.456 10.4L12.736 11.136C12.16 11.72 11.8 12.2 11.8 13.4H10.2V13C10.2 12.12 10.56 11.32 11.136 10.736L12.128 9.728C12.424 9.44 12.6 9.04 12.6 8.6C12.6 7.72 11.88 7 11 7C10.12 7 9.4 7.72 9.4 8.6H7.8C7.8 6.832 9.232 5.4 11 5.4C12.768 5.4 14.2 6.832 14.2 8.6C14.2 9.304 13.912 9.944 13.456 10.4Z" fill="#B7B7B7" fill-opacity="0.7"/>
                    </svg>
                </div>
                

                <div className={s.items_flex_start}>
                    <div className={s.active}>ABS</div>
                    <div>{text.keyless_access}</div>
                </div>
            </div>
        </div>

        <div className={s.footer}>
            <div className={s.footer_inner} onClick={() => navigate("/wait")}>
                <div>{text.send_location}</div>
            </div>
        </div>
        </>
    )
}