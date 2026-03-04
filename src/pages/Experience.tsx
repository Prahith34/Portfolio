import { Container } from "@/components/container";
import { Navbar } from "@/components/navbar";
import WorkExperience from "@/components/WorkExperience";

const Experience = () => {
  return (
    <section>
        <div className="min-h-screen flex items-start justify-start">
            <Container className="min-h-screen p-4 md:pt-20 md:pb-10">
                <Navbar/>
                <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">Work Experience</h1>
                {/* <p className="text-secondary pt-4 text-sm md:text-sm ">
                    I'm a Frontend engineer with a passion for building scalable and responsive UI. I have a total of 3 years of Experience.
                </p> */}
                <WorkExperience/>
            </Container>
        </div>
    </section>
  )
}

export default Experience
