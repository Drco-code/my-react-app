import imageUrl from "../assets/purple_mountains.jpg";


function Profile() {
  const handleClick = (e) => {
    e.target.style.display = "none";
  };
  return <img onClick={(e) => handleClick(e)} src={imageUrl} alt="Profile" />;
}

export default Profile;
