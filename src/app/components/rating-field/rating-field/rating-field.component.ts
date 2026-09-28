import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rating-field',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rating-field.component.html',
  styleUrls: ['./rating-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingFieldComponent),
      multi: true
    }
  ]
})
export class RatingFieldComponent implements ControlValueAccessor {
  @Input() min: number = 1;
  @Input() max: number = 5;
  @Input() disabled: boolean = false;
  @Input() dimension: string = '';
  @Input() weightage: number = 0;
  @Input() questionText: string = '';
  @Input() questionId: string = '';
  
  // Set to null so no button is selected by default
  @Input() value: number | null = null; 
  
  @Output() ratingChange = new EventEmitter<number>();
  
  hoverValue: number | null = null;
  
  private onChange: any = () => {};
  private onTouched: any = () => {};
  
  get ratings(): number[] {
    return Array.from({ length: this.max - this.min + 1 }, (_, i) => this.min + i);
  }
  
  getRatingLabel(rating: number): string {
    const labels: Record<number, string> = {
      1: 'Very Low',
      2: 'Low',
      3: 'Moderate',
      4: 'High',
      5: 'Very High'
    };
    return labels[rating] || '';
  }
  
  getRatingDescription(rating: number): string {
    const descriptions: Record<number, string> = {
      1: 'Little to no capability, readiness, or fit',
      2: 'Some awareness or partial capability; significant gaps remain',
      3: 'Reasonable fit with identifiable gaps; development needed',
      4: 'Strong fit with minor gaps; prospect is well-positioned',
      5: 'Excellent fit; prospect is fully capable and ready'
    };
    return descriptions[rating] || '';
  }
  
  selectRating(rating: number): void {
    if (this.disabled) return;
    this.value = rating;
    this.onChange(rating);
    this.onTouched();
    this.ratingChange.emit(rating);
  }
  
  onHover(rating: number | null): void {
    this.hoverValue = rating;
  }
  
  writeValue(value: any): void {
    if (value !== undefined && value !== null) {
      this.value = value;
    } else {
      this.value = null;
    }
  }
  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}