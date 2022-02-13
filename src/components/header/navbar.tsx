import { useContext } from 'react';
import { Spacer } from '../../helpers/spacer';
import { Context, ContextProps } from '../hoc/context';
import { CustomLink } from './custom-link';
import style from './navbar.module.css';

export const Navbar = () => {
    const { setDepartment } = useContext(Context) as ContextProps

    return (
        <div className={style.wrapper}>
            <Spacer width={16} />
            <nav className={style.nav}>
                <CustomLink to='/' name='all'
                    handleSetDepartment={setDepartment}>Все</CustomLink>
                <CustomLink to='/designers' name='design'
                    handleSetDepartment={setDepartment}>Designers</CustomLink>
                <CustomLink to='/analysts' name='analytics'
                    handleSetDepartment={setDepartment}>Analysts</CustomLink>
                <CustomLink to='/managers' name='management'
                    handleSetDepartment={setDepartment}>Managers</CustomLink>
                <CustomLink to='/ios' name='ios'
                    handleSetDepartment={setDepartment}>iOS</CustomLink>
                <CustomLink to='/android' name='android'
                    handleSetDepartment={setDepartment}>Android</CustomLink>
            </nav>

        </div>
    )
}

