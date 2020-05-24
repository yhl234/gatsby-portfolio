import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => {
  return {
    a: {
      boxShadow: `none`,
    },
    'a.navLink': {
      textTransform: 'capitalize',
    },
    'ul.nav': {
      listStyle: 'disc',
      marginBottom: `0`,
      marginLeft: `0`,
    },
  }
}

// delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

// https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2016/src/index.js
