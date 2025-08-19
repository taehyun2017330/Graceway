import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'EN', name: 'English', nativeName: 'English' },
    { code: 'ZH', name: 'Chinese', nativeName: '中文' },
    { code: 'KO', name: 'Korean', nativeName: '한글' }
  ];

  // Update document lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const handleLanguageChange = (languageCode) => {
    const langCode = languageCode.toLowerCase();
    i18n.changeLanguage(langCode);
  };

  const currentLang = languages.find(lang => lang.code.toLowerCase() === i18n.language) || languages[0];

  return (
    <div className="language-switcher">
      {languages.map((language, index) => (
        <React.Fragment key={language.code}>
          <button
            className={`language-option ${i18n.language === language.code.toLowerCase() ? 'active' : ''}`}
            onClick={() => handleLanguageChange(language.code)}
          >
            {language.nativeName}
          </button>
          {index < languages.length - 1 && (
            <span className="language-separator">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitcher; 