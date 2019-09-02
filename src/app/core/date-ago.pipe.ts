import { Pipe, PipeTransform } from '@angular/core';
import { count } from 'rxjs/operators';

@Pipe({
  name: 'dateAgo',
  pure: true
})
export class DateAgoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      let seconds = Math.floor(value / 1000);
      if (seconds < 29)
        // less than 30 seconds ago will show as 'Just now'
        return 'Just now';
      const intervals = {
        année: 31536000,
        mois: 2592000,
        semaine: 604800,
        jour: 86400,
        heure: 3600,
        minute: 60,
        seconde: 1
      };
      let counter;
      let countdown: string = '';
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        seconds = seconds - counter * intervals[i];
        // console.log(i);
        // console.log(counter);
        if (counter > 0) {
          if (counter === 1 || i === 'mois') {
            countdown += counter + ' ' + i + ' ';
          } else {
            countdown += counter + ' ' + i + 's ';
          }
        }
      }
      return countdown;
    }
    return value;
  }
}
