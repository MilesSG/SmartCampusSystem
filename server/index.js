const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

// 数据文件路径
const TASKS_FILE = path.join(__dirname, 'data', 'tasks.json');

// 中间件
app.use(cors());
app.use(express.json());

// 读取任务数据
async function readTasks() {
  try {
    const data = await fs.readFile(TASKS_FILE, 'utf8');
    return JSON.parse(data).tasks;
  } catch (error) {
    console.error('Error reading tasks:', error);
    return [];
  }
}

// 保存任务数据
async function saveTasks(tasks) {
  try {
    await fs.writeFile(TASKS_FILE, JSON.stringify({ tasks }, null, 2));
  } catch (error) {
    console.error('Error saving tasks:', error);
  }
}

// API路由
// 获取所有任务
app.get('/api/tasks', async (req, res) => {
  const tasks = await readTasks();
  res.json(tasks);
});

// 创建新任务
app.post('/api/tasks', async (req, res) => {
  try {
    const tasks = await readTasks();
    const newTask = {
      id: Date.now().toString(),
      ...req.body,
      creator: {
        name: '管理员',
        username: 'admin'
      },
      createdAt: new Date().toISOString()
    };
    tasks.push(newTask);
    await saveTasks(tasks);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 更新任务状态
app.patch('/api/tasks/:id/status', async (req, res) => {
  try {
    const tasks = await readTasks();
    const task = tasks.find(t => t.id === req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    task.status = req.body.status;
    task.updatedAt = new Date().toISOString();
    await saveTasks(tasks);
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 删除任务
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    let tasks = await readTasks();
    tasks = tasks.filter(t => t.id !== req.params.id);
    await saveTasks(tasks);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
}); 