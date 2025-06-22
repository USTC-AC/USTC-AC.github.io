// 简单的密码保护功能
function checkPassword() {
    try {
      // 从 localStorage 检查是否已经验证过
      if (localStorage.getItem('accessGranted') === 'true') {
        document.getElementById('password-protection').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
        return;
      }
      
      const password = document.getElementById('password-input').value;
      // 这里设置您的密码，建议使用更安全的方式存储和验证
      const correctPassword = 'Ustcac2025';
      
      if (password === correctPassword) {
        // 存储访问状态
        localStorage.setItem('accessGranted', 'true');
        document.getElementById('password-protection').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
      } else {
        alert('密码错误，请重试');
      }
    } catch (error) {
      console.error('密码验证出错:', error);
    }
  }
  
  // 页面加载时检查
  function initPasswordProtection() {
    try {
      if (localStorage.getItem('accessGranted') === 'true') {
        document.getElementById('password-protection').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
      }
    } catch (error) {
      console.error('初始化密码保护出错:', error);
    }
  }
  
  // 确保DOM完全加载后再执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPasswordProtection);
  } else {
    initPasswordProtection();
  }