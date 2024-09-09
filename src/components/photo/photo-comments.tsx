'use client';

import React from 'react';
import { PhotoCommentsForm } from './photo-comments-form';
import styles from './photo-comments.module.css';
import { useUSer } from '@/context/user-context';
import { Comment } from '@/actions/photo-get';

export default function PhotoComments(props: {
  single: boolean;
  id: number;
  comments: Comment[];
}) {
  const [comments, setComments] = React.useState(() => props.comments);
  const commentsSection = React.useRef<HTMLUListElement>(null);

  const { user } = useUSer();

  React.useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>
              {comment.comment_author}: <span>{comment.comment_content}</span>
            </b>
          </li>
        ))}
      </ul>
      {user && (
        <PhotoCommentsForm
          single={props.single}
          id={props.id}
          setComments={setComments}
        />
      )}
    </>
  );
}
