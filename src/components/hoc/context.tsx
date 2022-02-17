import { createContext, useState } from "react";
import { SearchUser } from "../../types/types";


export type ContextProps = {
    users: SearchUser[]
    setUsers: (users: SearchUser[]) => void
    searchString: string
    setSearchString: (searchString: string) => void
    department: string
    setDepartment: (department: string) => void
    sortPopup: boolean
    setSortPopup: (sortPopup: boolean) => void
    togglePopup: () => void
    filteredBySearch: SearchUser[]
    setFilteredBySearch: (filteredBySearch: SearchUser[]) => void
}

export const Context = createContext<Partial<ContextProps>>({})

export const Provider = ({ children }: any) => {
    const [users, setUsers] = useState<SearchUser[]>([])
    const [searchString, setSearchString] = useState('')
    const [filteredBySearch, setFilteredBySearch] = useState<SearchUser[]>([]);
    const [department, setDepartment] = useState('all')
    const [sortPopup, setSortPopup] = useState(false)

    const togglePopup = () => {
        setSortPopup(!sortPopup)
    }

    return (
        <Context.Provider
            value={{
                users, setUsers,
                searchString, setSearchString,
                filteredBySearch, setFilteredBySearch,
                department, setDepartment,
                sortPopup, setSortPopup,
                togglePopup
            }}
        >
            {children}
        </Context.Provider>
    )
}