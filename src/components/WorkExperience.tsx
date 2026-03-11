import novalogo from '@/assets/images/novalogo.svg'
import keyblockslogo from '@/assets/images/keyblockslogo.webp'

const WorkExperience = () => {
    const company = [
        {
            id:'1',
            comapanyName:'Nova Studios HQ',
            logo: novalogo,
            role:'Frontend Developer',
            Duration:'Apr 2024 - Present',
            desc:'Built responsive web applications primarily using React.js, along with WordPress, WooCommerce and Webflow, based on client and project requirements. Optimized and Improved performance metrics by 35%',
        },
        {
            id:'2',
            comapanyName:'Keyblocks Strategy Consulting Pvt. ltd',
            logo: keyblockslogo,
            role:'Web Developer',
            Duration:'Feb 2023 - Mar 2024',
            desc:'Developed and maintained custom WordPress websites using PHP, HTML5, CSS3, and JavaScript, ensuring responsive and cross-browser compatible layouts.',
        },
    ]
  return (
    <section>
        <div className='py-4'>
            {company.map((items)=>(
                <div className='p-2'>
                    <div key={items.id} className='flex gap-4 justify-between items-center'>
                        <div><h3 className='text-[16px] font-semibold text-neutral-800'>{items.comapanyName}</h3></div>
                        <div><img width={140} src={items.logo} alt={items.comapanyName} /></div>
                    </div>
                    <div className='inline-flex gap-4'>
                        <h4 className='text-[15px] text-neutral-700 font-medium'>{items.role}</h4>
                        -
                        <h4 className='text-[15px] text-neutral-400 font-medium'>{items.Duration}</h4>
                    </div>
                    <p className='text-sm text-neutral-500 max-w-2xl'>{items.desc}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default WorkExperience
