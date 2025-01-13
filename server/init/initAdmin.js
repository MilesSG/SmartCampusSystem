const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config();

const initializeAdmin = async () => {
  try {
    // 连接数据库
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/smart-campus');
    
    // 检查是否已存在管理员账号
    const existingAdmin = await User.findOne({ username: 'admin' });
    if (!existingAdmin) {
      // 创建管理员账号
      const hashedPassword = await bcrypt.hash('admin123', 10);
      const adminUser = new User({
        username: 'admin',
        password: hashedPassword,
        name: '系统管理员',
        role: 'admin',
        department: '信息技术部',
        createdAt: new Date()
      });
      
      await adminUser.save();
      console.log('管理员账号创建成功');
    } else {
      console.log('管理员账号已存在');
    }
    
    process.exit(0);
  } catch (error) {
    console.error('初始化管理员账号失败:', error);
    process.exit(1);
  }
};

initializeAdmin(); 