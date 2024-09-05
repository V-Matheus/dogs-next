import ContaPhotoPost from '@/components/conta/conta-photo-post';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Postar | Minnha Conta',
};

export default async function PostarPostar() {
  return (
    <main>
      <h1>Postar</h1>
      <ContaPhotoPost />
    </main>
  );
}
