import { Link, useMatch } from 'react-router-dom';
import style from './custom-link.module.css';

type Props = {
    to: string
    name: string
    handleSetDepartment: (name: string) => void
}

export const CustomLink: React.FC<Props> =
    ({ children, to, name, handleSetDepartment }) => {

        const match = useMatch(to)

        return (
            <div className={style.item}>
                <Link to={to}
                    onClick={() => handleSetDepartment(name)}
                    className={(match ? style.active : '')}>
                    {children}
                </Link>
            </div>
        )
    }


