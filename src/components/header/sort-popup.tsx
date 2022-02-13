import { useContext } from "react"
import { Spacer } from "../../helpers/spacer"
import { Context, ContextProps } from "../hoc/context"
import { CloseIcon } from "../icons/close-icon"
import style from './sort-popup.module.css'

export const SortPopup = () => {

    const { togglePopup, sortPopup } = useContext(Context) as ContextProps

    return (
        <div>
            {sortPopup && (
                <div className={style.wrapper}>
                    <div className={style.overlay}>
                        <div className={style.popup_content}>

                            <div className={style.header}>
                                <div className={style.name}>Сортировка</div>
                                <button onClick={togglePopup}
                                    className={style.button}>
                                    <CloseIcon />
                                </button>
                            </div>
                            <div className={style.sort}>
                                <input type="checkbox" name="abc" />
                                <Spacer width={14} />
                                <label htmlFor="abc">По алфавиту</label>
                            </div>
                            <div className={style.sort}>
                                <input type="checkbox" name="date" />
                                <Spacer width={14} />
                                <label htmlFor="date">По дню рождения</label>
                            </div>

                        </div>
                    </div>
                </div>)}
        </div>)
}