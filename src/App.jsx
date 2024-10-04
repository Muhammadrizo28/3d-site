import { Canvas } from "@react-three/fiber";
import Model from "./components/Model";
import { OrbitControls } from "@react-three/drei";
import img from './image/image.png';
import '../src/App.css'

function App() {
 
  
  return ( 

    <div style={{width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', backgroundImage: `url(${img})`, backgroundSize: 'cover'}}>


      <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'end',  background: 'linear-gradient(to bottom, rgba(255, 0, 0, 1), rgba(255, 0, 0, 0))'}}>

        <h1 className="unifrakturcook-bold">ECTOPARASITOID</h1>
      <div style={{width: '40%', height : '80%', marginTop : '30%'}}>


        <span className="butcherman-regular ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore impedit quam voluptatibus animi illum officiis nemo tenetur iure sit consequuntur, dolores repudiandae molestiae quis quibusdam explicabo rem porro? Non nulla vitae libero quos fuga nam, corrupti cupiditate quasi dolorum reiciendis inventore eum et pariatur maxime cum soluta deserunt. Error, animi.</span>
      </div>

        <Canvas style={{width: '50%', height: '100%'}} camera={{position: [0, 0, 5], fov: 17}}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={2.4} />
          <Model  position={[0, -1, 0]} />
          <OrbitControls 

            enableZoom={false} 

            minPolarAngle={Math.PI / 180 * 45}  // 90 градусов вниз
            maxPolarAngle={Math.PI / 180 * 110} // 110 градусов вверх


          
          />
        </Canvas>


      </div>
    </div>
  );
}

export default App;
