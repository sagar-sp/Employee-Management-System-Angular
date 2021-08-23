import { AbstractControl } from "@angular/forms";
export const CharOnly = (control:AbstractControl) => {
    const regex = new RegExp('^[a-zA-Z \-\']+');
    const result = regex.test(control.value);

    if (!result) {
        return {Invalid:true}
    }
    return null;
}