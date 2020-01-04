import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import DashboardIcon from '@material-ui/icons/Dashboard'
import SalesIcon from '@material-ui/icons/Receipt'
import ExpensesIcon from '@material-ui/icons/ShoppingBasket'
import ProductsIcon from '@material-ui/icons/Business'
import OutletsIcon from '@material-ui/icons/AccountTree'
import CustomersIcon from '@material-ui/icons/People'
import MarketerIcon from '@material-ui/icons/PersonPin'
import DistributorIcon from '@material-ui/icons/AcUnit'
import OperatorIcon from '@material-ui/icons/DeveloperBoard'
import IssuesIcon from '@material-ui/icons/ErrorOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const drawerWidth = 300
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      height: '56px',
      background: 'white'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  a: {
    '&:active': {
      background: '#044830'
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  invoiceButton: {
    color: 'white',
    fontSize: 'small',
    fontWeight: 'bold',
    // padding: '10px',
    margin: '20px',
    background: '#27AE60',
    borderRadius: '50px'
  },
  logo: {
    margin: '20px 20px 20px 40px'
  }
}))
const menuItems = [
  { label: 'Dashboard', icon: <DashboardIcon />, url: '#' },
  { label: 'Sales', icon: <SalesIcon />, url: '#' },
  { label: 'Expenses', icon: <ExpensesIcon />, url: '#' },
  { label: 'Products', icon: <ProductsIcon />, url: '#' },
  { label: 'Outlets', icon: <OutletsIcon />, url: '#' },
  { label: 'Customers', icon: <CustomersIcon />, url: '#' },
  { label: 'Marketers', icon: <MarketerIcon />, url: '#' },
  { label: 'Distributors', icon: <DistributorIcon />, url: '#' },
  { label: 'Operators', icon: <OperatorIcon />, url: '#' },
  { label: 'Issues', icon: <IssuesIcon />, url: '#' },
  { label: 'Settings', icon: <SettingsIcon />, url: '#' }
]

function ResponsiveDrawer ({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const classes = useStyles()
  const theme = useTheme()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <img alt='Logo' src={require('../assets/transmonitor_logo.png')} className={classes.logo} />
      <List>
        <Button className={classes.invoiceButton} variant='contained'>
            Generate Invoice
        </Button>
        <ListItem>Main</ListItem>
        <ListItem
          button
          component={Link}
          to='#'
        >
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary='Overview' />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Typography align='right'>
          <Button className={classes.logoutButton} variant='contained'>
            Logout
          </Button>
        </Typography>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='menu items'>
        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant='permanent'
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

export default ResponsiveDrawer