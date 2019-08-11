import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'topContrib'
})
export class TopContributorsFilterPipe implements PipeTransform {
    transform(userList: any, topcontribVal: number): any[] {
        if (!userList) { return []; }
        if (!topcontribVal) { return userList; }
        return userList.filter(
            user => user.Posts.length  > 0).sort((one, two) => (one.Posts.length  > two.Posts.length  ? -1 : 1));
    }
}

