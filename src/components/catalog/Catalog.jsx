import s from './Catalog.module.scss'

import scoopy from './../../static/images/bikes/scoopy.png'
import { useNavigate } from 'react-router-dom'

export const Catalog = () => {
    const navigate = useNavigate()
    console.log(scoopy.height)

    return (
        <>
        <div className={s.head_title} onClick={() => navigate("/main")}>
            <div className={s.header_absolute}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12H3M3 12L9.75 5M3 12L9.75 19" stroke="#202020" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Мини скутеры</span>
            </div>

        </div>


        <div className={s.wrapper} onClick={() => navigate("/")}>
            
            <div className={s.wrapper_inner}>
                <div className={s.image}>

                    <div className={s.arrows}>
                        <div className={s.arrow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M12.4446 14.8886L7.55569 9.99973L12.4446 5.11084" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>          
                        </div>
                        <div className={s.arrow}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22" fill="none">
                                <path d="M7.97925 16.0413L13.0209 10.9997L7.97925 5.95801" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>        
                        </div>
                    </div>
                    <div className={s.bikes_swaiper}>
                        <div>Scoopy</div>
                        <div>Vario</div>
                        <div className={s.active}>Fazzio</div>
                        <div>Lexi</div>
                    </div>


                    <img src={scoopy} alt="Bike" />
                </div>
                <div className={s.image_attention}>
                    <span>*</span>
                    <span>Изображение рекламного объекта может отличаться от реального</span>
                </div>
    
            </div>

            <div className={s.wrapper_inner}>
                <div className={s.title}>
                    <span>Срок аренды</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M11 3C6.584 3 3 6.584 3 11C3 15.416 6.584 19 11 19C15.416 19 19 15.416 19 11C19 6.584 15.416 3 11 3ZM11.8 16.6H10.2V15H11.8V16.6ZM13.456 10.4L12.736 11.136C12.16 11.72 11.8 12.2 11.8 13.4H10.2V13C10.2 12.12 10.56 11.32 11.136 10.736L12.128 9.728C12.424 9.44 12.6 9.04 12.6 8.6C12.6 7.72 11.88 7 11 7C10.12 7 9.4 7.72 9.4 8.6H7.8C7.8 6.832 9.232 5.4 11 5.4C12.768 5.4 14.2 6.832 14.2 8.6C14.2 9.304 13.912 9.944 13.456 10.4Z" fill="#B7B7B7" fill-opacity="0.7"/>
                    </svg>
                </div>

                <div className={s.calendar}>
                    <div className={s.calendar_item}>
                        <div className={s.c_title}>Дата начала аренды</div>
                        <div className={s.input}>
                            <span>дд.мм.гг</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M17.4167 3.6665H4.58333C3.57081 3.6665 2.75 4.48732 2.75 5.49984V18.3332C2.75 19.3457 3.57081 20.1665 4.58333 20.1665H17.4167C18.4292 20.1665 19.25 19.3457 19.25 18.3332V5.49984C19.25 4.48732 18.4292 3.6665 17.4167 3.6665Z" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.6666 1.8335V5.50016" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.33337 1.8335V5.50016" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.75 9.1665H19.25" stroke="#202020" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>

                    <div className={s.calendar_item}>
                        <div className={s.c_title}>Дата начала аренды</div>
                        <div className={s.input}>
                            <span>дд.мм.гг</span>
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
                    <span>Год выпуска</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M11 3C6.584 3 3 6.584 3 11C3 15.416 6.584 19 11 19C15.416 19 19 15.416 19 11C19 6.584 15.416 3 11 3ZM11.8 16.6H10.2V15H11.8V16.6ZM13.456 10.4L12.736 11.136C12.16 11.72 11.8 12.2 11.8 13.4H10.2V13C10.2 12.12 10.56 11.32 11.136 10.736L12.128 9.728C12.424 9.44 12.6 9.04 12.6 8.6C12.6 7.72 11.88 7 11 7C10.12 7 9.4 7.72 9.4 8.6H7.8C7.8 6.832 9.232 5.4 11 5.4C12.768 5.4 14.2 6.832 14.2 8.6C14.2 9.304 13.912 9.944 13.456 10.4Z" fill="#B7B7B7" fill-opacity="0.7"/>
                    </svg>
                </div>

                <div className={s.items_flex_start}>
                    <div>2023</div>
                    <div>от 2022</div>
                    <div className={s.active}>от 2020</div>
                    <div>от 2018</div>
                </div>
            </div>

            <div className={s.wrapper_inner}>
                <div className={s.title}>
                    <span>Год выпуска</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M11 3C6.584 3 3 6.584 3 11C3 15.416 6.584 19 11 19C15.416 19 19 15.416 19 11C19 6.584 15.416 3 11 3ZM11.8 16.6H10.2V15H11.8V16.6ZM13.456 10.4L12.736 11.136C12.16 11.72 11.8 12.2 11.8 13.4H10.2V13C10.2 12.12 10.56 11.32 11.136 10.736L12.128 9.728C12.424 9.44 12.6 9.04 12.6 8.6C12.6 7.72 11.88 7 11 7C10.12 7 9.4 7.72 9.4 8.6H7.8C7.8 6.832 9.232 5.4 11 5.4C12.768 5.4 14.2 6.832 14.2 8.6C14.2 9.304 13.912 9.944 13.456 10.4Z" fill="#B7B7B7" fill-opacity="0.7"/>
                    </svg>
                </div>
                

                <div className={s.items_flex_start}>
                    <div>Белый</div>
                    <div className={s.active}>Красный</div>
                    <div>Синий</div>
                </div>

                <div className={s.items_flex_start}>
                    <div>Черный</div>
                    <div>Желтый</div>
                    <div>Яркий</div>
                </div>
            </div>

            <div className={s.wrapper_inner}>
                <div className={s.title}>
                    <span>Количество шлемов</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M11 3C6.584 3 3 6.584 3 11C3 15.416 6.584 19 11 19C15.416 19 19 15.416 19 11C19 6.584 15.416 3 11 3ZM11.8 16.6H10.2V15H11.8V16.6ZM13.456 10.4L12.736 11.136C12.16 11.72 11.8 12.2 11.8 13.4H10.2V13C10.2 12.12 10.56 11.32 11.136 10.736L12.128 9.728C12.424 9.44 12.6 9.04 12.6 8.6C12.6 7.72 11.88 7 11 7C10.12 7 9.4 7.72 9.4 8.6H7.8C7.8 6.832 9.232 5.4 11 5.4C12.768 5.4 14.2 6.832 14.2 8.6C14.2 9.304 13.912 9.944 13.456 10.4Z" fill="#B7B7B7" fill-opacity="0.7"/>
                    </svg>
                </div>
                

                <div className={s.items_flex_start}>
                    <div className={s.active}>Один шлем</div>
                    <div>Два шлема</div>
                    <div>Не нужно</div>
                </div>
            </div>

            <div className={s.wrapper_inner}>
                <div className={s.title}>
                    <span>Доп.опции</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M11 3C6.584 3 3 6.584 3 11C3 15.416 6.584 19 11 19C15.416 19 19 15.416 19 11C19 6.584 15.416 3 11 3ZM11.8 16.6H10.2V15H11.8V16.6ZM13.456 10.4L12.736 11.136C12.16 11.72 11.8 12.2 11.8 13.4H10.2V13C10.2 12.12 10.56 11.32 11.136 10.736L12.128 9.728C12.424 9.44 12.6 9.04 12.6 8.6C12.6 7.72 11.88 7 11 7C10.12 7 9.4 7.72 9.4 8.6H7.8C7.8 6.832 9.232 5.4 11 5.4C12.768 5.4 14.2 6.832 14.2 8.6C14.2 9.304 13.912 9.944 13.456 10.4Z" fill="#B7B7B7" fill-opacity="0.7"/>
                    </svg>
                </div>
                

                <div className={s.items_flex_start}>
                    <div className={s.active}>ABS</div>
                    <div>Бесключевой доступ</div>
                </div>
            </div>
        </div>

        <div className={s.footer}>
            <div className={s.footer_inner}>
                <div>Отправить локацию</div>
            </div>
        </div>
        </>
    )
}