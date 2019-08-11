import { Like } from './like.model';
import { DisLike } from './dislike.model';

export class Post {
    Id: number;
    Title: string;
    Description: string;
    ImagePath: string;
    PostedDateTime: Date;
    Likes: Like[];
    DisLikes: DisLike[];
    Rating: number;
    AuthorFullName: string;
    ApplicationUserId: string;
    Image: File;
}

