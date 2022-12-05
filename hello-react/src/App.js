import './App.css';
import image1 from './images/image1.png'
import image2 from './images/image2.png'
import image3 from './images/image3.png'
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import image6 from './images/image6.png'

function App() {
  return (
    <div className="App">
      <div className="background-header">
        <div className="second-image-organizer">
          <img className="img-size" src={image1} alt="img one" />
          <img className="img-size" src={image2} alt="img two" />
        </div>

        <div className="header-organizer">
          <h1 className="say-hello">Say hello to ReactJS</h1>
          <p className="say-hello-text">You will learn how to use the most popular frontend library, and become a super Ninja Developer</p>
          <button className="btn">Awesome!</button>
        </div>
      </div>



      <div className="image-organizer">
        <div>
          <img src={image3} alt="img three" />
          <h3 className="title">Declaritive</h3>
          <p className='title-text'>React Makes it painless to create interactive UIs.</p>
        </div>
        
        <div>
          <img src={image4} alt="img four" />
          <h3 className="title">Components</h3>
          <p className='title-text'>Build encapsulated components that manage their state.</p>
        </div>
        
        <div>
          <img src={image5} alt="img five" />
          <h3 className="title">Single-Way</h3>
          <p className='title-text'>A set of immutable values are passed to the component's.</p>
        </div>
        
        <div>
          <img src={image6} alt="img six" />
          <h3 className="title">JSX</h3>
          <p className='title-text'>Statically-Typed, designed to run on modern browsers.</p>
        </div>
        

      </div>
      

    </div>
  );
}

export default App;
