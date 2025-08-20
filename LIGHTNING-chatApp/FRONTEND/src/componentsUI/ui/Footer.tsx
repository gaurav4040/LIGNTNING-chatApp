import { Hexagon, Github, Linkedin } from "lucide-react"
import { FooterComponent } from "@/components/ui/footer"

function Footer() {
  return (
    <div className="w-full bg-gray-950">
      <FooterComponent
        logo={<Hexagon className="h-10 w-10" />}
        brandName="Lightning Corp"
        byWhom ="-by Gaurav Jangra" 
        socialLinks={[
          {
            icon: <Linkedin className="h-5 w-5" />,
            href: "https://linkedin.com/in/gauravjangra-",
            label: "linkedIn",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com/gaurav4040",
            label: "GitHub",
          },
        ]}
        mainLinks={[
          { href: "/home", label: "Products" },
          { href: "/home", label: "About" },
          { href: "/home", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ]}
        legalLinks={[
          { href: "/home", label: "Privacy" },
          { href: "/home", label: "Terms" },
        ]}
        copyright={{
          text: "© 2024 Lightning Corp",
          license: "All rights reserved",
        }}
      />
    </div>
  )
}

export { Footer }