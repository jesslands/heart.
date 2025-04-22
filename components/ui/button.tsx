'use client';
import styled from 'styled-components';

interface ButtonProps {
  variant?: 'primary' | 'outline';
}

export const Button = styled.button<ButtonProps>`
  background-color: ${props => props.variant === 'primary' ? '#5a5dc8' : 'white'};
  color: ${props => props.variant === 'primary' ? 'white' : 'black'};
  border: ${props => props.variant === 'primary' ? 'none' : '1px solid #e2e8f0'};
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.variant === 'primary' ? '#4b4da6' : '#f8f9fa'};
  }

  &:focus {
    outline: 2px solid #5a5dc8;
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;