import { Post } from './post.model';

export class Like {
    Id: number;
    ApplicationUserId: string;
    CurrentPostId: number;
    Post: Post;
}
