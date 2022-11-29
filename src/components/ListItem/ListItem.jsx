import { Link } from 'react-router-dom';
import style from './ListItem.module.scss'

const ListItem = (props) => {
    return (
        <li key={props.chatItemData.id} className={style.li}>
            <Link to={`/chats/${props.chatItemData.id}`}>
                {props.chatItemData.name}
            </Link>
        </li>
    );
}

export { ListItem }