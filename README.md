# LMM Study Projects

这个仓库包含LMM学习项目，目前包括一个简单的计算器应用程序。

## 项目结构

```
projects/
└── calculator/
    ├── backend/
    │   └── calculator.py - Flask后端API
    └── frontend/
        ├── index.html - 计算器HTML界面
        ├── style.css - 计算器样式
        └── app.js - Vue.js前端逻辑
```

## 计算器应用

这是一个简单的Web计算器，使用Vue.js作为前端框架，Flask作为后端API。

### 运行方法

1. 启动后端服务器:
   ```
   cd projects/calculator/backend
   python calculator.py
   ```

2. 在浏览器中打开`frontend/index.html`文件

### 功能

- 基本的算术运算（加、减、乘、除）
- 清除输入
- 错误处理