import profileImage from '../assets/profile.jpg'; // ಫೋಟೋ ಇರುವ ಸರಿಯಾದ ಪಾತ್ (Path) ಕೊಡಿ

function Home() {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl font-bold">Sushmitha</h1>
      <p className="text-lg">Full Stack Developer || MERN Stack + PHP Stack</p>
      <img 
        src={profileImage} 
        alt="Sushmitha" 
        className="w-40 h-40 rounded-full border-4 border-white mt-4 object-cover" 
      />
    </div>
  );
}

export default Home;