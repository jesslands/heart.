'use client';
import React from 'react';
import styled from 'styled-components';
import WaveSVG from '@/components/icons/waves';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaButtons: Array<{
    text: string;
    variant: 'primary' | 'outline';
  }>;
  featureTitle: string;
  featureDescription: string;
  mockupImage: string;
}

const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroSection = styled.div`
  text-align: center;
  padding-top: 4rem; 
  position: relative;
  overflow: hidden;
  background: radial-gradient(circle at center, #f9fafb 0%, #f3f4f6 100%);
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 0.875rem;
  margin-bottom: 2rem;
  color: #4b5563;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  padding: 0 1rem;
  
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    padding: 0;
  }
`;

const FeatureSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 1rem;
  gap: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 4rem 0;
  }
`;

const FeatureContent = styled.div`
  width: 100%;
  text-align: center;
  
  @media (min-width: 768px) {
    width: 45%;
    text-align: left;
  }
`;

const FeatureTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const FeatureDescription = styled.div`
  width: 100%;
  color: #6b7280;
  line-height: 1.6;
  text-align: center;
  
  @media (min-width: 768px) {
    width: 45%;
    text-align: left;
  }
`;

const PhoneDisplay: React.FC<{imageUrl: string}> = ({ imageUrl }) => (
  <div className="relative mx-2">
    <img 
      src={imageUrl} 
      alt="App screenshot" 
      className="w-full md:w-[80%] mx-auto"
      loading="lazy"
    />
  </div>
);

const HeardHero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  ctaButtons,
  featureTitle,
  featureDescription,
  mockupImage
}) => {
  return (
    <div className="font-sans text-gray-900">
      <Container>
        <Navbar />
        
        <HeroSection>
          <div className="max-w-3xl mx-auto">
            <HeroTitle>{title} <br />{subtitle}</HeroTitle>
            <HeroSubtitle>{description}</HeroSubtitle>
            
            <ButtonGroup>
              {ctaButtons.map((button, index) => (
                <Link href="/onbuilding" key={index}>
                  <Button variant={button.variant}>
                    {button.text}
                  </Button>
                </Link>
              ))}
            </ButtonGroup>

            <PhoneDisplay imageUrl={mockupImage} />
          </div>
          <WaveSVG className="-mt-50" />
        </HeroSection>
        
        <FeatureSection>
          <FeatureContent>
            <FeatureTitle>{featureTitle}</FeatureTitle>
          </FeatureContent>
          
          <FeatureDescription>
            <p className="mb-6">{featureDescription}</p>
            <Link href="/onbuilding">
              <Button variant="primary">Ver más</Button>
            </Link>
          </FeatureDescription>
        </FeatureSection>
      </Container>
    </div>
  );
};

export default HeardHero;