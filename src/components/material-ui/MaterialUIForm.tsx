import React, { useState } from 'react';
// Material UI Components
import { Stack, Button, IconButton, Icon, Typography, Card, CardHeader, CardContent, CardMedia, CardActionArea, CardActions, Dialog, DialogTitle, DialogContent, DialogActions, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material';
// Material UI Icons
import { InfoOutlined, Info, AddCircle, AccountCircle } from '@mui/icons-material';

const MaterialUIForm = () => {

    const [modal, setModal] = useState(false);
    const [drawer, setDrawer] = useState(false);

    return (
        <div>
            {/* Test 1 */}
            <fieldset>
                <legend><label>⚗️ Test 1</label></legend>
                <small><strong>Check: React-Testing Library will check buttons rendering and functionality.</strong></small>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
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
                <Typography variant="h5"  id="mui-button-text" data-testid="mui-button-text" paddingBottom={2} color="primary">Click any button.</Typography>
            </fieldset>

            {/* Test 2 */}
            <fieldset>
                <legend><label>⚗️ Test 2</label></legend>
                <small><strong>Check: React-Testing Library will check Icons rendering.</strong></small>
                <Typography data-testid="icon-heading" variant="h6">Material Icons from Google Icons</Typography>
                <Stack direction="row" spacing={2}>
                    <Icon data-testid="mat-icon" color="secondary">done</Icon>
                    <Icon data-testid="mat-icon" color="secondary">info</Icon>
                    <Icon data-testid="mat-icon" color="secondary">check_circle</Icon>
                </Stack>
                <Typography data-testid="icon-heading" variant="h6">Material UI Icons from MUI Site</Typography>
                <Stack direction="row" spacing={2}>
                    <Info data-testid="mui-icon" color="secondary" />
                    <AddCircle data-testid="mui-icon" color="secondary" />
                    <AccountCircle data-testid="mui-icon" color="secondary" />
                </Stack>
            </fieldset>

            {/* Test 3 */}
            <fieldset>
                <legend><label>⚗️ Test 3</label></legend>
                <small><strong>Check: React-Testing Library will check all elements rendering and material icon's functionality.</strong></small>
                <Typography variant="h5">Clickable Material Icon from Google Icons</Typography>
                <Typography variant="subtitle2">Click Icon below to Change text</Typography>
                <IconButton data-testid="mat-icon-button"
                    onClick={() => {
                        const text : any= document.getElementById("mat-icon-button-text");
                        text.innerHTML = 'This is 🏠Home icon.';
                    }}
                    color="primary"
                >
                    <Icon data-testid="mat-home-icon">home</Icon>
                </IconButton>
                <Typography data-testid="mat-icon-button-text" variant="h5" id="mat-icon-button-text" paddingBottom={2} color="primary">This is default text.</Typography>
            </fieldset>

            {/* Test 4 */}
            <fieldset>
                <legend><label>⚗️ Test 4</label></legend>
                <small><strong>Check: React-Testing Library will check all elements rendering and mui icon's functionality.</strong></small>
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
                <Typography data-testid="mui-icon-button-text" variant="h5" id="mui-icon-button-text" paddingBottom={2} color="secondary">This is default text.</Typography>
            </fieldset>

            {/* Test 5 */}
            <fieldset>
                <legend><label></label>⚗️ Test 5</legend>
                <small><strong>Check: React-Testing Library will check cards rendering and functionality.</strong></small>
                <small>Simple Card</small>
                <Card data-testid="card">
                    <CardHeader data-testid="card-header" title="React" />
                    <CardContent>
                        <Typography variant="h4">Definition</Typography>
                        <Typography variant="subtitle1">A JavaScript library for building user interfaces</Typography>
                    </CardContent>
                    <CardActions>
                        <Button data-testid="card-react-button" target="_blank" href="https://reactjs.org/">Read More</Button>
                    </CardActions>
                </Card>
                <br />
                <small>Clickable Card</small>
                <Card data-testid="card">
                    <CardActionArea data-testid="card-action-area" target="_blank" href="https://en.wikipedia.org/wiki/Andromeda_Galaxy">
                        <CardMedia
                            data-testid="card-media"
                            component="img"
                            height="200"
                            alt="space"
                            image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/andromeda-galaxy-royalty-free-image-1585682435.jpg"
                        />
                        <CardContent>
                            <Typography variant="h4">Andromeda</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </fieldset>

            {/* Test 6 */}
            <fieldset>
                <legend><label></label>⚗️ Test 6</legend>
                <small><strong>Check: React-Testing Library will check list items rendering.</strong></small>
                <List>
                    <ListItem data-testid="list-list-item" disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircle data-testid="list-list-item-icon" />
                            </ListItemIcon>
                            <ListItemText data-testid="list-list-item-text" primary="User 1" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem data-testid="list-list-item" disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircle data-testid="list-list-item-icon" />
                            </ListItemIcon>
                            <ListItemText data-testid="list-list-item-text" primary="User 2" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem data-testid="list-list-item" disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircle data-testid="list-list-item-icon" />
                            </ListItemIcon>
                            <ListItemText data-testid="list-list-item-text" primary="User 3" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem data-testid="list-list-item" disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AccountCircle data-testid="list-list-item-icon" />
                            </ListItemIcon>
                            <ListItemText data-testid="list-list-item-text" primary="User 4" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </fieldset>

            {/* Test 7 */}
            <fieldset>
                <legend><label></label>⚗️ Test 7</legend>
                <small><strong>Check: React-Testing Library will check Modal rendering and functionality using below button.</strong></small>
                <Button data-testid="modal-open-button" variant="contained" onClick={() => setModal(true)}>Open Modal</Button>
                <Dialog
                    open={modal}
                    onClose={() => setModal(false)}
                    data-testid="modal"
                >
                    <DialogTitle data-testid="modal-title">Demo Modal</DialogTitle>
                    <DialogContent>
                        <Typography data-testid="modal-text" variant="subtitle1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta voluptatibus maxime sint praesentium tempore, reprehenderit quasi ut nesciunt odit perspiciatis?</Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button data-testid="modal-close-button" variant="outlined" onClick={() => setModal(false)}>Close</Button>
                    </DialogActions>
                </Dialog>
            </fieldset>

            {/* Test 8 */}
            <fieldset>
                <legend><label></label>⚗️ Test 8</legend>
                <small><strong>Check: React-Testing Library will check Menu rendering and functionality using below button.</strong></small>
                <Button data-testid="drawer-open-button" variant="contained" color="secondary" onClick={() => setDrawer(true)}>Open Menu</Button>
                <SwipeableDrawer data-testid="drawer" anchor="right" onOpen={() => setDrawer(true)} open={drawer} onClose={() => setDrawer(false)}>
                    <List>
                        <ListItem data-testid="drawer-list-item" disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AccountCircle data-testid="drawer-list-item-icon" />
                                </ListItemIcon>
                                <ListItemText data-testid="drawer-list-item-text" primary="User 1" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem data-testid="drawer-list-item" disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AccountCircle data-testid="drawer-list-item-icon" />
                                </ListItemIcon>
                                <ListItemText data-testid="drawer-list-item-text" primary="User 2" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem data-testid="drawer-list-item" disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AccountCircle data-testid="drawer-list-item-icon" />
                                </ListItemIcon>
                                <ListItemText data-testid="drawer-list-item-text" primary="User 3" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem data-testid="drawer-list-item" disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <AccountCircle data-testid="drawer-list-item-icon" />
                                </ListItemIcon>
                                <ListItemText data-testid="drawer-list-item-text" primary="User 4" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </SwipeableDrawer>
            </fieldset>
        </div>
    )
}

export default MaterialUIForm;