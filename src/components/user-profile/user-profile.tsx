import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import avatar from '../../assets/images/avatar.png'
import { Spacer } from "../../helpers/spacer"
import { Context, ContextProps } from "../hoc/context"
import { ArrowIcon } from "../icons/arrow-icon"
import { PhoneIcon } from "../icons/phone-icon"
import { StarIcon } from "../icons/star-icon"
import style from './user-profile.module.css'


export const UserProfile = () => {

    const { users } = useContext(Context) as ContextProps

    const { id } = useParams()
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    const user = users.find(u => u.id === id)

    return (
        <div>
            {user && <div className={style.wrapper}>

                <div className={style.wrapper_top}>
                    <button onClick={goBack} className={style.button}>
                        <Spacer width={24} />
                        <ArrowIcon />
                    </button>
                    <img src={avatar} className={style.avatar} />

                    <div className={style.info_wrapper}>
                        <div className={style.user_info}>
                            <div className={style.name}>
                                {user.firstName + ' ' + user?.lastName}
                            </div>
                            <div className={style.user_tag}>
                                {user.userTag.toLowerCase()}
                            </div>
                        </div>
                        <Spacer height={12} />
                        <div className={style.department}>
                            {user.department}
                        </div>
                    </div>

                </div>

                <div className={style.wrapper_buttom}>
                    <div>
                        <div className={style.buttom_item}>
                            <StarIcon />
                            <Spacer width={12} />
                            {user.birthday}
                        </div>
                        <div className={style.buttom_item}>
                            <PhoneIcon />
                            <Spacer width={12} />
                            {user.phone}
                        </div>
                    </div>
                    <div className={style.age}>{user.birthday}</div>
                </div>

            </div>}
        </div >
    )
}

