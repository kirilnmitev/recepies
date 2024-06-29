import { LOCALE_CODE_EN } from '@/constants'
import { createI18n } from 'vue-i18n'

import enGB from '@/i18n/locales/enGB.json'

export const i18n = createI18n({
  locale: LOCALE_CODE_EN,
  legacy: false,
  messages: { [LOCALE_CODE_EN]: enGB }
})
