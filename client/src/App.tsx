import React, { useState } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fab,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Map as MapIcon,
  Assignment as AssignmentIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import CampusMap from './components/CampusMap';
import TaskList from './components/tasks/TaskList';
import CreateTask from './components/tasks/CreateTask';
import FlipBoard from './components/FlipBoard';
import AnnouncementBoard from './components/AnnouncementBoard';
import './App.css';

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'map' | 'tasks'>('map');
  const [createTaskOpen, setCreateTaskOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            智慧校园系统
          </Typography>
          <Typography variant="body1">
            管理员
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: 250 }}>
          <ListItem button onClick={() => {
            setCurrentView('map');
            setDrawerOpen(false);
          }}>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary="校园地图" />
          </ListItem>
          <ListItem button onClick={() => {
            setCurrentView('tasks');
            setDrawerOpen(false);
          }}>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="任务管理" />
          </ListItem>
        </List>
      </Drawer>

      <Box sx={{ flexGrow: 1, display: 'flex', p: 2 }}>
        {/* 左侧信息面板 */}
        <Box sx={{ width: '30%', mr: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ flex: '1 0 auto' }}>
            <FlipBoard />
          </Box>
          <Box sx={{ flex: '1 0 auto' }}>
            <AnnouncementBoard />
          </Box>
        </Box>

        {/* 右侧主要内容区 */}
        <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', borderRadius: 1, overflow: 'hidden' }}>
          {currentView === 'map' ? (
            <CampusMap />
          ) : (
            <TaskList />
          )}
        </Box>
      </Box>

      {currentView === 'tasks' && (
        <Fab
          color="primary"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
          onClick={() => setCreateTaskOpen(true)}
        >
          <AddIcon />
        </Fab>
      )}

      <CreateTask
        open={createTaskOpen}
        onClose={() => setCreateTaskOpen(false)}
        onTaskCreated={() => {
          setCreateTaskOpen(false);
        }}
      />
    </Box>
  );
}

export default App;
