'use client';
import React from 'react';
import styled from 'styled-components';
import HeardHero from '@/components/hero';
import ProductSection from '@/components/ProductSection';
import productsData from '@/jsons/products.json';
import type { Product } from '@/types/product';

const MainContainer = styled.main`
  min-height: 100vh;
  background: var(--background);
`;

const ContentWrapper = styled.div`
  max-width: 90%;
  margin: 0 auto;

  @media (max-width: 767px) {
    max-width: 100%;
  }
`;

const SectionDivider = styled.div`
  height: 4rem;
`;

export default function Home() {
  const products: Product[] = productsData.products;

  return (
    <MainContainer>
      <ContentWrapper>
        <HeardHero 
          title="Heart."
          subtitle="Tu banco en todos lados"
          description="Administra tu dinero desde cualquier lugar con nuestra aplicación móvil. Hacer operaciones bancarias sobre la marcha nunca ha sido tan fácil con nuestra app."
          ctaButtons={[
            { text: "Comenzar", variant: "outline" },
            { text: "Abrir cuenta", variant: "primary" }
          ]}
          featureTitle="Todo en una sola plataforma"
          featureDescription="Con décadas de experiencia y un compromiso con el servicio personalizado, garantizamos un viaje sin complicaciones."
          mockupImage="/logos/mokup.png"
        />
        
        <SectionDivider />
        
        <ProductSection 
          products={products}
          supportCardTitle="Te apoyamos en tu crecimiento"
          supportCardDescription="Descubre nuestros productos financieros diseñados para ti"
        />
      </ContentWrapper>
    </MainContainer>
  );
}
