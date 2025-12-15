import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
  private static readonly MAX_LENGTH = 50;
    transform(value: string | null | undefined, maxLength = ShortenPipe.MAX_LENGTH): string {
      if (!value || value.length < maxLength) {
        return value ?? '';
      }

      return value.substring(0, maxLength) + '...';
    }
}
