import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ua-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class PaginationComponent implements OnInit {
  @Input() totalItems!: number;
  @Input() currentPage!: number;
  @Input() ItemsPerPage!: number;
  @Output() onClick: EventEmitter<number> = new EventEmitter();
  totalPages = 0;
  pages: number[] = [];
  constructor() {}
  ngOnInit(): void {
    this.totalPages = Math.ceil(this.totalItems / this.ItemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  pageClicked(page: number) {
    this.onClick.emit(page);
  }
}
