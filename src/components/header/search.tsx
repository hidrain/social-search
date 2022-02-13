import { FormEvent, useContext } from 'react'
import { Spacer } from '../../helpers/spacer'
import { Context, ContextProps } from '../hoc/context'
import { FilterIcon } from '../icons/filter-icon'
import { SearchIcon } from '../icons/search-icon'
import style from './search.module.css'


export const Search = () => {
    const { searchString, setSearchString, togglePopup } = useContext(Context) as ContextProps

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div className={style.wrapper}>
            <Spacer width={16} />
            <form className={style.form}
                onSubmit={handleSubmit}
                autoComplete='off'>
                <input
                    className={style.input}
                    type='text'
                    name='search'
                    placeholder='Введи имя, тег, почту...'
                    onChange={(e) => { setSearchString(e.currentTarget.value) }}
                    value={searchString} />

                <button
                    className={style.search_button}
                    type='submit'>
                    <SearchIcon />
                </button>

                <button
                    onClick={togglePopup}
                    className={style.filter_button}>
                    <FilterIcon />
                </button>
            </form>
            <Spacer width={16} />
        </div >
    )
}