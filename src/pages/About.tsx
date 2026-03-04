import { Container } from "@/components/container";
import { Navbar } from "@/components/navbar";
import WorkExperience from "@/components/WorkExperience";
import { Eyebrow } from "@/components/Eyebrow";
import { MapPin } from "lucide-react";
import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import Footer from "@/components/navbar/footer";
import PageLayout from "@/components/PageLayout";

const About = () => {
  return (
    <section>
        <PageLayout>
            <div className="min-h-screen flex items-start justify-start">
                <Container className="min-h-screen p-4 md:pt-20">
                    <Navbar/>
                    <Heading>About Me</Heading>
                    <SubHeading>
                        I’m a passionate Frontend Engineer dedicated to crafting elegant, intuitive user interfaces that blend visual clarity with 
                        functional precision. I focus on translating design concepts into scalable, maintainable code while ensuring performance, 
                        accessibility, and responsiveness across devices. My approach goes beyond aesthetics — I aim to create 
                        seamless user journeys that feel natural, efficient, and purposeful.
                    </SubHeading>
                    <div className="py-6">
                        <div className="py-6"><Eyebrow>Education</Eyebrow></div>
                        <div className="">
                            <div className="flex gap-2 justify-between items-center">
                                <h5 className="text-[15px] inline-flex gap-2 items-center text-neutral-400"><MapPin color="#a1a1a1" size='16px'/> Kanchipuram, Tamil Nadu.</h5>
                                <h5 className="text-[15px] text-neutral-400">2017 - 2021</h5>
                            </div>
                            <h3 className="text-[17px] text-neutral-600 pt-1">B.E (Mechanical Engineering)</h3>
                            <h5 className="text-[15px] text-neutral-400">Sri Chandrasekharendra Saraswati Viswa Mahavidyalaya University</h5>
                        </div>
                    </div>
                    <div className="py-6">
                        <div className="pt-6">
                            <Eyebrow>Work Experience</Eyebrow>
                        </div>
                        <WorkExperience/>
                    </div>
                    <Footer/>
                </Container>
            </div>
        </PageLayout>
    </section>
  )
}

export default About
