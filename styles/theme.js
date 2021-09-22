import { extendTheme } from '@chakra-ui/react'

const colors = {
  gray:{
    50: '#F0FFFF',
    100: '#C4C4C4',
    200: '#000000'
  },
  brand: {
    900:'#AF2D2D',
    800:'#41AD4C',
    700:'#EC4444',
    600: '#EFCD1B',
    500: '#F4A460', 
  },
}

const fonts = {
  heading: "Roboto Mono",
  body: "Roboto Mono",
  text: "Roboto Mono",
  sansSerif: 'Ubuntu'
}

const theme = extendTheme({ colors, fonts });

export default theme