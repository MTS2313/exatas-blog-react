import  './authorCard.css'

const AuthorCard = ({id, imageUrl, fullname, role, selected, onAuthorChange}) => {
    return (
        <div className="col-card-author">
            <div className={'card ' + (selected ? 'active' : '')} 
            onClick={(e) => {onAuthorChange(e.currentTarget, id); console.log(e)}}>
                <div className="card-profilepic">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="card-body">
                    <span className='text name'>{fullname}</span>
                    <span className='text role'>{role}</span>
                </div>
            </div>
        </div>
    )
}

export default AuthorCard;