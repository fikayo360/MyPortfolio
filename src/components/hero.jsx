import React, { Suspense } from "react";
import './appStyles.css'
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function Hero(){
    return(
    <div id='hero'>
       
        <div id='heroWrapper'>
        <div id='heroLeft'>
            <h1 id='heroLeftMaintxt'>
                FIKAYO
            </h1>
           
            <p id='heroLeftOtherTxt'> i help businesses and companies reach their goals by designing and developing 
                user centric digital products and experiences
            </p>
        </div>
        <div id='heroRight'>
        <Canvas id='canvas'>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1.3} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>

          <img id='heroImg' src="./img/char3.png" />
        </div>
        
        </div>
    </div>)
}

export default Hero