import { AbstractControl, ValidationErrors } from "@angular/forms";

export function sifreValidator(control: AbstractControl): ValidationErrors | null {
    const val:String = control.value;
    if(!val || val ==''){
        return null;
    }    
    if(val.match(/[A-Z]/) && val.match(/[a-z]/)){
        return null;
    }
    if(!val.match((/[A-Z]/))){
        return {sifre:'Sifrede büyük harf bulunmalidir.'}
    }
    
    if(!val.match((/[a-z]/))){
        return {sifre:'Sifrede kücük harf bulunmalidirr.'}
    }
    return {sifre : 'Sifre Hatalidir'};
}

// regular expression
// exports=[sifreValidator]; export etmek için bir yontem
