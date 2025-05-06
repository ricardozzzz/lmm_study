// 引入 Vue 3 的 createApp 方法
const { createApp } = Vue

// 创建并挂载 Vue 应用
createApp({
  // 数据对象，包含表达式和结果
  data() {
    return {
      expression: '',  // 存储用户输入的表达式
      result: ''       // 存储计算结果或错误信息
    }
  },
  methods: {
    // 计算方法：向后端发送请求
    async calculate() {
      try {
        // 发送 POST 请求到 Flask 后端
        const response = await fetch('http://localhost:5000/calculate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'  // 指定请求内容类型为 JSON
          },
          body: JSON.stringify({ expression: this.expression })  // 将表达式转换为 JSON 字符串
        });
        
        // 解析返回的 JSON 数据
        const data = await response.json();
        
        // 如果有错误信息，显示错误
        if (data.error) {
          this.result = '错误: ' + data.error;
        } else {
          // 否则显示计算结果
          this.result = data.result;
        }
      } catch (error) {
        // 捕获网络错误或其他异常
        this.result = '请求失败: ' + error;
      }
    },
    // 追加字符到表达式的方法
    appendChar(char) {
      this.expression += char;
    },
    // 清空表达式和结果的方法
    clear() {
      this.expression = '';
      this.result = '';
    }
  }
}).mount('#app')  // 将 Vue 应用挂载到 id 为 #app 的 DOM 元素上