'use client';
import { useParams } from 'next/navigation';
import styled from 'styled-components';
import Link from 'next/link';
import productsData from '@/jsons/products.json';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/navbar';

const Container = styled.div`
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  padding: 1rem;
  
  @media (min-width: 640px) {
    padding: 2rem 1rem;
  }
`;

const ProductDetails = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: #5a5dc8;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  text-decoration: none;
  margin-bottom: 1rem;
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

const ProductAttribute = styled.div`
  margin-bottom: 1.5rem;
`;

const AttributeLabel = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const AttributeValue = styled.p`
  color: #6b7280;
  font-size: 1rem;
  line-height: 1.5;
`;

const BenefitsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  color: #4b5563;
  
  &:before {
    content: "✓";
    color: #5a5dc8;
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const ChartContainer = styled.div`
  background: #f9fafb;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 2rem 0;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = productsData.products.find(p => p.id === productId);

  if (!product) {
    return (
      <Container>
        <BackButton href="/" aria-label="Volver al catálogo">
          ← Volver al catálogo
        </BackButton>
        <ProductDetails>
          <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
          <p className="text-gray-600">Lo sentimos, el producto que buscas no existe.</p>
        </ProductDetails>
      </Container>
    );
  }

  const benefits = [
    'Atención personalizada 24/7',
    'Sin comisiones ocultas',
    'Acceso a la app móvil',
    'Notificaciones en tiempo real'
  ];

  return (
    <Container>
      <Navbar />
      <BackButton href="/" aria-label="Volver al catálogo">
        ← Volver al catálogo
      </BackButton>
      
      <ProductDetails>
        <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

        <ProductAttribute>
          <AttributeLabel>Descripción</AttributeLabel>
          <AttributeValue>{product.description}</AttributeValue>
        </ProductAttribute>

        <ProductAttribute>
          <AttributeLabel>Tipo de Producto</AttributeLabel>
          <AttributeValue>{product.type}</AttributeValue>
        </ProductAttribute>

        {product.interestRate && (
          <ProductAttribute>
            <AttributeLabel>Tasa de Interés</AttributeLabel>
            <AttributeValue>{product.interestRate}</AttributeValue>
          </ProductAttribute>
        )}

        {product.riskLevel && (
          <ProductAttribute>
            <AttributeLabel>Nivel de Riesgo</AttributeLabel>
            <AttributeValue>{product.riskLevel}</AttributeValue>
          </ProductAttribute>
        )}

        <ProductAttribute>
          <AttributeLabel>Beneficios</AttributeLabel>
          <BenefitsList>
            {benefits.map((benefit, index) => (
              <BenefitItem key={index}>{benefit}</BenefitItem>
            ))}
          </BenefitsList>
        </ProductAttribute>

        <ChartContainer>
          <h2 className="text-xl font-semibold mb-4">Rendimiento Histórico</h2>
          <div className="h-48 flex items-center justify-center text-gray-500">
            Gráfico de rendimiento
          </div>
        </ChartContainer>

        <ActionButtons>
          <Button variant="primary">Solicitar Ahora</Button>
          <Button variant="outline">Más Información</Button>
        </ActionButtons>
      </ProductDetails>
    </Container>
  );
}