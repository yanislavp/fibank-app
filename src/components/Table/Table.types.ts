import type { ReactNode } from 'react';
import type { Person } from '@/api/types';

export interface TableColumn {
  key: string;
  header: string;
  render: (row: Person) => ReactNode;
}

export interface TableProps {
  columns: TableColumn[];
  rows: Person[];
  getRowKey: (row: Person) => string;
}
