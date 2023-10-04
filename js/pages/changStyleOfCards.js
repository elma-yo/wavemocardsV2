const btnExpand = document.querySelector('#btnExpand');
const btnFold = document.querySelector('#btnFold');
const btnEmoTable = document.querySelector('#btnEmoTable');
const expanded = document.querySelector('#expanded');
const folded = document.querySelector('#folded');
const emoTable = document.querySelector('#emoTable');

// 檢查 localStorage 中的 btnName，並切換到該介面
let recBtnName = localStorage.getItem("btnName");
if(recBtnName=="fold"){
    btnFolded();
} else if (recBtnName=="emoTable") {
    btnEmoTableOn();
} else {
    btnExpanded();
}

// 3 個按鈕的監聽事件 該按鈕被點擊時，資料內容會轉換
btnExpand.addEventListener('click',function(){
    // 將被點擊按鈕名稱 紀錄到 localStorage 中
    let btnName = "expand";
    localStorage.setItem("btnName", btnName);
    // 轉換介面
    btnExpanded();
})
btnFold.addEventListener('click',function(){
    // 將被點擊按鈕名稱 紀錄到 localStorage 中
    let btnName = "fold";
    localStorage.setItem("btnName", btnName);
    // 轉換介面
    btnFolded();
})
btnEmoTable.addEventListener('click',function(){
    // 將被點擊按鈕名稱 紀錄到 localStorage 中
    let btnName = "emoTable";
    localStorage.setItem("btnName", btnName);
    // 轉換介面
    btnEmoTableOn();
})
function btnExpanded(){
    btnExpand.classList.remove('btn', 'btn-outline-main-tint01', 'c-btn-outline-main-tint01');
    btnExpand.classList.add('btn-disable');
    btnExpand.disabled=true;
    if(btnFold.disabled==true){
        btnFold.disabled=false;
        btnFold.classList.add('btn', 'btn-outline-main-tint01', 'c-btn-outline-main-tint01');
        btnFold.classList.remove('btn-disable');
    }
    if (btnEmoTable.disabled==true){
        btnEmoTable.disabled=false;
        btnEmoTable.classList.add('btn', 'btn-outline-main-tint01', 'c-btn-outline-main-tint01');
        btnEmoTable.classList.remove('btn-disable');
    }
    expanded.classList.remove('d-none');
    expanded.classList.add('d-block');
    folded.classList.remove('d-block');
    folded.classList.add('d-none');
    emoTable.classList.remove('d-block');
    emoTable.classList.add('d-none');
}
function btnFolded(){
    btnFold.classList.remove('btn', 'btn-outline-main-tint01', 'c-btn', 'c-btn-outline-main-tint01', 'fw-bold');
    btnFold.classList.add('btn-disable');
    btnFold.disabled=true;
    if(btnExpand.disabled==true){
        btnExpand.disabled=false;
        btnExpand.classList.add('btn', 'btn-outline-main-tint01', 'c-btn', 'c-btn-outline-main-tint01', 'fw-bold');
        btnExpand.classList.remove('btn-disable');
    }
    if (btnEmoTable.disabled==true){
        btnEmoTable.disabled=false;
        btnEmoTable.classList.add('btn', 'btn-outline-main-tint01', 'c-btn', 'c-btn-outline-main-tint01', 'fw-bold');
        btnEmoTable.classList.remove('btn-disable');
    }
    folded.classList.remove('d-none');
    folded.classList.add('d-block');
    expanded.classList.remove('d-block');
    expanded.classList.add('d-none');
    emoTable.classList.remove('d-block');
    emoTable.classList.add('d-none');
}
function btnEmoTableOn(){
    btnEmoTable.classList.remove('btn', 'btn-outline-main-tint01', 'c-btn', 'c-btn-outline-main-tint01', 'fw-bold');
    btnEmoTable.classList.add('btn-disable');
    btnEmoTable.disabled=true;
    if(btnExpand.disabled==true){
        btnExpand.disabled=false;
        btnExpand.classList.add('btn', 'btn-outline-main-tint01', 'c-btn', 'c-btn-outline-main-tint01', 'fw-bold');
        btnExpand.classList.remove('btn-disable');
    }
    if (btnFold.disabled==true){
        btnFold.disabled=false;
        btnFold.classList.add('btn', 'btn-outline-main-tint01', 'c-btn', 'c-btn-outline-main-tint01', 'fw-bold');
        btnFold.classList.remove('btn-disable');
    }
    emoTable.classList.remove('d-none');
    emoTable.classList.add('d-block');
    expanded.classList.remove('d-block');
    expanded.classList.add('d-none');
    folded.classList.remove('d-block');
    folded.classList.add('d-none');
}