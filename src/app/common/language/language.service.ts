import { Injectable, signal, computed } from '@angular/core';
import { en, TranslationKeys } from './translations/en';
import { fr } from './translations/fr';

export type AppLanguage = 'en' | 'fr';

const translations: Record<AppLanguage, Record<TranslationKeys, string>> = { en, fr };

@Injectable({
    providedIn: 'root'
})
export class LanguageService {

    private readonly storageKey = 'appLanguage';

    /** Reactive signal — templates that read t() auto-update when this changes */
    readonly currentLanguage = signal<AppLanguage>(this.getInitialLanguage());

    setLanguage(language: AppLanguage): void {
        this.currentLanguage.set(language);

        if (typeof window !== 'undefined' && window.localStorage) {
            window.localStorage.setItem(this.storageKey, language);
        }
    }

    /** Type-safe translate: TypeScript will error if key doesn't exist in translations */
    t(key: TranslationKeys): string {
        return translations[this.currentLanguage()][key];
    }

    private getInitialLanguage(): AppLanguage {
        if (typeof window !== 'undefined' && window.localStorage) {
            const stored = window.localStorage.getItem(this.storageKey);
            if (stored === 'en' || stored === 'fr') {
                return stored;
            }
        }
        return 'en';
    }

}
