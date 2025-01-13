# 智慧校园系统 (Smart Campus System) 🏫

一个现代化的智慧校园管理系统，提供校园地图、路径规划、任务管理等功能。

## 功能特点 ✨

- 🗺️ **交互式校园地图**
  - 基于 OpenStreetMap 的实时地图显示
  - 支持缩放、平移等操作
  - 自定义地图标记和图标

- 🛣️ **智能路径规划**
  - 基于真实道路网络的路径计算
  - 实时距离和时间估算
  - 平滑的路径动画效果
  - 自动路径优化

- 📋 **任务管理系统**
  - 创建和管理校园任务
  - 任务优先级设置
  - 任务状态追踪
  - 任务位置关联

- 💫 **现代化 UI/UX**
  - Material-UI 设计语言
  - 响应式布局
  - 流畅动画效果
  - 直观的用户界面

## 技术栈 🛠️

### 前端
- ⚛️ **React** (v18.2.0) - 用户界面构建
- 📦 **TypeScript** (v4.9.5) - 类型安全和开发效率
- 🎨 **Material-UI** (v5.15.3) - UI 组件库
- 🗺️ **Leaflet** (v1.9.4) - 地图交互
  - react-leaflet (v4.2.1)
  - leaflet-ant-path (v1.3.0) - 路径动画效果
- 📐 **Turf.js** (v7.2.0) - 地理空间分析
- 🔄 **Axios** (v1.6.5) - HTTP 请求

### 后端
- 🚀 **Node.js** - 服务器运行环境
- 📁 **JSON** - 数据存储
- 🛣️ **OSRM** - 路径规划服务

## 快速开始 🚀

1. **克隆项目**
```bash
git clone https://github.com/MilesSG/SmartCampusSystem.git
cd SmartCampusSystem
```

2. **安装依赖**
```bash
# 安装前端依赖
cd client
npm install

# 安装后端依赖
cd ../server
npm install
```

3. **启动服务**
```bash
# 启动前端服务
cd client
npm start

# 启动后端服务
cd ../server
npm start
```

4. **访问应用**
打开浏览器访问 http://localhost:3000

## 项目结构 📁

```
SmartCampusSystem/
├── client/                 # 前端代码
│   ├── src/
│   │   ├── components/    # React 组件
│   │   ├── styles/       # 样式文件
│   │   └── App.tsx       # 主应用组件
│   └── package.json
├── server/                # 后端代码
│   ├── data/            # JSON 数据存储
│   └── index.js         # 服务器入口
└── README.md
```

## 路径规划功能说明 🗺️

系统使用了多个先进技术来实现精确的路径规划：

1. **路径计算**
   - 使用 OSRM 服务进行实际道路路径规划
   - 支持步行路径优化
   - 实时距离计算

2. **可视化效果**
   - 平滑的路径动画
   - 起点/终点标记动画
   - 路径发光效果

3. **交互方式**
   - 点击地图选择起点和终点
   - 实时显示距离和时间估算
   - 支持路径重置

## 贡献指南 🤝

欢迎提交 Pull Request 或创建 Issue！

## 许可证 📄

MIT License - 查看 [LICENSE](LICENSE) 文件了解更多详情。

## 联系方式 📧

- GitHub: [@MilesSG](https://github.com/MilesSG) 