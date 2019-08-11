import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'myUploads'
})
export class MyUploadsFilterPipe implements PipeTransform {
    transform(postList: any, filterCurUserId: string): any[] {
        if (!postList) { return []; }
        if (!filterCurUserId) { return postList; }
        return postList.filter(post => post.ApplicationUserId === filterCurUserId);
    }
}

