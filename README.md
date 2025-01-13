# 智慧校园系统 (Smart Campus System) 🏫

一个现代化的智慧校园管理系统，提供校园地图、路径规划、任务管理等功能。

## 功能特点 ✨

- 🗺️ **交互式校园地图**
  - 基于 OpenStreetMap 的实时地图显示
  - 支持缩放、平移等操作
  - 自定义地图标记和图标

- ��️ **智能路径规划**
  - 基于 OSRM 引擎的实时路径规划
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

## OSRM 路径规划算法说明 🗺️

本项目使用 OSRM（Open Source Routing Machine）作为核心路径规划引擎。OSRM 是一个高性能的路径规划引擎，其核心算法和特点如下：

### 1. 核心算法
- **Contraction Hierarchies (CH)**: 
  - 一种层次化的图压缩算法
  - 通过预处理创建路网的层次结构
  - 显著提高查询效率
  - 支持双向搜索策略

- **Multi-Level Dijkstra**:
  - 基于层次化的 Dijkstra 算法变体
  - 在压缩的图层次上进行路径搜索
  - 比传统 Dijkstra 算法更快
  - 保证最短路径的准确性

### 2. 关键特性
- **预处理优化**:
  - 对路网数据进行预处理
  - 创建层次化的数据结构
  - 生成快速访问索引
  - 优化查询性能

- **实时路径计算**:
  - 毫秒级的响应时间
  - 支持实时交通数据
  - 动态路径更新
  - 多种交通方式支持

### 3. 项目实现
```typescript
// OSRM API 调用示例
async function getRoutePath(start: [number, number], end: [number, number]) {
  const response = await fetch(
    `https://router.project-osrm.org/route/v1/foot/${start[1]},${start[0]};${end[1]},${end[0]}?overview=full&geometries=geojson`
  );
  const data = await response.json();
  return data.routes[0].geometry.coordinates;
}
```

### 4. 性能优势
- 相比传统 Dijkstra 算法，速度提升 100-1000 倍
- 支持大规模路网数据
- 内存占用优化
- 适合实时应用场景

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
   - 基于 Contraction Hierarchies 的高效路径搜索

2. **可视化效果**
   - 平滑的路径动画
   - 起点/终点标记动画
   - 路径发光效果
   - 自适应缩放视图

3. **交互方式**
   - 点击地图选择起点和终点
   - 实时显示距离和时间估算
   - 支持路径重置
   - 路径动画控制

## 贡献指南 🤝

欢迎提交 Pull Request 或创建 Issue！

## 许可证 📄

MIT License - 查看 [LICENSE](LICENSE) 文件了解更多详情。

## 联系方式 📧

- GitHub: [@MilesSG](https://github.com/MilesSG) 