import { createTheme} from '@mui/material/styles';
export const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    orange: {
      main: '#F76000',
      contrastText: '#fff',
    },
    black: {
      main: '#000',
      contrastText: '#fff',
      background: '#000'
    }
  },
});