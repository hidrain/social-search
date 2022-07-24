import { useContext } from "react"
import { Spacer } from "../../helpers/spacer"
import { Context, ContextProps } from "../hoc/context"
import { CloseIcon } from "../icons/close-icon"
import style from './sort-popup.module.css'

export const SortPopup = () => {

    const { togglePopup, sortPopup, setSortPopup,
        filteredBySearch, setFilteredBySearch
    } = useContext(Context) as ContextProps

    const sortUsersByAbc = () => {
        const copyData = filteredBySearch.concat()
        const sortData = copyData.sort((a, b) => {
            return (a.firstName > b.firstName ? 1 : -1)
        })
        setFilteredBySearch(sortData)
        setSortPopup(false)
    }
    const sortUsersByDate = () => {
        const copyData = filteredBySearch.concat()
        const sortData = copyData.sort((a, b) => {
            return (a.birthday > b.birthday ? 1 : -1)
        })
        setFilteredBySearch(sortData)
        setSortPopup(false)
    }

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
                                <input type="radio" name="abc" id="abc"
                                    onClick={() => { sortUsersByAbc() }} />
                                <Spacer width={14} />
                                <label htmlFor="abc">По алфавиту</label>
                            </div>
                            <div className={style.sort}>
                                <input type="radio" name="date" id="abc"
                                    onClick={() => { sortUsersByDate() }} />
                                <Spacer width={14} />
                                <label htmlFor="date">По дню рождения</label>
                            </div>

                        </div>
                    </div>
                </div>)}
        </div>)
}