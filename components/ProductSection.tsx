'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import type { Product, ProductCategory } from '@/types/product';

interface ProductSectionProps {
  products: Product[];
  supportCardTitle: string;
  supportCardDescription: string;
}

const categories: ProductCategory[] = ['Todos', 'Cuentas', 'Tarjetas', 'Inversiones', 'Préstamos'];

const Container = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 1rem;
  
  @media (min-width: 640px) {
    padding: 2rem 1rem;
  }
`;

interface TabProps {
  $active: boolean;
}

const TabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  
  @media (min-width: 640px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }
`;

const Tab = styled.button<TabProps>`
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background-color: ${props => props.$active ? '#5a5dc8' : 'white'};
  color: ${props => props.$active ? 'white' : 'black'};
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: 0.875rem;
  margin: 0.25rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  &:focus {
    outline: 2px solid #5a5dc8;
    outline-offset: 2px;
  }

  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.25rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
  
  @media (min-width: 640px) {
    padding: 1.5rem;
  }
`;

const SupportCard = styled(ProductCard)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #5a5dc8;
  color: white;
  min-height: 300px;
`;

const ProductTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #1a1a1a;
  
  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const ProductInfo = styled.div`
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  
  @media (min-width: 640px) {
    font-size: 1rem;
  }
`;

const ViewDetailsButton = styled(Link)`
  display: inline-block;
  background-color: #5a5dc8;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  text-decoration: none;
  margin-top: 1rem;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #4b4da6;
  }

  &:focus {
    outline: 2px solid #5a5dc8;
    outline-offset: 2px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  
  @media (min-width: 640px) {
    font-size: 2.5rem;
  }
`;

const ProductSection: React.FC<ProductSectionProps> = ({
  products,
  supportCardTitle,
  supportCardDescription
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('Todos');

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const getSectionTitle = () => {
    if (selectedCategory === 'Todos') {
      return 'Nuestros Productos';
    }
    return (
      <>
        Encuentra tu <span className="font-bold">{selectedCategory.slice(0, -1)}</span> en Heart.
      </>
    );
  };

  return (
    <Container>
      <SectionTitle id="productos-titulo">
        {getSectionTitle()}
      </SectionTitle>
      
      <TabsContainer role="tablist" aria-label="Categorías de productos">
        {categories.map(category => (
          <Tab
            key={category}
            $active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
            role="tab"
            aria-selected={selectedCategory === category}
            aria-controls={`panel-${category}`}
            id={`tab-${category}`}
          >
            {category}
          </Tab>
        ))}
      </TabsContainer>

      <ProductGrid role="tabpanel" id={`panel-${selectedCategory}`} aria-labelledby={`tab-${selectedCategory}`}>
        {selectedCategory === 'Todos' && (
          <SupportCard>
            <h3 className="text-3xl font-bold mb-4">{supportCardTitle}</h3>
            <p className="text-lg">{supportCardDescription}</p>
          </SupportCard>
        )}
        {filteredProducts.map(product => (
          <ProductCard key={product.id}>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductInfo>
              <span className="font-medium">Tipo:</span> {product.type}
            </ProductInfo>
            {product.interestRate && (
              <ProductInfo>
                <span className="font-medium">Tasa de interés:</span> {product.interestRate}
              </ProductInfo>
            )}
            {product.riskLevel && (
              <ProductInfo>
                <span className="font-medium">Nivel de riesgo:</span> {product.riskLevel}
              </ProductInfo>
            )}
            <ProductInfo>{product.description}</ProductInfo>
            <ViewDetailsButton 
              href={`/product/${product.id}`}
              aria-label={`Ver detalles de ${product.name}`}
            >
              Ver detalles
            </ViewDetailsButton>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default ProductSection;