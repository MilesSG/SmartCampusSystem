import React, { useState, useEffect } from 'react';
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
  Paper,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Fab,
  Chip,
  Stack
} from '@mui/material';
import {
  Menu as MenuIcon,
  Map as MapIcon,
  Assignment as AssignmentIcon,
  Add as AddIcon,
  LocalLibrary,
  Restaurant,
  LocalShipping,
  WbSunny,
  People,
  School
} from '@mui/icons-material';
import CampusMap from './components/CampusMap';
import TaskList from './components/tasks/TaskList';
import CreateTask from './components/tasks/CreateTask';
import './App.css';

// 模拟实时数据
const mockRealTimeData = {
  library: {
    currentCount: 342,
    maxCount: 500,
    status: '正常'
  },
  canteen: {
    currentCount: 156,
    maxCount: 300,
    status: '空闲'
  },
  expressCenter: {
    packageCount: 128,
    status: '繁忙'
  },
  weather: {
    temperature: '23°C',
    condition: '晴',
    humidity: '65%'
  }
};

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'map' | 'tasks'>('map');
  const [createTaskOpen, setCreateTaskOpen] = useState(false);
  const [realTimeData, setRealTimeData] = useState(mockRealTimeData);

  // 模拟实时数据更新
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        library: {
          ...prev.library,
          currentCount: Math.floor(Math.random() * 500)
        },
        canteen: {
          ...prev.canteen,
          currentCount: Math.floor(Math.random() * 300)
        },
        expressCenter: {
          ...prev.expressCenter,
          packageCount: Math.floor(Math.random() * 200)
        }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (current: number, max: number) => {
    const ratio = current / max;
    if (ratio < 0.5) return 'success';
    if (ratio < 0.8) return 'warning';
    return 'error';
  };

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
        <Box sx={{ width: '30%', mr: 2 }}>
          <Stack spacing={2}>
            {/* 天气信息 */}
            <Card>
              <CardHeader 
                avatar={<WbSunny color="primary" />}
                title="校园天气"
              />
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {realTimeData.weather.temperature}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip label={`天气: ${realTimeData.weather.condition}`} />
                  <Chip label={`湿度: ${realTimeData.weather.humidity}`} />
                </Stack>
              </CardContent>
            </Card>

            {/* 图书馆信息 */}
            <Card>
              <CardHeader
                avatar={<LocalLibrary color="primary" />}
                title="图书馆实时"
              />
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  当前人数: {realTimeData.library.currentCount} / {realTimeData.library.maxCount}
                </Typography>
                <Chip
                  label={realTimeData.library.status}
                  color={getStatusColor(realTimeData.library.currentCount, realTimeData.library.maxCount)}
                />
              </CardContent>
            </Card>

            {/* 食堂信息 */}
            <Card>
              <CardHeader
                avatar={<Restaurant color="primary" />}
                title="食堂实时"
              />
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  当前人数: {realTimeData.canteen.currentCount} / {realTimeData.canteen.maxCount}
                </Typography>
                <Chip
                  label={realTimeData.canteen.status}
                  color={getStatusColor(realTimeData.canteen.currentCount, realTimeData.canteen.maxCount)}
                />
              </CardContent>
            </Card>

            {/* 快递中心 */}
            <Card>
              <CardHeader
                avatar={<LocalShipping color="primary" />}
                title="快递中心"
              />
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  待取件数: {realTimeData.expressCenter.packageCount}
                </Typography>
                <Chip
                  label={realTimeData.expressCenter.status}
                  color={realTimeData.expressCenter.status === '繁忙' ? 'error' : 'success'}
                />
              </CardContent>
            </Card>

            {/* 校园公告 */}
            <Card>
              <CardHeader
                avatar={<School color="primary" />}
                title="校园公告"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  • 图书馆延长开放时间通知
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  • 本周末运动会相关安排
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  • 食堂新增特色菜品预告
                </Typography>
              </CardContent>
            </Card>
          </Stack>
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
};

export default App;
