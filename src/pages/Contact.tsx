import ContactForm from "@/components/ContactForm";
import { Container } from "@/components/container";
import Heading from "@/components/Heading";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/navbar/footer";
import SubHeading from "@/components/SubHeading";

const Contact = () => {
  return (
    <section>
        <div className="min-h-screen flex items-start justify-start">
            <Container className="min-h-screen p-4 md:pt-20">
                <Navbar/>
                <Heading>Contact Me</Heading>
                <SubHeading>
                    I'm open to freelancing offers. Reach out to me more about my work.
                </SubHeading>
                <ContactForm/>
                <Footer/>
            </Container>
        </div>
    </section>
  )
}

export default Contact
