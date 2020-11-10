import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nazarPract'; 
  
  private _getSum(value: OrderPrice[]): number {
        if (!value) { return; }

        const total = value.reduce((previousValue: number, currentValue: OrderPrice) => {
            return previousValue + currentValue.total;
        }, 0);

        return total;
    }
}
