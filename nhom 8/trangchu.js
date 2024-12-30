// Chức năng hiển thị form đăng nhập
function showLoginForm() {
    document.getElementById('login-form').classList.add('active');
    document.getElementById('register-form').classList.remove('active');
}

// Chức năng hiển thị form đăng ký
function showRegisterForm() {
    document.getElementById('register-form').classList.add('active');
    document.getElementById('login-form').classList.remove('active');
}

// Xử lý form đăng nhập
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    if (username && password) {
        alert('Đăng nhập thành công!');
        // Chuyển hướng hoặc xử lý đăng nhập ở đây (gửi request về server, v.v.)
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
});

// Xử lý form đăng ký
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (password === confirmPassword) {
        alert('Đăng ký thành công!');
        // Chuyển hướng hoặc xử lý đăng ký ở đây (gửi request về server, v.v.)
    } else {
        alert('Mật khẩu xác nhận không khớp!');
    }
});
