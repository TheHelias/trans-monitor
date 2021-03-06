import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined'
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone'
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined'
import SpeedIcon from '@material-ui/icons/Speed'
import Toolbar from '@material-ui/core/Toolbar'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import { Link } from 'react-router-dom'
import { fade, makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography, Grid, Badge, InputBase } from '@material-ui/core'

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
      background: 'white',
      color: 'black'
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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
    color: ' #979797',
    marginTop: '5px'
  },
  a: {
    '&:active': {
      background: '#044830'
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    fontFamily: 'Segoe UI',
    background: '#f5f5f5'
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
  },
  rightItems: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px',
    color: 'black'
  },
  button: {
    textTransform: 'capitalize',
    marginLeft: '15px',
    color: '#647787'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    marginTop: '10px',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#647787'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  profilePicture: {
    borderRadius: '50%',
    height: '40px'
  },
  list: {
    marginLeft: '15px'
  }
}))
const paymentItems = [
  { label: 'All Payments', icon: <AccountBalanceWalletOutlinedIcon />, url: '#' },
  { label: 'Reconciled Payments', icon: <AccountBalanceWalletOutlinedIcon />, url: '#' },
  { label: 'Un - Reconciled Payments', icon: <AccountBalanceWalletOutlinedIcon />, url: '#' },
  { label: 'Manual Settlement', icon: <FiberManualRecordTwoToneIcon />, url: '#' }
]

const orderItems = [
  { label: 'All Orders', icon: <AssignmentOutlinedIcon />, url: '#' },
  { label: 'Pending Orders', icon: <AssignmentOutlinedIcon />, url: '#' },
  { label: 'Reconciled Orders', icon: <AssignmentOutlinedIcon />, url: '#' }
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
      <img
        alt='Logo'
        src={require('../assets/transmonitor_logo.png')}
        className={classes.logo}
      />
      <List className={classes.list}>
        <Button className={classes.invoiceButton} variant='contained'>
          Generate Invoice
        </Button>
        <ListItem className={classes.list}>Main</ListItem>
        <ListItem className={classes.list} button component={Link} to='#'>
          <ListItemIcon>
            <SpeedIcon />
          </ListItemIcon>
          <ListItemText primary='Overview' />
        </ListItem>
        <br />
        <ListItem className={classes.list}>Payments</ListItem>
        {paymentItems.map((item, index) => (
          <ListItem className={classes.list} button key={index} component={Link} to={item.url}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <br />
        <ListItem className={classes.list}>Orders</ListItem>
        {orderItems.map((item, index) => (
          <ListItem className={classes.list} button key={index} component={Link} to={item.url}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <br />
        <ListItem className={classes.list} button component={Link} to='#'>
          <ListItemIcon>
            <PermIdentityOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary='Merchant Profile' />
        </ListItem>
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.appBar}>
        <Grid container spacing={3}>
          <Grid item xs={6} md={6}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder='Search…'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Grid>
          <Grid item xs={6} md={6}>
            <Typography
              className={classes.rightItems}
              align='right'
            > <Button className={classes.button}>Support</Button>
              <Button className={classes.button}>FAQ</Button>
              <IconButton className={classes.button} aria-label='show 17 new notifications' color='inherit'>
                <Badge badgeContent={8} color='primary'>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <Button className={classes.button}>Oluwaleke Ojo</Button>
              <img
                alt='Logo'
                src={require('../assets/profile_picture.png')}
                className={classes.profilePicture}
              />
            </Typography>
          </Grid>
        </Grid>
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
