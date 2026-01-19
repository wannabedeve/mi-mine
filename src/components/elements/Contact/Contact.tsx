// 'use client'
// import { useState, useEffect } from 'react';
// import './contact.scss';
// import Swal from 'sweetalert2';

// const ContactMe = () => {
//     const [nameFocused, setNameFocused] = useState(false);
//     const [emailFocused, setEmailFocused] = useState(false);
//     const [msgFocused, setMsgFocused] = useState(false);


//     async function handleSubmit(event: any) {
//         event.preventDefault();
//         const formData = new FormData(event.target);

//         formData.append("access_key", "516d5bdc-1265-422d-b00c-48400c623a8b");

//         const object = Object.fromEntries(formData);
//         const json = JSON.stringify(object);

//         const response = await fetch("https://api.web3forms.com/submit", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json"
//             },
//             body: json
//         });
//         const result = await response.json();
//         if (result.success) {
//             Swal.fire({
//                 title: 'Thanks!',
//                 text: 'Your message has been sent successfully.',
//                 icon: 'success',
//             })

//         }
//     }






//     useEffect(() => {
//         function handleFocus(e: Event) {
//             const target = e.target as HTMLInputElement | HTMLTextAreaElement;
//             const { value, id } = target;

//             if (value !== '') {
//                 if (id === 'name') setNameFocused(true);
//                 if (id === 'email') setEmailFocused(true);
//                 if (id === 'msg') setMsgFocused(true);
//             } else {
//                 if (id === 'name') setNameFocused(false);
//                 if (id === 'email') setEmailFocused(false);
//                 if (id === 'msg') setMsgFocused(false);
//             }
//         }

//         const inputs = document.querySelectorAll('input, textarea');
//         inputs.forEach((input) => {
//             input.addEventListener('blur', handleFocus);
//         });

//         return () => {
//             inputs.forEach((input) => {
//                 input.removeEventListener('blur', handleFocus);
//             });
//         };
//     }, []);

//     return (

//         // <div className='contact-body'>
//         <section id="hire" className='contact-section w-full mb-[2%]'>
//             {/* <br /><br /><br /><br />
//             <div className="reflect3 md:text-[1.2rem] text-[1rem]">Download Resume (PDF)</div> */}
//             {/* <p className='-mt-[40%] md:-mt-[10%]'></p> */}
//             {/* <Social /> */}
//             <br />
//             <form onSubmit={handleSubmit} className='contact-form'>
//                 <div className="contact-field name-box">
//                     <input
//                         type="text"
//                         id="name"
//                         placeholder="Who Are You?"
//                         className={`contact-input ${nameFocused ? 'focused' : ''}`}
//                         name='name'
//                         required
//                     />
//                     <label htmlFor="name" className='contact-label'>&nbsp;&nbsp;Name</label>
//                     <span className="ss-icon">&#10003;</span>
//                 </div>

//                 <div className="contact-field email-box">
//                     <input
//                         type="text"
//                         id="email"
//                         placeholder="name@email.com"
//                         className={`contact-input ${emailFocused ? 'focused' : ''}`}
//                         name='email'
//                         required
//                     />
//                     <label htmlFor="email" className='contact-label'>&nbsp;&nbsp;Email</label>
//                     <span className="ss-icon">&#10003;</span>
//                 </div>

//                 <div className="contact-field msg-box">
//                     <textarea
//                         id="msg"
//                         rows={4}
//                         placeholder="Your message goes here..."
//                         className={`contact-textarea ${msgFocused ? 'focused' : ''}`}
//                         name='message'
//                         required
//                     />
//                     <label htmlFor="msg" className='contact-label'>&nbsp;&nbsp;Msg</label>
//                     <span className="ss-icon">&#10003;</span>
//                 </div>
//                 <br />
//                 <input className="contact-input w-full" type="submit" value="Send" />
//             </form>

//             <br /><br />

//             <div className='text-center text-white mt-[5%]'>
//                 Email: <br />
//                 <span className='text-[.8rem]'>
//                     khaled.ahmed.alkharashi@gmail.com
//                 </span>
//                 <br />
//                 <br />
//                 Phone Number & WhatsApp: <br /> (+20) 1025 44 0707
//                 <br />
//                 <br />
//                 LinkedIn: <br />
//                 <span className='text-[.8rem]'>
//                     https://www.linkedin.com/in/khaled-al-kharashi-10653b247/
//                 </span>
//             </div>


//         </section>
//         // </div>
//     );
// };

// export default ContactMe;




'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';
import './contact.scss';
import SectionTitle from '@/components/ui/Heading/SectionTitle';
import Social from '../Social/Social';

export default function ContactMe() {
    const [focus, setFocus] = useState({
        name: false,
        email: false,
        msg: false,
    });

    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFocus((prev) => ({
            ...prev,
            [id]: value.length > 0,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append('access_key', '516d5bdc-1265-422d-b00c-48400c623a8b');

        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.fromEntries(formData)),
        });

        const result = await res.json();

        if (result.success) {
            Swal.fire({
                title: 'Thanks!',
                text: 'Your message has been sent successfully.',
                icon: 'success',
            });

            form.reset();
            setFocus({ name: false, email: false, msg: false });
        }
    };

    return (
        <div className="contact-section">
            <div id="earth-bg" aria-hidden="true"></div>
            <div className='conact-content' id='contact-id'>
                <section id="hire" className="contact-section w-full mb-[2%]">
                    <div className='text-center text-white'>
                        <SectionTitle title='Contact' />
                        <br />
                        <Social />
                        <p className='text-center text-white'>
                            Let's Talk!.
                        </p>

                    </div>
                    <br /><br />
                    <form onSubmit={handleSubmit} className="contact-form">

                        {/* NAME */}
                        <div className="contact-field name-box">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Who Are You?"
                                className={`contact-input ${focus.name ? 'focused' : ''}`}
                                onBlur={handleBlur}
                                required
                            />
                            <label htmlFor="name" className="contact-label">
                                &nbsp;&nbsp;Name
                            </label>
                            <span className="ss-icon">&#10003;</span>
                        </div>

                        {/* EMAIL */}
                        <div className="contact-field email-box">
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="name@email.com"
                                className={`contact-input ${focus.email ? 'focused' : ''}`}
                                onBlur={handleBlur}
                                required
                            />
                            <label htmlFor="email" className="contact-label">
                                &nbsp;&nbsp;Email
                            </label>
                            <span className="ss-icon">&#10003;</span>
                        </div>

                        {/* MESSAGE */}
                        <div className="contact-field msg-box">
                            <textarea
                                id="msg"
                                name="message"
                                rows={4}
                                placeholder="Your message goes here..."
                                className={`contact-textarea ${focus.msg ? 'focused' : ''}`}
                                onBlur={handleBlur}
                                required
                            />
                            <label htmlFor="msg" className="contact-label">
                                &nbsp;&nbsp;Msg
                            </label>
                            <span className="ss-icon">&#10003;</span>
                        </div>

                        <br />
                        <input
                            type="submit"
                            value="Get a Free Workflow Review"
                            className="contact-input w-full"
                        >

                        </input>
                    </form>
                </section>
            </div>
        </div>
    );
}
