"use client";
import Forrecaed from '@/assets/images/Forrecard.png'
import Flashgard from '@/assets/images/Flashgard.png'
import mountdios from '@/assets/images/mountdios.png'
import zapversecard from '@/assets/images/zapversecard.png'
import {motion} from 'motion/react';
import { Link } from 'react-router-dom';
import { Eyebrow } from '@/components/Eyebrow';

const Projects = () => {

    const projects = [
        {
            id:1,
            title:'Zapverse',
            src: zapversecard,
            desc:'A mordern media & telecom industry powered by Generative AI',
            href:'https://zapverse.vercel.app/'
        },
        {
            id:2,
            title:'Flashgard',
            src: Flashgard,
            desc:'Offers premium mobile and laptop skins & screen guards.',
            href:'https://flashgard.in/'
        },
        {
            id:3,
            title:'Forre',
            src: Forrecaed,
            desc:'Provides custom furniture and space styling solutions.',
            href:'https://forre.space/'
        },
        {
            id:4,
            title:'Mount Dios International School',
            src: mountdios,
            desc:'A modern International School with global-standard academics and infrastructure',
            href:'https://mountdios.com/',
        }
    ]

  return (
    <div className="py-6">
      <Eyebrow>Projects</Eyebrow>  
      {/* <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">I love building web apps and products that can impact millions of lives</p> */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-4'>
            {projects.map((project,idx)=>(
                <motion.div 
                    initial={{opacity:0,filter:'blur(10px)',y:10}}
                    whileInView={{opacity:1, filter:'blur(0px)',y:0}}
                    transition={{
                        duration:0.3,
                        delay: idx*0.1,
                        ease:'easeInOut'
                    }}
                    key={project.title} className='group relative mb-4'>
                        <Link target='_blank' to={project.href}>
                            <img className='h-62 rounded-xl object-cover group-hover:scale-[1.02] transition duration-200' src={project.src} alt={project.title}  />
                            <h2 className='z-20 mt-2 font-medium tracking-tight text-neutral-800 dark:text-neutral-400'>{project.title}</h2>
                            <p className='max-w-xs mt-1 text-sm text-neutral-500 dark:text-neutral-400'>{project.desc}</p>
                        </Link>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Projects
