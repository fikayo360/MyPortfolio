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
           
            <p id='heroLeftOtherTxt'> 
            I am a full-stack developer with experience in building and deploying web applications. 
            I am passionate about creating beautiful and functional websites and mobile apps that help businesses grow online
            I am always looking for new challenges and opportunities to learn and grow. I am confident that I have the skills and experience to help you achieve your business goals
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

          <img id='heroImgg' src="./img/char3.png" />
        </div>
        
        </div>
    </div>)
}

export default Hero