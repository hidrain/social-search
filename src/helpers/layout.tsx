import { Outlet } from "react-router-dom"
import { Label } from "../components/header/label"
import { Navbar } from "../components/header/navbar"
import { Search } from "../components/header/search"
import { SortPopup } from "../components/header/sort-popup"

export const Layout = () => {

    return (
        <div className='app_wrapper'>
            <div className='app_wrapper_header'>
                <Label />
                <Search />
                <Navbar />
            </div>

            <div className='app_wrapper_content'>
                <SortPopup />
                <Outlet />
            </div>
        </div>
    )
}