import html from '@/assets/icons/html.png'
import css from '@/assets/icons/css.png'
import javascript from '@/assets/icons/javascript.png'
import react from '@/assets/icons/react.png'
import git from '@/assets/icons/git.png'
import figma from '@/assets/icons/figma.png'
import wordpress from '@/assets/icons/wordpress.png'
import webflow from '@/assets/icons/webflow.png'
import shopify from '@/assets/icons/shopify.png'

const Skills = () => {
    const softwares = [
        {
            id:1,
            logo:html,
            title:'HTML',
            desc:'Structured and semantic HTML development.'
        },
        {
            id:2,
            logo:css,
            title:'CSS',
            desc:'Responsive and scalable CSS styling.'
        },
        {
            id:3,
            logo:javascript,
            title:'JavaScript',
            desc:'Interactive and dynamic JavaScript functionality.'
        },
        {
            id:4,
            logo:react,
            title:'React Js',
            desc:'Component-driven and scalable SPA development.'
        },
        {
            id:5,
            logo:git,
            title:'Git',
            desc:'Version control and collaborative workflow.'
        },
        {
            id:6,
            logo:figma,
            title:'Figma',
            desc:'Collaborative design and prototyping.'
        },
        {
            id:7,
            logo:wordpress,
            title:'Wordpress',
            desc:'Content management Software to build websites.'
        },
        {
            id:8,
            logo:webflow,
            title:'Webflow',
            desc:'Visual development and CMS-driven websites with Webflow.'
        },
        {
            id:9,
            logo:shopify,
            title:'Shopify',
            desc:'End to End eCommerce store development.'
        },
    ]
  return (
    <section className="py-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
            {softwares.map((items)=>(
                <div className=''>
                    <div className='inline-flex gap-4'>
                        <img width={70} src={items.logo} alt={items.title} />
                        <div className=''>
                            <h3 className='text-[15px] text-neutral-700'>{items.title}</h3>
                            <p className='text-sm max-w-50 text-neutral-400 font-medium'>{items.desc}</p>
                        </div>
                    </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Skills
