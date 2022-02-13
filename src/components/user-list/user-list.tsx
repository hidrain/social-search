import axios from "axios"
import style from './user-list.module.css'
import avatar from '../../assets/images/avatar.png'
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { Spacer } from "../../helpers/spacer"
import { NotFound } from "../status-pages/not-found"
import { Context, ContextProps } from "../hoc/context"
import { SearchResult, SearchUser } from "../../types/types"

type Props = {}

export const UserList: React.FC<Props> = ({ }) => {

    const { users,
        setUsers,
        searchString,
        department
    } = useContext(Context) as ContextProps

    const [filteredByTab, setFilteredByTab] = useState<SearchUser[]>([])
    const [filteredBySearch, setFilteredBySearch] = useState<SearchUser[]>([]);

    useEffect(() => {
        console.log('SYNC USERS')
        axios
            .get<SearchResult>(`https://stoplight.io/mocks/kode-education/trainee-test/25143926
      /users`)
            .then(res => {
                setUsers(res.data.items)
            })
            .catch(error => {
                console.error(error);
            })
    }, [])

    useEffect(() => {
        console.log('FILTER TABS')
        department === 'all' ? setFilteredByTab(users) : setFilteredByTab(users
            .filter(user => user.department === department))
    }, [department, users])

    useEffect(() => {
        console.log('FILTER USERS')
        setFilteredBySearch(
            filteredByTab.filter((user) =>
                user.firstName.toLowerCase().includes(searchString.toLowerCase())
                || user.lastName.toLowerCase().includes(searchString.toLowerCase())
                || user.userTag.toLowerCase().includes(searchString.toLowerCase()))
        )
    }, [searchString, filteredByTab])

    return (
        <div>
            {filteredBySearch.length > 0 ?
                <ul>
                    <Spacer height={10} />
                    {filteredBySearch.map(u => {
                        return (
                            <Link key={u.id} to={`/user/${u.id}`}>
                                <div className={style.user_wrapper}>
                                    <img src={avatar} className={style.avatar} />
                                    <Spacer width={16} />
                                    <div className={style.user_info}>
                                        <div className={style.name}>
                                            {u.firstName + ' ' + u.lastName}
                                        </div>
                                        <div className={style.user_tag}>
                                            {u.userTag.toLowerCase()}
                                        </div>
                                        <div className={style.department}>
                                            {u.department}
                                        </div>
                                    </div>
                                </div>
                                <Spacer height={12} />
                            </Link>)
                    })}
                </ul>
                : <NotFound />}
        </div >
    )
}

