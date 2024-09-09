import photoGet from '@/actions/photos-get';
import userGet from '@/actions/user-get';
import Feed from '@/components/feed/feed';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Minnha Conta',
};

export default async function ContaPage() {
  const { data: user } = await userGet();
  const { data } = await photoGet({ user: user?.username });

  return (  
    <main>
      {data?.length ? (
        <Feed photos={data} />
      ) : (
        <div>
          <p
            style={{ color: '444', fontSize: '1.25rem', marginBottom: '1rem' }}
          >
            Nenhuma foto encontrada
          </p>
          <Link href={'/conta/postar'} style={{display: 'inline-block'}} className='button'>Postar Foto</Link>
        </div>
      )}
    </main>
  );
}
