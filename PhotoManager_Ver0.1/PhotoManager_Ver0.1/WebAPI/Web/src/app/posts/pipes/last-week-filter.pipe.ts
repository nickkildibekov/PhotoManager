import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'lastWeek'
})

export class LastWeekFilterPipe implements PipeTransform {
    transform(postList: any, lwFilter: Date): any[] {
        if (!postList) { return []; }
        if (!lwFilter) { return postList; }
        return postList.filter(post => this.getCDate(post.PostedDateTime) > this.getJsDate(lwFilter));
    }

    getCDate(date: string) {
        const cDate = new Date(Date.parse(date));
        console.log(cDate.getTime());
        return cDate.getTime() ;
      }
      getJsDate(lwFilter) {
        lwFilter = new Date();
        const fJsDate = lwFilter;
        fJsDate.setDate(fJsDate.getDate() - 7);
        console.log(fJsDate.getTime());
        return fJsDate.getTime();
      }
}

