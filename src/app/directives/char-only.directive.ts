import { Directive, ElementRef, HostListener } from "@angular/core"

@Directive({
    selector : '[char-only]'
})
export class CharOnly{
    constructor(private eleRef : ElementRef){}
    @HostListener('input') onchange(){
        const value = this.eleRef.nativeElement.value;
        this.eleRef.nativeElement.value = value.replace(/[^a-zA-Z]*/g, '');
    }   
}