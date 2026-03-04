import { Container } from "@/components/container";
import Projects from "@/components/Projects";
import { Navbar } from "@/components/navbar";
import { LoopTextSwitcher } from "@/components/LoopTextSwitcher";
import { Eyebrow } from "@/components/Eyebrow";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import Footer from "@/components/navbar/footer";
import Enquiry from "@/components/Enquiry";
import PageLayout from "@/components/PageLayout";

export default function Home(){
    return (
        <section>
           <PageLayout>
                <Navbar/>
                <Container className="px-4 pt-20 ">
                    <div className="lg:inline-flex gap-4 items-center">
                        <Heading>Venkata Prahith Giddaluri</Heading>
                        <LoopTextSwitcher />
                    </div>
                    <SubHeading>
                        Hello, I'm Prahith — a Frontend Engineer from Hyderabad, India, with over 3 years of professional experience 
                        building and maintaining responsive web applications. I specialize in developing scalable, high-performance
                        interfaces.
                    </SubHeading>
                    <div className="py-6"><Projects/></div>
                    <div className="py-8" id="experience">
                        <Eyebrow>Work Experience</Eyebrow>
                        <div>
                            <WorkExperience/>
                        </div>
                    </div>
                    <div className="py-6">
                        <Eyebrow>Skills & Software</Eyebrow>
                        <Skills/>
                    </div>
                    <div id="contact" className="py-6">
                        <Eyebrow>Get In Touch</Eyebrow>
                        <div className="py-2">
                            <SubHeading>I'm Currently looking for new opportunities. Whether you have a question or want to talk, fill the form.</SubHeading>
                        </div>
                        <Enquiry/>
                    </div>
                    <Footer/>
                </Container>
           </PageLayout>
        </section>
    )
}