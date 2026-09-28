import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function officialEmailValidator(): ValidatorFn {

    const freeDomains = [
        'gmail.com',
        'yahoo.com',
        'yahoo.in',
        'ymail.com',
        'ymail.in',
        'outlook.com',
        'hotmail.com',
        'icloud.com',
        'aol.com'
    ];

    return (control: AbstractControl): ValidationErrors | null => {

        const value = control.value;

        if (!value) return null;

        // Ensure valid email structure first
        if (!value.includes('@')) return null;

        const parts = value.split('@');
        if (parts.length !== 2) return null;

        const domain = parts[1].toLowerCase();

        if (freeDomains.includes(domain)) {
            return { notOfficial: true };
        }

        return null;
    };
}