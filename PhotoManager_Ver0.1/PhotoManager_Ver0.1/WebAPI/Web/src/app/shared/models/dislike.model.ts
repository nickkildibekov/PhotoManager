import { Post } from './post.model';

export class DisLike {
    Id: number;
    ApplicationUserId: string;
    CurrentPostId: number;
    Post: Post;
}
