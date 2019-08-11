import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'mostRated'
})
export class MostRatedFilterPipe implements PipeTransform {
    transform(postList: any, mostrtd: number): any[] {
        if (!postList) { return []; }
        if (!mostrtd) { return postList; }
        return postList.filter(
            post => post.Rating  > 0).sort((one, two) => (one.Rating > two.Rating ? -1 : 1));
    }
}

