import './index.css'

const PasswordItem = props => {
  const {passwordDetails, onDelete, showStatus} = props
  const {id, website, username, password} = passwordDetails
  const firstLetter = website.split('').slice(0, 1)

  const deletePasswordItem = () => {
    onDelete(id)
  }

  return (
    <li className="password-item-list-container">
      <div className="first-letter-container">
        <p>{firstLetter[0].toUpperCase()}</p>
      </div>
      <div className="web-details-container">
        <p className="details">{website}</p>
        <p className="details">{username}</p>
        {showStatus ? (
          <p className="details">{password}</p>
        ) : (
          <img
            alt="stars"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            className="stars-img"
          />
        )}
      </div>
      <button
        type="button"
        className="button-container"
        testid="delete"
        onClick={deletePasswordItem}
      >
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default PasswordItem
