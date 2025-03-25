import profilePic from "./assets/purple_mountains.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="Profile" />
      <h2 className="card-title">Derrick</h2>
      <p className="card-text">
        I am a student at the University Of Ghana studying Bsc. Information
        Technology. And I love coding
      </p>
    </div>
  );
}

export default Card;
