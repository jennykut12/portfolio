"use client"
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import Image from "next/image";
import Humbleicon from '../../../public/humble.png'

type Props = {
    e : any
};

const FormContact = (props: Props) => {

    const form = useRef();
    const [sent, setSent] = useState(false);

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    
        emailjs.sendForm('service_tq75rjp', 'template_77lfe6n', form.current, 'yOQ0GMSISuv-7mKwS')
          .then((result) => {
              console.log(result.text);
              setSent(true);
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <div id="form-contact" className="flex flex-col gap-12 lg:gap-0 lg:flex-row py-20 items-center justify-between">
      <div className=" lg:w-1/2">
        <p className=" text-3xl lg:text-6xl font-semibold">
          Get in touch <span className=" text-orange">Contact me</span>
        </p>
      </div>
      <div className=" w-full lg:w-1/2">
        {
            !sent ? 
            <form className="flex flex-col gap-6" ref={form} onSubmit={sendEmail}>
                <input className="card focus:outline-orange border-2 p-4 border-orange" required type='text' name='user_name' placeholder='Fullname'/>
                <input className="card focus:outline-orange border-2 p-4 border-orange" required type='email' name='user_email' placeholder='Email'/>
                <textarea className="card focus:outline-orange border-2 py-6 px-4 border-orange"  required name='message' placeholder='Message' />
                <button className="btn button mt-5 rounded-2xl lg:text-lg font-bold bg-orange border-orange text-white px-12 lg:px-20">Submit</button>
            </form>
            : 
            <div>
                <p>Email Recieved With Thanks</p>
                <Image src={Humbleicon} alt=""/>
            </div>
        }
      </div>
    </div>
  );
};

export default FormContact;
