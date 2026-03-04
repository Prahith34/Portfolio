"use client";
import { useState } from "react";
import { toast } from "sonner";


const ContactForm = () => {
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("Handle Submit Clicked");

        const {name, email, message} = formData;

        if(!name || !email || !message){
            toast.error("Please fill the all the fields");
            return;
        }

        // call your API hero to submit the form
        // here's a mock API cal for you

        const response = await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("API call successfully");
            },1000);
        });

        if(response){
            toast.success("Form Submitted successgully");
        }else{
            toast.error("Something went wrong");
        }

        }

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:'',
    });

    const handleChange = (
        e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-lg mx-auto py-10">
       <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-neutral-600 tracking-tight">Full Name</label>
            <input id="name" name="name" className="text-sm shadow-aceternity px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" onChange={handleChange} type="text" placeholder="Enter Your Name"/>
       </div>
       <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-neutral-600 tracking-tight">Email Address</label>
            <input id="email" name="email" className="text-sm shadow-aceternity px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" onChange={handleChange} type="text" placeholder="jondoe@gmail.com"/>
       </div>
       <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-neutral-600 tracking-tight">Message</label>
            <textarea rows={5} id="message" name="message" className="text-sm shadow-aceternity px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none" onChange={handleChange} placeholder="Enter your message"/>
       </div>
       <button type="submit" className="rounded-md bg-primary px-4 py-2 text-white" >
            Send Message
       </button>
    </form>
  )
}

export default ContactForm
