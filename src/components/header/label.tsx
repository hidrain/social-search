import { Spacer } from '../../helpers/spacer'
import style from './label.module.css'

export const Label = () => {
    return (
        <div className={style.wrapper}>
            <Spacer width={24} />
            <div className={style.label}>Поиск</div>
        </div>
    )
}