const languages = [
    { id: 'en', title: 'English', isDefault: true },
    { id: 'fr', title: 'French' },
];

const i18n = {
    languages,
    base: languages.find((item) => item.isDefault)?.id,
    defaultLocale: 'en'
};

export { i18n };