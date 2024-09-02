import { Photo } from '@/actions/photos-get';
import FeedPhotos from './feed-photos';

export default async function Feed({ photos }: { photos: Photo[] }) {
  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
