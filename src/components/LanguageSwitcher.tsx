import { Languages } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className={`inline-flex items-center gap-1.5 rounded-lg border border-[#E8E8E8] bg-white px-3 py-1.5 text-sm font-semibold text-[#1A1A1A] transition-colors hover:bg-[#FAFAFA] active:scale-[0.98] ${className}`}
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Languages size={16} className="text-[#666]" />
      <span>{language === 'en' ? t.lang.switchToArabic : t.lang.switchToEnglish}</span>
    </button>
  );
}
