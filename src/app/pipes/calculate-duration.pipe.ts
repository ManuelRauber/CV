import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'calculateDuration',
  standalone: true,
})
export class CalculateDurationPipe implements PipeTransform {
  transform(from: string, to?: string): string {
    const fromDateTime = DateTime.fromFormat(from, 'LLL yyyy');
    const toDateTime = to
      ? DateTime.fromFormat(to, 'LLL yyyy')
      : DateTime.now();

    const difference = toDateTime.diff(fromDateTime, ['years', 'months']);
    const differenceText = difference.toHuman({
      unitDisplay: 'narrow',
      maximumFractionDigits: 0,
    });

    if (to) {
      return `${from} - ${to} (${differenceText})`;
    }

    return `Since ${from} (${differenceText})`;
  }
}
