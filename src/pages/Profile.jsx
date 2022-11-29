import { useDispatch } from 'react-redux'

const Profile = () => {

    const dispatch = useDispatch();
    const onChecked = () => {
        dispatch({ type: 'PUSH' })
    };

    return (
        <div>
            <p>Profile</p>
            <input type="checkbox" onClick={onChecked} />
        </div>
    );
}

export { Profile }