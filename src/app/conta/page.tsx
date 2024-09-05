'use client';
import { useUSer } from '@/context/user-context';

export default async function ContaPage() {
  const { user } = useUSer();
  return (
    <main>
      <h1>Conta: {user?.nome}</h1>
    </main>
  );
}
