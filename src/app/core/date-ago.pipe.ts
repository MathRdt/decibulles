import { Pipe, PipeTransform } from '@angular/core';
import { count } from 'rxjs/operators';

@Pipe({
  name: 'dateAgo',
  pure: true
})
export class DateAgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      let seconds = Math.floor((+new Date(value) - +new Date()) / 1000);
      if (seconds < 29)
        // less than 30 seconds ago will show as 'Just now'
        return 'Just now';
      const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      };
      let counter;
      let countdown: string;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        seconds = seconds - counter * intervals[i];
        if (counter > 0)
          if (counter === 1) {
            countdown += counter + ' ' + i;
          } else {
            countdown += counter + ' ' + i + 's';
          }
      }
      return countdown;
    }
    return value;
  }
}
