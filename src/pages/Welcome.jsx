import welcomeImage from "../assets/images/welcome-image.png";

export default function Welcome() {
  return (
    <div className="bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('./assets/images/welcome-bg-image.png')] bg-cover bg-center h-screen flex flex-col place-content-center place-items-center">
      <h3 className="text-white text-center text-4xl">Savory & <br /> Sweet</h3>
      <img src={welcomeImage} alt="Welcome Image" />
    </div>
  );
}