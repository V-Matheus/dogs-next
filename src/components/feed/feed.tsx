import { Photo } from '@/actions/photos-get';
import FeedPhotos from './feed-photos';

interface FeedProps {
  photos: Photo[];
}

export default async function Feed({ photos }: FeedProps) {

  return (
    <div>
      <FeedPhotos photos={photos} />
    </div>
  );
}
