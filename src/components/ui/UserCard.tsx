interface IUserCard {
    name: string
}

const UserCard = ({name}: IUserCard ) : JSX.Element => {
    return (
        <div className="user-card">
            {name}
        </div>
    )
}

export default UserCard