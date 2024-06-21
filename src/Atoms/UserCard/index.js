import './index.css'

const UserCard = ({image, fullName}) =>{
    return(
        <div className="card">
            <img src={image} alt={`${fullName} profile` } id="image"/>
            <h3 className='user-name'>{fullName}</h3>
        </div>
    )
}
export default UserCard;