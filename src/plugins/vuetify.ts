// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify, ThemeDefinition } from 'vuetify'

const applicationTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: 'rgb(17, 17, 17)',
    primary: '#E50914'

  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'applicationTheme',
    themes: {
      applicationTheme
    },
  }
})
