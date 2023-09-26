// 防止頁面移轉
window.onbeforeunload = function () {
    return "Are you really sure?";
}