
import { createTheme} from '@mui/material/styles';
const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& input': {
              '&::selection': {
                backgroundColor: 'transparent', // Set transparent background color for text selection
              },
            },
          },
        },
      },
    },
  });
  export default theme;