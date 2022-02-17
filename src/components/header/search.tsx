import { FormEvent, useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Spacer } from '../../helpers/spacer'
import { Context, ContextProps } from '../hoc/context'
import { SortIcon } from '../icons/sort-icon'
import { SearchIcon } from '../icons/search-icon'
import style from './search.module.css'
import { SearchUser } from '../../types/types'


export const Search = () => {
    const { searchString, setSearchString, togglePopup } = useContext(Context) as ContextProps

    // const [sortAbc, setSortAbc] = useState(false)
    // const [sortUsers, setSortUsers] = useState<SearchUser[]>([])

    // useEffect(() => {

    // }, [sortAbc])

    // const handleCheckbox = (e: any) => {
    //     const form = e.target
    //     const isAbc = form.sortAbc?.checked

    //     const params = {}

    //     //@ts-ignore
    //     if (isAbc) params.sortAbc = true
    //     setSearchParams(params)
    // }


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
                    className={style.sort_button}>
                    <SortIcon />
                </button>
            </form>
            <Spacer width={16} />
        </div >
    )
}