import React, { useRef, Suspense, useState } from 'react'
import { OrbitControls, useGLTF, Preload } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import emailjs from "@emailjs/browser";
import dotenv from 'dotenv'
import './Contact.css'
import { useParallax } from 'react-scroll-parallax';

const Earth = () => {
    const earth = useGLTF("./planet/scene.gltf");

    return (
        <primitive object={earth.scene} scale={5} position-y={0} rotation-y={0} />
    );
};

const Contact = () => {
    const parallaxH1= useParallax<HTMLHeadingElement>({scale:[2,0.6]});

    const formRef = useRef<HTMLFormElement>(null)
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState("");

    const handleChange = (e: { target: any; }) => {
        const { target } = e;
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID!,
                process.env.REACT_APP_TEMPLATE_ID!,
                formRef.current!,
                process.env.REACT_APP_PUBLIC_KEY!
            )
            .then(
                (result) => {
                    setIsSubmitted("Message sent successfully! ✅");
                },
                (error) => {
                    setIsSubmitted("Message not sent!");
                }
            );
    }

    return (
        <section
            id="contact"
            className="contact"
        >
            <h1 ref={parallaxH1.ref} className="contact-title">Contact</h1>
            <div className="contact-wrap">
                <div className="contact-form-wrapper">
                    <form ref={formRef} onSubmit={handleSubmit} className='contact-form'>
                        <label className='label-form'><span className='field-contact-text'>Your Name</span>
                            <input value={form.name} onChange={handleChange} type="text" name="name" placeholder="Name" className='input-form-text' />
                        </label>
                        <label className='label-form'><span className='field-contact-text'>Your Email</span>
                            <input value={form.email} onChange={handleChange} type="email" name="email" placeholder="Email" className='input-form-text' />
                        </label>
                        <label className='label-form'><span className='field-contact-text'>Your Message</span>
                            <textarea value={form.message} onChange={handleChange} name="message" placeholder="Message" className='input-form-area' />
                        </label>
                        <button type="submit" className='button-form'>Send</button>
                        <div className='contact-message'>
                            {isSubmitted}
                        </div>
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
                                autoRotateSpeed={3}
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