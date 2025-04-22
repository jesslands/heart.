'use client';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NavbarWrapper = styled.nav<{ $isScrolled: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: black;
  border-radius: ${props => props.$isScrolled ? '0' : '9999px'};
  margin: ${props => props.$isScrolled ? '0' : '1rem 0'};
  position: ${props => props.$isScrolled ? 'fixed' : 'relative'};
  top: ${props => props.$isScrolled ? '0' : 'auto'};
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  width: ${props => props.$isScrolled ? '100%' : '100%'};
  max-width: ${props => props.$isScrolled ? '100%' : '100%'};

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
  text-decoration: none;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: black;
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 0.5rem;
  gap: 1rem;
  z-index: 50;

  @media (min-width: 768px) {
    display: flex;
    position: static;
    flex-direction: row;
    padding: 0;
    background-color: transparent;
    gap: 2rem;
    margin-top: 0;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  text-align: center;
  
  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const MenuButton = styled.button`
  color: white;
  background: none;
  border: none;
  display: block;
  padding: 0.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavbarSpacer = styled.div<{ $isScrolled: boolean }>`
  height: ${props => props.$isScrolled ? '72px' : '0'};
  transition: height 0.3s ease;
`;

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavbarWrapper $isScrolled={isScrolled}>
        <Logo href="/">
          <img 
            src="/logos/white.png" 
            alt="Logo" 
            className="w-6 h-6 md:w-7 md:h-7 mr-2"
            loading="lazy"
          />
          Heart.
        </Logo>
        
        <MenuButton 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          ☰
        </MenuButton>
        
        <NavLinks $isOpen={isMenuOpen} className="hidden md:flex">
          <NavLink href="/onbuilding" onClick={() => setIsMenuOpen(false)}>Personas</NavLink>
          <NavLink href="/onbuilding" onClick={() => setIsMenuOpen(false)}>Negocios</NavLink>
          <NavLink href="/onbuilding" onClick={() => setIsMenuOpen(false)}>Partners</NavLink>
          <NavLink href="/onbuilding" onClick={() => setIsMenuOpen(false)}>Sobre Heart</NavLink>
        </NavLinks>
        
        <Link href="/onbuilding">
          <Button variant="outline" className="hidden md:block">
            Inicia Sesión
          </Button>
        </Link>
      </NavbarWrapper>
      <NavbarSpacer $isScrolled={isScrolled} />
    </>
  );
};

export default Navbar;