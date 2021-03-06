import { Language } from '@material-ui/icons';
import React from 'react';
import classnames from 'classnames';
import {
  MenuItem,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
} from '@material-ui/core';
import { useLanguagesHook } from './hooks';
import { useGetStyles } from './styles';
import { languages } from './utils';

export interface LanguagesProps {
  color?: string,
}

const Languages = ({ color }: LanguagesProps) => {
  const {
    anchorEl,
    handleOpen,
    handleClose,
    handleChange,
    selected,
  } = useLanguagesHook();

  const { classes } = useGetStyles(color);
  return (
    <div className={classnames(classes.root, 'languages')}>
      <div
        onClick={handleOpen}
        role="button"
        className={classnames('selected-button')}
      >
        <Language color="primary" />
        {selected.value}
      </div>
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        role={undefined}
        transition
        disablePortal
      >
        {({
          TransitionProps, placement,
        }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  id="menu-list-grow"
                >
                  {languages.map((x) => {
                    return (
                      <MenuItem
                        onClick={() => handleChange({
                          key: x?.key, value: x?.value,
                        })}
                        key={x?.key}
                        className={classnames('item', {
                          selected: selected?.key === x?.key,
                        })}
                      >
                        {x?.value}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default Languages;
