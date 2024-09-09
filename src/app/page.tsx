import photoGet from '@/actions/photos-get';
import Feed from '@/components/feed/feed';

export default async function Home() {
  const { data } = await photoGet();
  return (
    <section className="container mainContainer">
      {data?.length ? (
        <Feed photos={data} />
      ) : (
        <div>Sem fotos para mostrar</div>
      )}
    </section>
  );
}
