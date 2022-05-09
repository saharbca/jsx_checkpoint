import logo from './logo.svg';
import './style.css';
import pic from './img/imageInSrc.png';
function App() {
  return (
<>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Sahar</h1>
    <br />
    <img src={pic}  />
    <br />
    <img src="./imageInPublic.png" />
  </div>
  <video width={320} height={240} controls="">
    <source src="myVideo.mp4" type="video/mp4" />
  </video>
</>

  );
}

export default App;
