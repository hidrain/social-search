import { Link } from 'react-router-dom'
import flying_saucer from '../../assets/images/flying_saucer.png'
import style from './not-found&error.module.css'

export const Error = () => {
    return (
        <div className={style.wrapper}>
            <img src={flying_saucer} alt='error_image' className={style.img} />
            <div className={style.main}>Какой-то сверхразум все сломал</div>
            <div className={style.regular}>Постараемся быстро починить</div>
            <Link to='/' className={style.link}>Попробовать снова</Link>
        </div>
    )
}