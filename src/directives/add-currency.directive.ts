import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAddCurrency]'
})
export class AddCurrencyDirective {
  @Input('appAddCurrency') currency: string = '$'; // Default currency is USD

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const currentText = this.el.nativeElement.innerText;
    this.el.nativeElement.innerText = `${currentText} ${this.currency}`;
  }

}
