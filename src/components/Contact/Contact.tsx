import React, { useRef, Suspense } from 'react'
import { Stats, OrbitControls, Circle, useGLTF, Preload } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import './Contact.css'

const Earth = () => {
    const earth = useGLTF("./planet/scene.gltf");

    return (
        <primitive object={earth.scene} scale={5} position-y={0} rotation-y={0} />
    );
};

const Contact = () => {
    return (
        <section
            id="contact"
            className="contact"
        >
            <h1 className="contact-title">Contact</h1>
            <div className="contact-wrap">
                <div className="contact-form-wrapper">
                    <form method="POST" className='contact-form'>
                        <label className='label-form'><span className=''>Your Name</span>
                            <input type="text" name="name" placeholder="Name" />
                        </label>
                        <label className='label-form'><span className=''>Your Email</span>
                            <input type="email" name="email" placeholder="Email" />
                        </label>
                        <label className='label-form'><span className=''>Your Message</span>
                            <textarea name="message" placeholder="Message" />
                        </label>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="contact-planet">
                    <Canvas
                        shadows
                        frameloop='demand'
                        dpr={[1, 2]}
                        gl={{ preserveDrawingBuffer: true }}
                        className='canvas'
                        camera={{
                            fov: 45,
                            near: 0.1,
                            far: 200,
                            position: [0, 0, 20],
                        }}
                    >
                        <Suspense fallback={null}>
                            <OrbitControls
                                autoRotate
                                autoRotateSpeed={2}
                                enableZoom={false}
                                maxPolarAngle={Math.PI / 2}
                                minPolarAngle={Math.PI / 2}
                            />
                            <Earth />
                            <Preload all />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Contact