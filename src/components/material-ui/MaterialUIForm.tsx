import React from 'react';

import { Stack, Button, IconButton, Icon, Typography } from '@mui/material';
import { InfoOutlined, Info, AddCircle, AccountCircle, Add } from '@mui/icons-material';
const MaterialUIForm = () => {
    return (
        <div>
            {/* Test 1 */}
            <fieldset>
                <legend><label>⚗️ Test 1</label></legend>
                <Stack direction="row" spacing={2}>
                    <Button data-testid="mui-button" variant="outlined" color="primary" onClick={() => {
                        const text : any= document.getElementById('mui-button-text');
                        text.innerHTML = '👋 Hi there Champ.';
                    }}>Greetings</Button>
                    <Button data-testid="mui-button" variant="outlined" color="primary" onClick={() => {
                        const text : any= document.getElementById('mui-button-text');
                        text.innerHTML = '🌄 Good Morning Champ.';
                    }}>It's Morning</Button>
                    <Button data-testid="mui-button" variant="outlined" color="primary" onClick={() => {
                        const text : any= document.getElementById('mui-button-text');
                        text.innerHTML = '☀️ Good Afternoon Champ.';
                    }}>It's Afternoon</Button>
                </Stack>
                <Typography variant="h5"  id="text1" data-testid="text1" paddingBottom={2} color="primary">Click any button.</Typography>
            </fieldset>

            {/* Test 2 */}
            <fieldset>
                <legend><label>⚗️ Test 2</label></legend>
                <Typography variant="h6">Material Icons from Google Icons</Typography>
                <Stack direction="row" spacing={2}>
                    <Icon data-testid="done-icon" color="secondary">done</Icon>
                    <Icon data-testid="info-icon" color="secondary">info</Icon>
                    <Icon data-testid="check-icon" color="secondary">check_circle</Icon>
                </Stack>
                <Typography variant="h6">Material UI Icons from MUI Site</Typography>
                <Stack direction="row" spacing={2}>
                    <Info data-testid="mui-info" color="secondary" />
                    <AddCircle data-testid="mui-add" color="secondary" />
                    <AccountCircle data-testid="mui-account" color="secondary" />
                </Stack>

            </fieldset>

            {/* Test 3 */}
            <fieldset>
                <legend><label>⚗️ Test 3</label></legend>
                <Typography variant="h5">Clickable Material Icon from Google Icons</Typography>
                <Typography variant="subtitle2">Click Icon below to Change text</Typography>
                <IconButton data-testid="google-icon-button"
                    onClick={() => {
                        const text : any= document.getElementById("google-icon-button-text");
                        text.innerHTML = 'This is 🏠Home icon.';
                    }}
                    color="primary"
                >
                    <Icon data-testid="google-home-icon">home</Icon>
                </IconButton>
                <Typography variant="h5" id="google-icon-button-text" data-testid="google-icon-button-text" paddingBottom={2} color="primary">This is default text.</Typography>
            </fieldset>

            {/* Test 4 */}
            <fieldset>
                <legend><label>⚗️ Test 4</label></legend>
                <Typography variant="h5">Clickable MUI Icon from MUI Site</Typography>
                <Typography variant="subtitle2">Click Icon below to Change text</Typography>
                <IconButton data-testid="mui-icon-button"
                    onClick={() => {
                        const text : any= document.getElementById("mui-icon-button-text");
                        text.innerHTML = 'This is ℹ️ Info icon';
                    }}
                >
                    <InfoOutlined color="secondary" data-testid="mui-info-icon" />
                </IconButton>
                <Typography variant="h5" id="mui-icon-button-text" data-testid="mui-icon-button-text" paddingBottom={2} color="secondary">This is default text.</Typography>
            </fieldset>
        </div>
    )
}

export default MaterialUIForm;