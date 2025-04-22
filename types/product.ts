export interface Product {
  id: string;
  name: string;
  type: string;
  interestRate?: string;
  category: string;
  riskLevel?: string;
  description: string;
}

export type ProductCategory = 'Todos' | 'Cuentas' | 'Tarjetas' | 'Inversiones' | 'Préstamos';