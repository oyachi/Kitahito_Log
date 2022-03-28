declare module '@mui/material/styles' {
  interface Palette {
    appbar: {
      main: string;
    };
    button: {
      main: string;
    };
    form: {
      main: string;
    };
  }
  interface PaletteOptions {
    appbar?: {
      main: string;
    };
    button?: {
      main?: string;
    };
    form?: {
      main?: string;
    };
  }
}

// light theme
export const lightTheme = {
  background: {
    default: '#f1f7fa'
  },
  button: {
    main: '#4b68d9'
  },
  appbar: {
    main: '#4b68d9'
  },
  form: {
    main: '#fff'
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
};

// dark theme
export const darkTheme = {
  background: {
    default: '#1e2a41'
  },
  info: {
    main: '#9575cd'
  },
  button: {
    main: '#253148'
  },

  appbar: {
    main: '#2d354a'
  },
  form: {
    main: '#253148'
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  }
};
