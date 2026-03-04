import { Link } from "react-router-dom"
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react"
import { Container } from "@/components/container"


const Footer = () => {
  return (
    <Container className="flex justify-between p-3  border-t border-neutral-100">
      <p className="text-xs text-neutral-500">Built with React by Prahith</p>
      <div className="flex items-center justify-center gap-4">
        <Link target="_blank" to='https://x.com/PrahithGv'>
            <IconBrandX className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link target="_blank" to='https://www.linkedin.com/in/venkata-prahith/'> 
            <IconBrandLinkedin className="size-4 text-neutral-500 hover:text-neutral-700" /> 
        </Link>
        <Link target="_blank" to='https://github.com/Prahith34'>
            <IconBrandGithub className="size-4 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </Container>
  )
}

export default Footer
