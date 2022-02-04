import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Box, Divider, Drawer, Link, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ExtensionIcon from '@material-ui/icons/Extension';
import AddReactionIcon from '@material-ui/icons/AddReaction';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import GroupIcon from '@material-ui/icons/Group';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
import useAuth from '../../hooks/useAuth';
import ChartPieIcon from '../../icons/ChartPie';
import FolderOpenIcon from '../../icons/FolderOpen';
import UserIcon from '../../icons/User';
import Logo from '../Logo';
import NavSection from '../NavSection';
import Scrollbar from '../Scrollbar';

const sections = [
  {
    title: 'General',
    items: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <ChartPieIcon fontSize="small" />
      },
      {
        title: 'Account',
        path: '/dashboard/account',
        icon: <UserIcon fontSize="small" />
      },
      {
        title: 'Orders',
        path: '/dashboard/orders',
        icon: <FolderOpenIcon fontSize="small" />
      }
    ]
  },
  {
    title: 'Management',
    items: [
      {
        title: 'Menu',
        path: '/dashboard/menu',
        icon: <FastfoodIcon fontSize="small" />
      },
      {
        title: 'Item',
        path: '/dashboard/customers',
        icon: <ExtensionIcon fontSize="small" />,
      },
      {
        title: 'Ingredient',
        path: '/dashboard/products',
        icon: <AddReactionIcon fontSize="small" />,
      },
      {
        title: 'Restaurant',
        path: '/dashboard/products',
        icon: <RestaurantMenuIcon fontSize="small" />
      },
      {
        title: 'Staff',
        path: '/dashboard/products',
        icon: <EmojiPeopleIcon fontSize="small" />,
      },
      {
        title: 'User',
        path: '/dashboard/user',
        icon: <GroupIcon fontSize="small" />,
      }, 
      {
        title: 'Delivery Vans',
        path: '/dashboard/delivery-vans',
        icon: <AirportShuttleIcon fontSize="small" />,
      },
      // {
      //   title: 'Invoices',
      //   path: '/dashboard/invoices/all',
      //   icon: <ReceiptIcon fontSize="small" />,
      //   children: [
      //     {
      //       title: 'List',
      //       path: '/dashboard/invoices/all'
      //     },
      //     {
      //       title: 'Details',
      //       path: '/dashboard/invoices/1'
      //     }
      //   ]
      // }
    ]
  },
];

const DashboardSidebar = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const { user } = useAuth();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box
          sx={{
            display: {
              lg: 'none',
              xs: 'flex'
            },
            justifyContent: 'center',
            p: 2
          }}
        >
          <RouterLink to="/">
            <Logo
              sx={{
                height: 40,
                width: 40
              }}
            />
          </RouterLink>
        </Box>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'background.default',
              borderRadius: 1,
              display: 'flex',
              overflow: 'hidden',
              p: 2
            }}
          >
            <RouterLink to="/dashboard/account">
              <Avatar
                src={user.avatar}
                sx={{
                  cursor: 'pointer',
                  height: 48,
                  width: 48
                }}
              />
            </RouterLink>
            <Box sx={{ ml: 2 }}>
              <Typography
                color="textPrimary"
                variant="subtitle2"
              >
                {user.name}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                Your plan:
                {' '}
                <Link
                  color="primary"
                  component={RouterLink}
                  to="/dashboard/account"
                >
                  {user.plan}
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                '& + &': {
                  mt: 3
                }
              }}
              {...section}
            />
          ))}
        </Box>
      </Scrollbar>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            height: 'calc(100% - 64px) !important',
            top: '64px !Important',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onMobileClose}
      open={openMobile}
      PaperProps={{
        sx: {
          backgroundColor: 'background.paper',
          width: 280
        }
      }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default DashboardSidebar;
