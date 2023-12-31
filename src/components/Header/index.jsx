import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@nextui-org/react'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'About Us', href: '#' },
    { name: 'What we do', href: '#' },
    { name: 'Why choose us', href: '#' },
    { name: 'Testimonial', href: '#' },
    { name: 'Contact', href: '#' },
  ]

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      maxWidth={'full'}
      shouldHideOnScroll={true}
      className="mx-auto max-w-[1600px] justify-center bg-[#f9f9f9]"
    >
      <NavbarContent data-justify={''}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden"
        />
        <NavbarBrand>
          <Image src="/images/logo.png" height={56} width={162} alt="Future Humans Logo" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="ml-[60px] hidden gap-[60px] lg:flex">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link href={item.href} className="text-[16px] text-dark">
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end" className="bl-1 gap-[60px]">
        <NavbarItem className="hidden lg:flex ">
          <Link className="text-[16px] text-secondary" href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[16px] text-primary" href="#">
            Sign Up
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-dark" href={item.href}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
