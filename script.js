// 获取 DOM 元素
const nameDisplay = document.getElementById('name-display');
const idDisplay = document.getElementById('id-display');
const nameInput = document.getElementById('name-input');
const idInput = document.getElementById('id-input');
const editBtn = document.getElementById('edit-btn');
const saveBtn = document.getElementById('save-btn');

// 点击「修改信息」按钮：切换到编辑状态
editBtn.addEventListener('click', () => {
    // 隐藏显示文本，显示输入框
    nameDisplay.classList.add('hidden');
    idDisplay.classList.add('hidden');
    nameInput.classList.remove('hidden');
    idInput.classList.remove('hidden');
    
    // 隐藏修改按钮，显示保存按钮
    editBtn.classList.add('hidden');
    saveBtn.classList.remove('hidden');
    
    // 自动聚焦到姓名输入框
    nameInput.focus();
});

// 点击「保存」按钮：保存修改并切换到显示状态
saveBtn.addEventListener('click', () => {
    // 获取输入框的值（去除首尾空格）
    const newName = nameInput.value.trim();
    const newId = idInput.value.trim();
    
    // 简单验证：不能为空
    if (!newName) {
        alert('姓名不能为空！');
        nameInput.focus();
        return;
    }
    if (!newId) {
        alert('学号不能为空！');
        idInput.focus();
        return;
    }
    
    // 更新显示文本
    nameDisplay.textContent = newName;
    idDisplay.textContent = newId;
    
    // 隐藏输入框，显示文本
    nameInput.classList.add('hidden');
    idInput.classList.add('hidden');
    nameDisplay.classList.remove('hidden');
    idDisplay.classList.remove('hidden');
    
    // 隐藏保存按钮，显示修改按钮
    saveBtn.classList.add('hidden');
    editBtn.classList.remove('hidden');
    
    alert('信息保存成功！');
});