import { PHOTO_GET, PHOTOS_GET } from '@/functions/api';
import apiError from '@/functions/api-error';
import { Photo } from './photos-get';

export type Comment = {
  comment_ID: string;
  comment_post_ID: string;
  comment_author: string;
  comment_content: string;
};

export type PhotoData = {
  photo: Photo;
  comments: Comment[];
};

export async function photoGet(id: string) {
  try {
    const { url } = PHOTO_GET(id);
    const response = await fetch(url, {
      next: {
        revalidate: 60,
        tags: ['photos', 'comment'],
      },
    });

    if (!response.ok) throw new Error('Error ao pegar a foto');

    const data = (await response.json()) as PhotoData;
    return { data, ok: true, error: null };
  } catch (error) {
    return apiError(error);
  }
}
