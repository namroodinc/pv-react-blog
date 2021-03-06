// Use this for reference: https://material-ui-next.com/customization/themes/
// An example for styling a new component: https://github.com/mui-org/material-ui/blob/v1-beta/src/Table/TableCell.js

import grey from "material-ui/colors/grey";

import Styles from "../styles/app.scss";
const {
  black,
  bodyFont,
  borderColor,
  letterSpacing,
  primaryColor,
  primaryFont,
  secondaryBackgroundColor,
  tabUnselected,
  white
} = Styles;

export default {
  palette: {
    primary: {
      ...grey,
      500: primaryColor
    },
    secondary: {
      ...grey,
      A200: white
    }
  },
  typography: {
    fontFamily: bodyFont
  },
  overrides: {
    MuiAvatar: {
      root: {
        border: `1px solid ${borderColor}`
      }
    },
    MuiButton: {
      root: {
        borderRadius: 0,
        fontFamily: primaryFont,
        fontSize: '0.65em',
        fontWeight: 500,
        letterSpacing: letterSpacing,
        padding: `6px 12px`,
        textTransform: 'none'
      },
      flatPrimary: {
        backgroundColor: white,
        border: `1px solid ${black}`,
        color: black,
        '&:hover': {
          backgroundColor: black,
          color: white
        }
      }
    },
    MuiCardActions: {
      root: {
        height: 'auto',
        paddingLeft: 0,
        paddingRight: 0
      },
      action: {
        marginLeft: 0,
        marginRight: 10
      }
    },
    MuiCardContent: {
      root: {
        padding: `0 0 10px 0`
      }
    },
    MuiCardHeader: {
      avatar: {
        marginTop: -10
      },
      root: {
        padding: 10,
        paddingLeft: 10,
        paddingRight: 10
      }
    },
    MuiFormControl: {
      root: {
        margin: '10px 0'
      }
    },
    MuiFormLabel: {
      root: {
        display: 'block',
        fontSize: '1em',
        paddingBottom: 5
      }
    },
    MuiGrid: {
      typeContainer: {
        paddingBottom: 20,
        paddingTop: 20
      }
    },
    MuiInput: {
      underline: {
        '&:after': {
          backgroundColor: primaryColor
        },
        '&:before': {
          backgroundColor: primaryColor
        }
      }
    },
    MuiList: {
      padding: {
        backgroundColor: white,
        paddingTop: 0
      },
      subheader: {
        paddingTop: 5
      }
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit'
      }
    },
    MuiListSubheader: {
      root: {
        alignItems: 'center',
        color: black,
        display: 'flex',
        fontWeight: 600,
        lineHeight: '20px',
        padding: '10px 24px'
      }
    },
    MuiListItem: {
      gutters: {
        paddingBottom: 3,
        paddingTop: 3
      }
    },
    MuiPaper: {
      root: {
        marginBottom: 20,
        padding: 15,
        overflow: 'hidden'
      },
      elevation2: {
        boxShadow: '0 0 0 0 transparent'
      },
      rounded: {
        borderRadius: 0
      }
    },
    MuiPopover: {
      paper: {
        padding: 0
      }
    },
    MuiSelect: {
      select: {
        paddingLeft: 10
      }
    },
    MuiSvgIcon: {
      root: {
        height: '0.8em',
        width: '0.8em'
      }
    },
    MuiTab: {
      textColorPrimary: {
        backgroundColor: tabUnselected,
        color: primaryColor,
        minWidth: 40,
        maxWidth: 'initial'
      },
      textColorPrimarySelected: {
        backgroundColor: primaryColor,
        color: white
      },
      label: {
        fontSize: '18px !important',
        textTransform: 'none'
      },
      wrapper: {
        flexDirection: 'inherit'
      }
    },
    MuiTabIndicator: {
      colorPrimary: {
        display: 'none'
      }
    },
    MuiTable: {
      root: {
        fontFamily: primaryFont
      }
    },
    MuiTableCell: {
      head: {
        borderBottomWidth: 2,
        borderColor: primaryColor,
        color: primaryColor,
        fontSize: '0.8em',
        fontWeight: 500,
        padding: `10px 15px`
      },
      body: {
        fontSize: '0.8em',
        padding: `6px 15px`
      },
      root: {
        borderBottomColor: secondaryBackgroundColor,
        borderBottomWidth: 1,
        '&:first-child': {
          paddingLeft: 0
        },
        '&:last-child': {
          paddingRight: 0
        }
      }
    },
    MuiTableRow: {
      head: {
        height: 'auto'
      },
      root: {
        height: 'auto'
      }
    }
  }
}
