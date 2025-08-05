"use client";

import Circles from '../../components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'
import { useState } from 'react';
import axios from 'axios';
import { Loader } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const isValid = () => {
    if (form.name !== '' && form.email !== '' && form.subject !== '' && form.message !== '') {
      return true;
    } else {
      return false;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid()) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/api/contact",
        { ...form }
      );

      if(res.status === 200){
        alert("Message sent successfully!");
        setForm({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className='h-full bg-primary/30'>
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className='flex flex-col items-center w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mb-8 h2 text-center lg:mb-12'
          >Let&apos;s <span className='text-accent'>Connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            <div className='flex gap-6 w-full'>
              <input type="text" placeholder='name' name='name' value={form.name} className='input' onChange={handleForm} required />
              <input type="email" placeholder='email' name='email' value={form.email} className='input' onChange={handleForm} required />
            </div>
            <input type="text" placeholder='subject' name='subject' value={form.subject} className='input' onChange={handleForm} required />
            <textarea placeholder='message' name='message' value={form.message} className='textarea' onChange={handleForm} required />
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group' onClick={handleSubmit} disabled={loading}>
              {loading ? <><Loader className='animate-spin'/> Sending...</>: <><span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&apos;s talk</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 group-hover:transition-all duration-300 absolute text-[22px]' /></>}
            </button>
          </motion.form>
        </div>
      </div>
      <Circles />
    </div>
  )
};

export default Contact;