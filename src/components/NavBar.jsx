import PropTypes from 'prop-types';

function NavBar ({name, handleBtnClick}) {
return (
    <div>
        <button onClick={handleBtnClick}>{name}</button> 
    </div>
)
}

NavBar.propTypes = {
    name: PropTypes.string.isRequired,
    handleBtnClick: PropTypes.func.isRequired,
}
export default NavBar