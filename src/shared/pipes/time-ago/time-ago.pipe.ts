import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeAgo' })
export class TimeAgoPipe implements PipeTransform {
  public transform(value: number, ...args: any[]): string {
    const date: Date = new Date();
    const aDay: number = (24 * 60 * 60 * 1000);
    const seconds: number = Math.floor(((+date) - value) / 1000);
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
