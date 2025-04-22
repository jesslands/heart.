'use client';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background);
`;

const Content = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: var(--foreground);
`;

export default function OnBuildingPage() {
  const router = useRouter();

  return (
    <Container>
      <Content>
        <Title>Esta página está en construcción</Title>
        <Button 
          variant="primary" 
          onClick={() => router.back()}
        >
          Regresar
        </Button>
      </Content>
    </Container>
  );
}