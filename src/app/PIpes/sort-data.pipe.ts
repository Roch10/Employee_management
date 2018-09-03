import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../Modules/employee';

@Pipe({
  name: 'sortData'
})
export class SortDataPipe implements PipeTransform {

  transform(employee: Employee[], path: string[], order: number): Employee[] {
    // Check if is not null
    if (!employee || !path || !order) return employee;

    return employee.sort((a: Employee, b: Employee) => {
      // We go for each property followed by path
      path.forEach(property => {
        a = a[property];
        b = b[property];
      })

      // Order * (-1): We change our order
      return a > b ? order : order * (- 1);
    })
  }
}
