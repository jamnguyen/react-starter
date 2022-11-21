import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '~src/app';
import { selectAuth, signOut } from '~src/app/slices';

import { Avatar } from './header.styled';

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { user } = useSelector(selectAuth);
  const dispatch = useAppDispatch();

  const open = Boolean(anchorEl);

  const showMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const hideMenu = () => {
    setAnchorEl(null);
  };

  const handleSignOut = async () => {
    await dispatch(signOut());
    hideMenu();
  };

  if (!user) {
    return null;
  }

  return (
    <Box>
      <IconButton onClick={showMenu}>
        <Avatar alt="User Avatar" src={user.avatar || undefined} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={hideMenu}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <MenuItem dense onClick={handleSignOut}>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}
