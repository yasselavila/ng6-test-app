import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeAgo' })
export class TimeAgoPipe implements PipeTransform {
  public transform(value: Date|number|string, ...args: any[]): string {
    let date: Date = new Date();

    if ('string' === typeof value) {
      date.setTime(Date.parse(value));
    } else if ('number' === typeof value) {
      date.setTime(value);
    } else {
      date = value as Date;
    }

    value = +date;

    const currDate: Date = new Date();
    const aDay: number = (24 * 60 * 60 * 1000);
    const seconds: number = Math.floor(((+currDate) - value) / 1000);
    let interval: number = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + ' años';
    }

    interval = Math.floor(seconds / 2592000);

    if (interval > 1) {
      return interval + ' meses';
    }

    interval = Math.floor(seconds / 86400);

    if (interval > 1) {
      return interval + ' días';
    }

    interval = Math.floor(seconds / 3600);

    if (interval > 1) {
      return interval + ' horas';
    }

    interval = Math.floor(seconds / 60);

    if (interval > 1) {
      return interval + ' minutos';
    }

    return Math.floor(seconds) + ' segundos';
  }
}
