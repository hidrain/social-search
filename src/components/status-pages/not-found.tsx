import magnifying_glass from '../../assets/images/magnifying_glass.png'
import style from './not-found&error.module.css'

export const NotFound = () => {

    return (
        <div className={style.wrapper}>
            <img src={magnifying_glass} alt='no results' className={style.img} />
            <div className={style.main}>Мы никого не нашли</div>
            <div className={style.regular}>Попробуй скорректировать запрос</div>
        </div>
    )
}