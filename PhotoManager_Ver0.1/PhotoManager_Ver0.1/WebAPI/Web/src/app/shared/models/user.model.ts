import { Post } from './post.model';

export class User {
Id: string;
Email: string;
Password: string;
ConfirmPassword: string;
FirstName: string;
LastName: string;
Phone: string;
Posts: Post[];
}

