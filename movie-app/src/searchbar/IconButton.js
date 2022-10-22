import * as React from 'react';
import { useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import './SearchBar.scss'

export default function Icon() {
    return (
        <div>
        <IconButton size="large" color="inherit">
          <Badge color="error">
          </Badge>
        </IconButton>
        </div>
    )
}

