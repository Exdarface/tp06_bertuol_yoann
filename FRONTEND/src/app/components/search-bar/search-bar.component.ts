import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Input() property: string = '';
  @Input() list: any[] = [];

  @Output() filter: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() resetList: EventEmitter<void> = new EventEmitter<void>();

  searchControl = new FormControl();
  constructor() {}

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe((value) => {
      if (value) {
        this.filter.emit(
          this.list.filter((item) =>
            item[this.property].toLowerCase().includes(value.toLowerCase())
          )
        );
      } else {
        this.resetList.emit();
      }
    });
  }
}
