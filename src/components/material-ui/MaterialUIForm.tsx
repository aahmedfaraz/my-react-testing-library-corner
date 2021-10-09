import React from 'react';

import { Button, IconButton, Icon } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';
const MaterialUIForm = () => {
    return (
        <div>
            {/* SAMPLE (TESTING) */}
            <Button data-testid="mui-button" variant="outlined" color="secondary" onClick={() => {
                const text1 : any= document.getElementById('text1');
                text1.innerHTML = 'Faraz';
            }}>Ahmed</Button>
            <p id="text1" data-testid="text1">Ahmed</p>
            <Icon>done</Icon>
            <Icon>info</Icon>
            <Icon>check_circle</Icon>
            <br />
            <IconButton data-testid="google-icon-button"
                onClick={() => {
                    const text2 : any= document.getElementById('text2');
                    text2.innerHTML = 'Faraz2';
                }}
            >
                <Icon data-testid="google-home-icon">home</Icon>
            </IconButton>
            <p id="text2" data-testid="text2">Ahmed2</p>
            <br />
            <IconButton data-testid="mui-icon-button"
                onClick={() => {
                    const text3 : any= document.getElementById('text3');
                    text3.innerHTML = 'Faraz3';
                }}
            >
                <InfoOutlined data-testid="mui-info-icon" />
            </IconButton>
            <p id="text3" data-testid="text3">Ahmed3</p>
        </div>
    )
}

export default MaterialUIForm;