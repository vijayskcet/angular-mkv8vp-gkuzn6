import { Component, Input, OnInit } from '@angular/core';
import { DataService, Person } from '../data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'multi-checkbox-group-example',
  templateUrl: './multi-checkbox-group-example.component.html',
  styleUrls: ['./multi-checkbox-group-example.component.scss']
})
export class MultiCheckboxGroupExampleComponent implements OnInit {
ngOnInit(): void {
throw new Error('Method not implemented.');
}
  items = ['testdata', 'testdata1', 'somedata', 'newdata', 'olddata'];
  selectedItems: string[] = [];
  selectAll = false;
  selectFiltered = false;

  isSelected(item: any): boolean {
    return this.selectedItems.indexOf(item) !== -1;
  }

  toggleSelection(item: any): void {
    const index = this.selectedItems.indexOf(item);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(item);
    }
  }

  toggleSelectAll(): void {
    this.selectAll = !this.selectAll;
    if (this.selectAll) {
      this.selectedItems = [...this.items];
      this.selectFiltered = false;
    } else {
      this.selectedItems = [];
    }
  }

  toggleSelectFiltered(): void {
    this.selectFiltered = !this.selectFiltered;
    if (this.selectFiltered) {
      // Implement filtering logic here
      const filteredItems = this.items.filter(item => item.includes('test'));
      this.selectedItems = [...filteredItems];
      this.selectAll = false;
    } else {
      this.selectedItems = [];
    }
  }
}

