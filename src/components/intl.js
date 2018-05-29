export const getIntl = () => {
  const reactIntlLocalePromises = Promise.all([
    import(/* webpackChunkName: 'lazy.intl' */ 'react-intl/locale-data/en'),
    import(/* webpackChunkName: 'lazy.intl' */ 'react-intl/locale-data/ar'),
    import(/* webpackChunkName: 'lazy.intl' */ 'react-intl/locale-data/tr'),
    import(/* webpackChunkName: 'lazy.intl' */ 'react-intl/locale-data/es'),
    import(/* webpackChunkName: 'lazy.intl' */ 'react-intl/locale-data/ru'),
    import(/* webpackChunkName: 'lazy.intl' */ 'react-intl/locale-data/pt'),
    import(/* webpackChunkName: 'lazy.intl' */ 'react-intl/locale-data/ko'),
    import(/* webpackChunkName: 'lazy.intl' */ 'react-intl/locale-data/ja'),
    import(/* webpackChunkName: 'lazy.intl' */ 'react-intl/locale-data/it'),
    import(/* webpackChunkName: 'lazy.intl' */ 'react-intl/locale-data/de'),
    import(/* webpackChunkName: 'lazy.intl' */ 'react-intl/locale-data/fr'),
    import(/* webpackChunkName: 'lazy.intl' */ 'react-intl/locale-data/zh'),
  ])

  const translationPromises = Promise.all([
    import(/* webpackChunkName: 'lazy.intl' */ '../i18n/en.json'),
    import(/* webpackChunkName: 'lazy.intl' */ '../i18n/ar.json'),
    import(/* webpackChunkName: 'lazy.intl' */ '../i18n/tr.json'),
    import(/* webpackChunkName: 'lazy.intl' */ '../i18n/es.json'),
    import(/* webpackChunkName: 'lazy.intl' */ '../i18n/ru.json'),
    import(/* webpackChunkName: 'lazy.intl' */ '../i18n/pt.json'),
    import(/* webpackChunkName: 'lazy.intl' */ '../i18n/ko.json'),
    import(/* webpackChunkName: 'lazy.intl' */ '../i18n/ja.json'),
    import(/* webpackChunkName: 'lazy.intl' */ '../i18n/it.json'),
    import(/* webpackChunkName: 'lazy.intl' */ '../i18n/de.json'),
    import(/* webpackChunkName: 'lazy.intl' */ '../i18n/fr.json'),
    import(/* webpackChunkName: 'lazy.intl' */ '../i18n/zh.json'),
  ])

  return Promise
    .all([reactIntlLocalePromises, translationPromises])
    .then(([reactIntlLocale, translation]) => {
      const [en, ar, tr, es, ru, pt, ko, ja, it, de, fr, zh] = reactIntlLocale
      const [enTranslations,
        arTranslations,
        trTranslations,
        esTranslations,
        ruTranslations,
        ptTranslations,
        koTranslations,
        jaTranslations,
        itTranslations,
        deTranslations,
        frTranslations,
        zhTranslations,
      ] = translation

      return {
        en, ar, tr, es, ru, pt, ko, ja, it, de, fr, zh,
        enTranslations,
        arTranslations,
        trTranslations,
        esTranslations,
        ruTranslations,
        ptTranslations,
        koTranslations,
        jaTranslations,
        itTranslations,
        deTranslations,
        frTranslations,
        zhTranslations,
      }
    })
}