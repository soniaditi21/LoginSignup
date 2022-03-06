// eslint-disable-next-line

import { createContext } from 'react';
import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import {  ThemeProvider } from '@mui/styles';

const TemplateContext = createContext(null);

export const TemplateProvider = ({children}) => {
  const theme = createTheme({
    overrides: {
      MuiDialog: {
        paperWidthSum: {
          maxWidth: 'unset',
          
        },
       
      },
      MuiDialogContent: {
        root: {
          padding: 0,
          '&:first-child': {
            paddingTop: 0
          }
        }
      },
      MuiTypography:{
          root:{
              fontSize:'2rem'
          }
      }
    }
  })

  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>
      <CssBaseline />
       {children}
       </ThemeProvider>
       </TemplateContext.Provider>
  )
}
