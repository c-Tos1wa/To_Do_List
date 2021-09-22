import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900:'#AF2D2D',
    800:'#41AD4C',
    700:'#EC4444',
    600: '#EFCD1B',
    500: '#F4A460', 
  },
}

const theme = extendTheme({ colors });

export default theme