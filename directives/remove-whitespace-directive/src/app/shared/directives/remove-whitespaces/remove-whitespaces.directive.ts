import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRemoveWhitespaces]'
})
export class RemoveWhitespacesDirective {
   value: string;

   constructor(public elementRef: ElementRef) {}

  @HostListener("keydown", ["$event"]) onKeyDown(e: KeyboardEvent) {
    const value = this.elementRef.nativeElement.value; // Input Value:
    this.CurrentValue = this.format(value); // Apply Regix:
    this.setValueToNodeElement(); // Re-Assign Value:
  }

  format(value): string {
    if (value) {
      if (['input', 'textarea'].includes(this.elementRef.nativeElement.tagName.toLowerCase())) {
        return value.replace(/ /g, "_");
      } else {
        console.error(`Can't bind to 'appRemoveWhitespaces' to ${this.elementRef.nativeElement.tagName.toLowerCase()} tag`);
      }
    }
    return "";
  }

  setValueToNodeElement() {
    this.elementRef.nativeElement.value = this.CurrentValue;
  }

  set CurrentValue(value) {
    this.value = value;
  }

  get CurrentValue(): string {
    return this.value;
  }
}
