from flask import Flask, request, jsonify
from flask_cors import CORS  # 导入 CORS 模块以支持跨域请求

app = Flask(__name__)  # 创建 Flask 应用实例
CORS(app)  # 启用跨域资源共享，允许前端访问 API

@app.route('/calculate', methods=['POST'])  # 定义 /calculate 路由，只接受 POST 请求
def calculate():
    data = request.json  # 获取请求中的 JSON 数据
    expression = data.get('expression')  # 提取表达式字符串
    
    try:
        # 使用 eval() 对表达式求值（注意：存在安全风险，仅用于演示）
        result = eval(expression)
        # 返回计算结果（JSON 格式）
        return jsonify({'result': result})
    except Exception as e:
        # 如果出现异常，返回错误信息和 HTTP 状态码 400
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    # 当脚本被直接运行时，启动 Flask 开发服务器
    app.run(debug=True)  # debug=True 表示启用调试模式