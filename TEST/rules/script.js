// 阻止Enter键提交表单
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
});

// 监听登录表单的提交事件
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // 阻止表单默认提交行为
    
    // 获取用户名和密码输入值
    const username = document.getElementById('username').value.trim();

    const password = document.getElementById('password').value;
    
    // 简单验证输入是否为空
    if (!username || !password) {
        alert('请输入用户名和密码'); // 显示警告提示用户
        return; // 终止函数执行
    }
    
    // 调用模拟登录函数并处理结果
    simulateLogin(username, password)
        .then(response => {
            // 登录成功处理
            alert('登录成功！');
            // 这里可以重定向到其他页面
            // window.location.href = 'dashboard.html';
        })
        .catch(error => {
            // 登录失败处理
            alert('登录失败: ' + error.message);
        });
});

/**
 * 模拟登录API请求
 * @param {string} username - 用户输入的用户名
 * @param {string} password - 用户输入的密码
 * @returns {Promise} 返回一个Promise对象，模拟异步登录操作
 */
function simulateLogin(username, password) {
    return new Promise((resolve, reject) => {
        // 模拟网络延迟
        setTimeout(() => {
            // 简易的用户名密码验证逻辑
            if (username === 'admin' && password === '123456') {
                // 验证成功，返回成功响应
                resolve({ success: true });
            } else {
                // 验证失败，返回错误信息
                reject(new Error('用户名或密码错误'));
            }
        }, 1000); // 1秒延迟模拟网络请求
    });
}


