// 自適應高度的textarea
var textarea = document.querySelector('textarea');
textarea.addEventListener('input', (e) => {
    textarea.style.height = '100px';
    textarea.style.height = e.target.scrollHeight + 'px';
});
