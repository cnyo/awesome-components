import {Pipe, PipeTransform} from '@angular/core';
import {PersonalInfo} from '../types/PersonalInfo.type';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform{
  transform(value: PersonalInfo): string {
    return `${value.firstName.toUpperCase()} ${value.lastName}`;
  }

}
