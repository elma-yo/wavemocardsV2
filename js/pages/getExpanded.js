// cards
const happyCards = document.querySelector('#happyCards');
const expectationCards = document.querySelector('#expectationCards');
const relivedCards = document.querySelector('#relivedCards');
const unstableCards = document.querySelector('#unstableCards');
const amazedCards = document.querySelector('#amazedCards');
const sadnessCards = document.querySelector('#sadnessCards');
const hateCards = document.querySelector('#hateCards');
const angerCards = document.querySelector('#angerCards');
const othersCards = document.querySelector('#othersCards');

// 認識情緒 展開頁面
function initCards() {
    let strCardsHappy = "";
    let strCardsExpectation = "";
    let strCardsRelived = "";
    let strCardsUnstable = "";
    let strCardsAmazed = "";
    let strCardsSadness = "";
    let strCardsHate = "";
    let strCardsAnger = "";
    let strCardsOthers = "";
    let strModal = "";
    let emo;
    aryData.forEach(function(data, i){
        if(data.Category == "快樂"){
            emo = "happy";
            let contentCards = `
            <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
            <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
            <div class="img-box">
                <img src="./upload/${data.id}.svg" alt="${data.Name}">
            </div>
            </button>`;
            strCardsHappy+=contentCards;
        } 
        else if(data.Category == "期待"){
            emo = "expectation";
            let contentCards = `
            <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
            <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
            <div class="img-box">
                <img src="./upload/${data.id}.svg" alt="${data.Name}">
            </div>
            </button>`;
            strCardsExpectation+=contentCards;
        } else if(data.Category == "安心"){
            emo = "relived";
            let contentCards = `
            <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
                <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
                <div class="img-box">
                <img src="./upload/${data.id}.svg" alt="${data.Name}">
                </div>
            </button>`;
            strCardsRelived+=contentCards;
        } else if(data.Category == "不安"){
            emo = "unstable";
            let contentCards = `
            <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
                <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
                <div class="img-box">
                <img src="./upload/${data.id}.svg" alt="${data.Name}">
                </div>
            </button>`;
            strCardsUnstable+=contentCards;
        } else if(data.Category == "驚訝"){
            emo = "amazed";
            let contentCards = `
            <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
                <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
                <div class="img-box">
                <img src="./upload/${data.id}.svg" alt="${data.Name}">
                </div>
            </button>`;
            strCardsAmazed+=contentCards;
        } else if(data.Category == "低落"){
            emo = "sadness";
            let contentCards = `
            <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
                <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
                <div class="img-box">
                <img src="./upload/${data.id}.svg" alt="${data.Name}">
                </div>
            </button>`;
            strCardsSadness+=contentCards;
        } else if(data.Category == "討厭"){
            emo = "hate";
            let contentCards = `
            <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
                <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
                <div class="img-box">
                <img src="./upload/${data.id}.svg" alt="${data.Name}">
                </div>
            </button>`;
            strCardsHate+=contentCards;
        } else if(data.Category == "生氣"){
            emo = "anger";
            let contentCards = `
            <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
                <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
                <div class="img-box">
                <img src="./upload/${data.id}.svg" alt="${data.Name}">
                </div>
            </button>`;
            strCardsAnger+=contentCards;
        } else if(data.Category == "其他"){
        emo = "others";
        let contentCards = `
        <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
            <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
            <div class="img-box">
            <img src="./upload/${data.id}.svg" alt="${data.Name}">
            </div>
        </button>`;
        strCardsOthers+=contentCards;
        }
    })
    happyCards.innerHTML = strCardsHappy;
    expectationCards.innerHTML = strCardsExpectation;
    relivedCards.innerHTML = strCardsRelived;
    unstableCards.innerHTML = strCardsUnstable;
    amazedCards.innerHTML = strCardsAmazed;
    sadnessCards.innerHTML = strCardsSadness;
    hateCards.innerHTML = strCardsHate;
    angerCards.innerHTML = strCardsAnger;
    othersCards.innerHTML = strCardsOthers;
}
// 需將此函式在下放中執行
// axios.get("http://api2.wavemocards.com/emotions?require=cards")
// .then(function(response){
    // let aryData = Object.values(response.data); // 轉成「陣列」
    // let aryIds = Object.keys(response.data); // 資料庫中的各卡片 id (0~64)

    // for(let i=0; i<aryData.length; i++){
    //     aryData[i].id= aryIds[i];
    // }
// })


// let imgHappy01 = "https://wavemocards.com/frontend/upload/01-happy/happy01-statisfy.svg";
// let imgHappy02 = "https://wavemocards.com/frontend/upload/01-happy/happy02-happy.svg";
// let imgHappy03 = "https://wavemocards.com/frontend/upload/01-happy/happy03-happiness.svg";
// let imgHappy04 = "https://wavemocards.com/frontend/upload/01-happy/happy04-proud.svg";
// let imgHappy05 = "https://wavemocards.com/frontend/upload/01-happy/happy05-excited.svg";
// let imgHappy06 = "https://wavemocards.com/frontend/upload/01-happy/happy06-cheerful.svg";
// let imgHappy07 = "https://wavemocards.com/frontend/upload/01-happy/happy07-ecstasy.svg";
// let imgExpectation01 = "https://wavemocards.com/frontend/upload/02-expectation/expaction01-expect.svg";
// let imgExpectation02 = "https://wavemocards.com/frontend/upload/02-expectation/expaction02-confidence.svg";
// let imgExpectation03 = "https://wavemocards.com/frontend/upload/02-expectation/expaction03-interested.svg";
// let imgExpectation04 = "https://wavemocards.com/frontend/upload/02-expectation/expaction04-desire.svg";
// let imgRelived01 = "https://wavemocards.com/frontend/upload/03-relived/relived01-comfortable.svg";
// let imgRelived02 = "https://wavemocards.com/frontend/upload/03-relived/relived02-relax.svg";
// let imgRelived03 = "https://wavemocards.com/frontend/upload/03-relived/relived03-calm.svg";
// let imgRelived04 = "https://wavemocards.com/frontend/upload/03-relived/relived04-relieved.svg";
// let imgRelived05 = "https://wavemocards.com/frontend/upload/03-relived/relived05-ease.svg";
// let imgRelived06 = "https://wavemocards.com/frontend/upload/03-relived/relived06-trust.svg";
// let imgUnstable01 = "https://wavemocards.com/frontend/upload/04-unstable/unstable01-shy.svg";
// let imgUnstable02 = "https://wavemocards.com/frontend/upload/04-unstable/unstable02-worry.svg";
// let imgUnstable03 = "https://wavemocards.com/frontend/upload/04-unstable/unstable03-confused.svg";
// let imgUnstable04 = "https://wavemocards.com/frontend/upload/04-unstable/unstable04-anxious.svg";
// let imgUnstable05 = "https://wavemocards.com/frontend/upload/04-unstable/unstable05-afraid.svg";
// let imgUnstable06 = "https://wavemocards.com/frontend/upload/04-unstable/unstable06-nervous.svg";
// let imgUnstable07 = "https://wavemocards.com/frontend/upload/04-unstable/unstable07-anxious.svg";
// let imgUnstable08 = "https://wavemocards.com/frontend/upload/04-unstable/unstable08-fear.svg";
// let imgAmazed01 = "https://wavemocards.com/frontend/upload/05-amazed/amazed01-stunned.svg";
// let imgAmazed02 = "https://wavemocards.com/frontend/upload/05-amazed/amazed02-astonishment.svg";
// let imgAmazed03 = "https://wavemocards.com/frontend/upload/05-amazed/amazed03-surprised.svg";
// let imgAmazed04 = "https://wavemocards.com/frontend/upload/05-amazed/amazed04-shocked.svg";
// let imgSadness01 = "https://wavemocards.com/frontend/upload/06-sadness/sadness01-helpless.svg";
// let imgSadness02 = "https://wavemocards.com/frontend/upload/06-sadness/sadness02-setback.svg";
// let imgSadness03 = "https://wavemocards.com/frontend/upload/06-sadness/sadness03-disappointed.svg";
// let imgSadness04 = "https://wavemocards.com/frontend/upload/06-sadness/sadness04-powerless.svg";
// let imgSadness05 = "https://wavemocards.com/frontend/upload/06-sadness/sadness05-frustrated.svg";
// let imgSadness06 = "https://wavemocards.com/frontend/upload/06-sadness/sadness06-sad.svg";
// let imgSadness07 = "https://wavemocards.com/frontend/upload/06-sadness/sadness07-powerless.svg";
// let imgSadness08 = "https://wavemocards.com/frontend/upload/06-sadness/sadness08-sorrow.svg";
// let imgSadness09 = "https://wavemocards.com/frontend/upload/06-sadness/sadness09-heartache.svg";
// let imgSadness10 = "https://wavemocards.com/frontend/upload/06-sadness/sadness10-depressed.svg";
// let imgSadness11 = "https://wavemocards.com/frontend/upload/06-sadness/sadness11-collapse.svg";
// let imgSadness12 = "https://wavemocards.com/frontend/upload/06-sadness/sadness12-despair.svg";
// let imgHate01 = "https://wavemocards.com/frontend/upload/07-hate/hate01-boring.svg";
// let imgHate02 = "https://wavemocards.com/frontend/upload/07-hate/hate02-weariness.svg";
// let imgHate03 = "https://wavemocards.com/frontend/upload/07-hate/hate03-inferiority.svg";
// let imgHate04 = "https://wavemocards.com/frontend/upload/07-hate/hate04-hate.svg";
// let imgHate05 = "https://wavemocards.com/frontend/upload/07-hate/hate05-jealousy.svg";
// let imgHate06 = "https://wavemocards.com/frontend/upload/07-hate/hate06-disgust.svg";
// let imgHate07 = "https://wavemocards.com/frontend/upload/07-hate/hate07-nausea.svg";
// let imgHate08 = "https://wavemocards.com/frontend/upload/07-hate/hate08-resentment.svg";
// let imgAnger01 = "https://wavemocards.com/frontend/upload/08-anger/anger01-dissatisfied.svg";
// let imgAnger02 = "https://wavemocards.com/frontend/upload/08-anger/anger02-irritated.svg";
// let imgAnger03 = "https://wavemocards.com/frontend/upload/08-anger/anger03-anger.svg";
// let imgAnger04 = "https://wavemocards.com/frontend/upload/08-anger/anger04-indignant.svg";
// let imgAnger05 = "https://wavemocards.com/frontend/upload/08-anger/anger05-rage.svg";
// let imgOthers01 = "https://wavemocards.com/frontend/upload/09-others/others01-release.svg";
// let imgOthers02 = "https://wavemocards.com/frontend/upload/09-others/others02-awkward.svg";
// let imgOthers03 = "https://wavemocards.com/frontend/upload/09-others/others03-envy.svg";
// let imgOthers04 = "https://wavemocards.com/frontend/upload/09-others/others04-guilty.svg";
// let imgOthers05 = "https://wavemocards.com/frontend/upload/09-others/others05-conflict.svg";
// let imgOthers06 = "https://wavemocards.com/frontend/upload/09-others/others06-regret.svg";
// let imgOthers07 = "https://wavemocards.com/frontend/upload/09-others/others07-injustice.svg";
// let imgOthers08 = "https://wavemocards.com/frontend/upload/09-others/others08-loneliness.svg";
// let imgOthers09 = "https://wavemocards.com/frontend/upload/09-others/others09-shame.svg";
// let imgOthers10 = "https://wavemocards.com/frontend/upload/09-others/others10-touching.svg";
// let imgOthers11 = "https://wavemocards.com/frontend/upload/09-others/others11-excited.svg";

// const happyCards = document.querySelector('#happyCards');
// const expectationCards = document.querySelector('#expectationCards');
// const relivedCards = document.querySelector('#relivedCards');
// const unstableCards = document.querySelector('#unstableCards');
// const amazedCards = document.querySelector('#amazedCards');
// const sadnessCards = document.querySelector('#sadnessCards');
// const hateCards = document.querySelector('#hateCards');
// const angerCards = document.querySelector('#angerCards');
// const othersCards = document.querySelector('#othersCards');

// // const listModal = document.querySelector('.list');

// axios.get("http://api2.wavemocards.com/emotions?require=cards")
// .then(function(response){
// let aryData = Object.values(response.data);
// initCards()
// function initCards() {
//     let strCardsHappy = "";
//     let strCardsExpectation = "";
//     let strCardsRelived = "";
//     let strCardsUnstable = "";
//     let strCardsAmazed = "";
//     let strCardsSadness = "";
//     let strCardsHate = "";
//     let strCardsAnger = "";
//     let strCardsOthers = "";
//     let strModal = "";
//     let emo;
//     aryData.forEach(function(data, i){
//     let imgSrc;
//     if(data.Category == "快樂"){
//         emo = "happy";
//         if(data.Name == "滿足") {
//         imgSrc = imgHappy01;
//         } else if (data.Name == "快樂") {
//         imgSrc = imgHappy02;
//         } else if (data.Name == "幸福") {
//         imgSrc = imgHappy03;
//         } else if (data.Name == "自豪") {
//         imgSrc = imgHappy04;
//         } else if (data.Name == "興奮") {
//         imgSrc = imgHappy05;
//         } else if (data.Name == "痛快") {
//         imgSrc = imgHappy06;
//         } else if (data.Name == "狂喜") {
//         imgSrc = imgHappy07;
//         }
//         let contentCards = `
//         <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
//         <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
//         <div class="img-box">
//             <img src="${imgSrc}}" alt="${data.Name}">
//         </div>
//         </button>`;
//         let contentModals = `
//         <li>
//             <div class="modal fade px-40 px-md-32" id="emo${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog modal-dialog-centered c-modal-xl-card">
//                 <div class="modal-content bg-${emo}">
//                 <div class="modal-body d-sm-flex justify-content-between align-items-center">
//                     <div class="box-bigCard-text">
//                     <div class="d-flex d-md-none w-100 justify-content-center">
//                         <div class="d-sm-none box-bigCard-img mb-8">
//                         <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                         </div>
//                     </div>
//                     <div class="title w-100 mb-20 d-flex justify-content-center justify-content-sm-between  align-items-end">
//                         <h2>${data.Name}</h2>
//                         <!-- <a href="modifyEmoCard.html" role="button">
//                             <i class="bi bi-pencil-square"></i>
//                         </a> -->
//                     </div>
//                     <div class="mb-16">
//                         <h3 class="mb-4">意思：</h3>
//                         <p>${data.Description}</p>
//                     </div>
//                     <div>
//                         <h3 class="mb-4">例句：</h3>
//                         <p>${data.Example}</p>
//                     </div>
//                     </div>
//                     <div class="d-none d-sm-block box-bigCard-img">
//                     <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </li>`;
//         strCardsHappy+=contentCards;
//         strModal+=contentModals;
//     } else if(data.Category == "期待"){
//         emo = "expectation";
//         if(data.Name == "期待") {
//         imgSrc = imgExpectation01;
//         } else if (data.Name == "有信心") {
//         imgSrc = imgExpectation02;
//         } else if (data.Name == "充滿興趣") {
//         imgSrc = imgExpectation03;
//         } else if (data.Name == "渴望") {
//         imgSrc = imgExpectation04;
//         }
//         let contentCards = `
//         <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
//         <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
//         <div class="img-box">
//             <img src="${imgSrc}}" alt="${data.Name}">
//         </div>
//         </button>`;
//         let contentModals = `
//         <li>
//             <div class="modal fade px-40 px-md-32" id="emo${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog modal-dialog-centered c-modal-xl-card">
//                 <div class="modal-content bg-${emo}">
//                 <div class="modal-body d-sm-flex justify-content-between align-items-center">
//                     <div class="box-bigCard-text">
//                     <div class="d-flex d-md-none w-100 justify-content-center">
//                         <div class="d-sm-none box-bigCard-img mb-8">
//                         <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                         </div>
//                     </div>
//                     <div class="title w-100 mb-20 d-flex justify-content-center justify-content-sm-between  align-items-end">
//                         <h2>${data.Name}</h2>
//                         <!-- <a href="modifyEmoCard.html" role="button">
//                             <i class="bi bi-pencil-square"></i>
//                         </a> -->
//                     </div>
//                     <div class="mb-16">
//                         <h3 class="mb-4">意思：</h3>
//                         <p>${data.Description}</p>
//                     </div>
//                     <div>
//                         <h3 class="mb-4">例句：</h3>
//                         <p>${data.Example}</p>
//                     </div>
//                     </div>
//                     <div class="d-none d-sm-block box-bigCard-img">
//                     <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </li>`;
//         strCardsExpectation+=contentCards;
//         strModal+=contentModals;
//     } else if(data.Category == "安心"){
//         emo = "relived";
//         if(data.Name == "舒服") {
//         imgSrc = imgRelived01;
//         } else if (data.Name == "放鬆") {
//         imgSrc = imgRelived02;
//         } else if (data.Name == "平靜") {
//         imgSrc = imgRelived03;
//         } else if (data.Name == "安心") {
//         imgSrc = imgRelived04;
//         } else if (data.Name == "自在") {
//         imgSrc = imgRelived05;
//         } else if (data.Name == "信任") {
//         imgSrc = imgRelived06;
//         }
//         let contentCards = `
//         <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
//             <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
//             <div class="img-box">
//             <img src="${imgSrc}}" alt="${data.Name}">
//             </div>
//         </button>`;
//         let contentModals = `
//         <li>
//             <div class="modal fade px-40 px-md-32" id="emo${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog modal-dialog-centered c-modal-xl-card">
//                 <div class="modal-content bg-${emo}">
//                 <div class="modal-body d-sm-flex justify-content-between align-items-center">
//                     <div class="box-bigCard-text">
//                     <div class="d-flex d-md-none w-100 justify-content-center">
//                         <div class="d-sm-none box-bigCard-img mb-8">
//                         <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                         </div>
//                     </div>
//                     <div class="title w-100 mb-20 d-flex justify-content-center justify-content-sm-between  align-items-end">
//                         <h2>${data.Name}</h2>
//                         <!-- <a href="modifyEmoCard.html" role="button">
//                             <i class="bi bi-pencil-square"></i>
//                         </a> -->
//                     </div>
//                     <div class="mb-16">
//                         <h3 class="mb-4">意思：</h3>
//                         <p>${data.Description}</p>
//                     </div>
//                     <div>
//                         <h3 class="mb-4">例句：</h3>
//                         <p>${data.Example}</p>
//                     </div>
//                     </div>
//                     <div class="d-none d-sm-block box-bigCard-img">
//                     <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </li>`;
//         strCardsRelived+=contentCards;
//         strModal+=contentModals;
//     } else if(data.Category == "不安"){
//         emo = "unstable";
//         if(data.Name == "害羞") {
//         imgSrc = imgUnstable01;
//         } else if (data.Name == "擔心") {
//         imgSrc = imgUnstable02;
//         } else if (data.Name == "迷惘") {
//         imgSrc = imgUnstable03;
//         } else if (data.Name == "不安") {
//         imgSrc = imgUnstable04;
//         } else if (data.Name == "害怕") {
//         imgSrc = imgUnstable05;
//         } else if (data.Name == "緊張") {
//         imgSrc = imgUnstable06;
//         } else if (data.Name == "焦慮") {
//         imgSrc = imgUnstable07;
//         } else if (data.Name == "恐懼") {
//         imgSrc = imgUnstable08;
//         }
//         let contentCards = `
//         <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
//             <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
//             <div class="img-box">
//             <img src="${imgSrc}}" alt="${data.Name}">
//             </div>
//         </button>`;
//         let contentModals = `
//         <li>
//             <div class="modal fade px-40 px-md-32" id="emo${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog modal-dialog-centered c-modal-xl-card">
//                 <div class="modal-content bg-${emo}">
//                 <div class="modal-body d-sm-flex justify-content-between align-items-center">
//                     <div class="box-bigCard-text">
//                     <div class="d-flex d-md-none w-100 justify-content-center">
//                         <div class="d-sm-none box-bigCard-img mb-8">
//                         <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                         </div>
//                     </div>
//                     <div class="title w-100 mb-20 d-flex justify-content-center justify-content-sm-between  align-items-end">
//                         <h2>${data.Name}</h2>
//                         <!-- <a href="modifyEmoCard.html" role="button">
//                             <i class="bi bi-pencil-square"></i>
//                         </a> -->
//                     </div>
//                     <div class="mb-16">
//                         <h3 class="mb-4">意思：</h3>
//                         <p>${data.Description}</p>
//                     </div>
//                     <div>
//                         <h3 class="mb-4">例句：</h3>
//                         <p>${data.Example}</p>
//                     </div>
//                     </div>
//                     <div class="d-none d-sm-block box-bigCard-img">
//                     <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </li>`;
//         strCardsUnstable+=contentCards;
//         strModal+=contentModals;
//     } else if(data.Category == "驚訝"){
//         emo = "amazed";
//         if(data.Name == "錯愕") {
//         imgSrc = imgAmazed01;
//         } else if (data.Name == "驚訝") {
//         imgSrc = imgAmazed02;
//         } else if (data.Name == "驚喜") {
//         imgSrc = imgAmazed03;
//         } else if (data.Name == "震驚") {
//         imgSrc = imgAmazed04;
//         }
//         let contentCards = `
//         <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
//             <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
//             <div class="img-box">
//             <img src="${imgSrc}}" alt="${data.Name}">
//             </div>
//         </button>`;
//         let contentModals = `
//         <li>
//             <div class="modal fade px-40 px-md-32" id="emo${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog modal-dialog-centered c-modal-xl-card">
//                 <div class="modal-content bg-${emo}">
//                 <div class="modal-body d-sm-flex justify-content-between align-items-center">
//                     <div class="box-bigCard-text">
//                     <div class="d-flex d-md-none w-100 justify-content-center">
//                         <div class="d-sm-none box-bigCard-img mb-8">
//                         <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                         </div>
//                     </div>
//                     <div class="title w-100 mb-20 d-flex justify-content-center justify-content-sm-between  align-items-end">
//                         <h2>${data.Name}</h2>
//                         <!-- <a href="modifyEmoCard.html" role="button">
//                             <i class="bi bi-pencil-square"></i>
//                         </a> -->
//                     </div>
//                     <div class="mb-16">
//                         <h3 class="mb-4">意思：</h3>
//                         <p>${data.Description}</p>
//                     </div>
//                     <div>
//                         <h3 class="mb-4">例句：</h3>
//                         <p>${data.Example}</p>
//                     </div>
//                     </div>
//                     <div class="d-none d-sm-block box-bigCard-img">
//                     <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </li>`;
//         strCardsAmazed+=contentCards;
//         strModal+=contentModals;
//     } else if(data.Category == "低落"){
//         emo = "sadness";
//         if(data.Name == "無奈") {
//         imgSrc = imgSadness01;
//         } else if (data.Name == "挫折") {
//         imgSrc = imgSadness02;
//         } else if (data.Name == "失望") {
//         imgSrc = imgSadness03;
//         } else if (data.Name == "無力") {
//         imgSrc = imgSadness04;
//         } else if (data.Name == "沮喪") {
//         imgSrc = imgSadness05;
//         } else if (data.Name == "難過") {
//         imgSrc = imgSadness06;
//         } else if (data.Name == "無助") {
//         imgSrc = imgSadness07;
//         } else if (data.Name == "悲傷") {
//         imgSrc = imgSadness08;
//         } else if (data.Name == "心痛") {
//         imgSrc = imgSadness09;
//         } else if (data.Name == "憂鬱") {
//         imgSrc = imgSadness10;
//         } else if (data.Name == "崩潰") {
//         imgSrc = imgSadness11;
//         } else if (data.Name == "絕望") {
//         imgSrc = imgSadness12;
//         }
//         let contentCards = `
//         <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
//             <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
//             <div class="img-box">
//             <img src="${imgSrc}}" alt="${data.Name}">
//             </div>
//         </button>`;
//         let contentModals = `
//         <li>
//             <div class="modal fade px-40 px-md-32" id="emo${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog modal-dialog-centered c-modal-xl-card">
//                 <div class="modal-content bg-${emo}">
//                 <div class="modal-body d-sm-flex justify-content-between align-items-center">
//                     <div class="box-bigCard-text">
//                     <div class="d-flex d-md-none w-100 justify-content-center">
//                         <div class="d-sm-none box-bigCard-img mb-8">
//                         <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                         </div>
//                     </div>
//                     <div class="title w-100 mb-20 d-flex justify-content-center justify-content-sm-between  align-items-end">
//                         <h2>${data.Name}</h2>
//                         <!-- <a href="modifyEmoCard.html" role="button">
//                             <i class="bi bi-pencil-square"></i>
//                         </a> -->
//                     </div>
//                     <div class="mb-16">
//                         <h3 class="mb-4">意思：</h3>
//                         <p>${data.Description}</p>
//                     </div>
//                     <div>
//                         <h3 class="mb-4">例句：</h3>
//                         <p>${data.Example}</p>
//                     </div>
//                     </div>
//                     <div class="d-none d-sm-block box-bigCard-img">
//                     <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </li>`;
//         strCardsSadness+=contentCards;
//         strModal+=contentModals;
//     } else if(data.Category == "討厭"){
//         emo = "hate";
//         if(data.Name == "無聊") {
//         imgSrc = imgHate01;
//         } else if (data.Name == "厭倦") {
//         imgSrc = imgHate02;
//         } else if (data.Name == "自卑") {
//         imgSrc = imgHate03;
//         } else if (data.Name == "討厭") {
//         imgSrc = imgHate04;
//         } else if (data.Name == "嫉妒") {
//         imgSrc = imgHate05;
//         } else if (data.Name == "厭惡") {
//         imgSrc = imgHate06;
//         } else if (data.Name == "噁心") {
//         imgSrc = imgHate07;
//         } else if (data.Name == "怨恨") {
//         imgSrc = imgHate08;
//         }
//         let contentCards = `
//         <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
//             <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
//             <div class="img-box">
//             <img src="${imgSrc}}" alt="${data.Name}">
//             </div>
//         </button>`;
//         let contentModals = `
//         <li>
//             <div class="modal fade px-40 px-md-32" id="emo${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog modal-dialog-centered c-modal-xl-card">
//                 <div class="modal-content bg-${emo}">
//                 <div class="modal-body d-sm-flex justify-content-between align-items-center">
//                     <div class="box-bigCard-text">
//                     <div class="d-flex d-md-none w-100 justify-content-center">
//                         <div class="d-sm-none box-bigCard-img mb-8">
//                         <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                         </div>
//                     </div>
//                     <div class="title w-100 mb-20 d-flex justify-content-center justify-content-sm-between  align-items-end">
//                         <h2>${data.Name}</h2>
//                         <!-- <a href="modifyEmoCard.html" role="button">
//                             <i class="bi bi-pencil-square"></i>
//                         </a> -->
//                     </div>
//                     <div class="mb-16">
//                         <h3 class="mb-4">意思：</h3>
//                         <p>${data.Description}</p>
//                     </div>
//                     <div>
//                         <h3 class="mb-4">例句：</h3>
//                         <p>${data.Example}</p>
//                     </div>
//                     </div>
//                     <div class="d-none d-sm-block box-bigCard-img">
//                     <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </li>`;
//         strCardsHate+=contentCards;
//         strModal+=contentModals;
//     } else if(data.Category == "生氣"){
//         emo = "anger";
//         if(data.Name == "不滿") {
//         imgSrc = imgAnger01;
//         } else if (data.Name == "煩躁") {
//         imgSrc = imgAnger02;
//         } else if (data.Name == "生氣") {
//         imgSrc = imgAnger03;
//         } else if (data.Name == "憤怒") {
//         imgSrc = imgAnger04;
//         } else if (data.Name == "暴怒") {
//         imgSrc = imgAnger05;
//         }
//         let contentCards = `
//         <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
//             <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
//             <div class="img-box">
//             <img src="${imgSrc}}" alt="${data.Name}">
//             </div>
//         </button>`;
//         let contentModals = `
//         <li>
//             <div class="modal fade px-40 px-md-32" id="emo${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog modal-dialog-centered c-modal-xl-card">
//                 <div class="modal-content bg-${emo}">
//                 <div class="modal-body d-sm-flex justify-content-between align-items-center">
//                     <div class="box-bigCard-text">
//                     <div class="d-flex d-md-none w-100 justify-content-center">
//                         <div class="d-sm-none box-bigCard-img mb-8">
//                         <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                         </div>
//                     </div>
//                     <div class="title w-100 mb-20 d-flex justify-content-center justify-content-sm-between  align-items-end">
//                         <h2>${data.Name}</h2>
//                         <!-- <a href="modifyEmoCard.html" role="button">
//                             <i class="bi bi-pencil-square"></i>
//                         </a> -->
//                     </div>
//                     <div class="mb-16">
//                         <h3 class="mb-4">意思：</h3>
//                         <p>${data.Description}</p>
//                     </div>
//                     <div>
//                         <h3 class="mb-4">例句：</h3>
//                         <p>${data.Example}</p>
//                     </div>
//                     </div>
//                     <div class="d-none d-sm-block box-bigCard-img">
//                     <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </li>`;
//         strCardsAnger+=contentCards;
//         strModal+=contentModals;
//     } else if(data.Category == "其他"){
//         emo = "others";
//         if(data.Name == "釋懷") {
//         imgSrc = imgOthers01;
//         } else if (data.Name == "尷尬") {
//         imgSrc = imgOthers02;
//         } else if (data.Name == "羨慕") {
//         imgSrc = imgOthers03;
//         } else if (data.Name == "愧疚") {
//         imgSrc = imgOthers04;
//         } else if (data.Name == "矛盾") {
//         imgSrc = imgOthers05;
//         } else if (data.Name == "後悔") {
//         imgSrc = imgOthers06;
//         } else if (data.Name == "委屈") {
//         imgSrc = imgOthers07;
//         } else if (data.Name == "寂寞") {
//         imgSrc = imgOthers08;
//         } else if (data.Name == "羞恥") {
//         imgSrc = imgOthers09;
//         } else if (data.Name == "感動") {
//         imgSrc = imgOthers10;
//         } else if (data.Name == "激動") {
//         imgSrc = imgOthers11;
//         }
//         let contentCards = `
//         <button type="button" class="class-card me-16 bg-${emo} link-gray-900 class-card-${emo}" data-bs-toggle="modal" data-bs-target="#emo${i}">
//             <p>${data.Name[0]}&nbsp;${data.Name[1]}</p>
//             <div class="img-box">
//             <img src="${imgSrc}}" alt="${data.Name}">
//             </div>
//         </button>`;
//         let contentModals = `
//         <li>
//             <div class="modal fade px-40 px-md-32" id="emo${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog modal-dialog-centered c-modal-xl-card">
//                 <div class="modal-content bg-${emo}">
//                 <div class="modal-body d-sm-flex justify-content-between align-items-center">
//                     <div class="box-bigCard-text">
//                     <div class="d-flex d-md-none w-100 justify-content-center">
//                         <div class="d-sm-none box-bigCard-img mb-8">
//                         <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                         </div>
//                     </div>
//                     <div class="title w-100 mb-20 d-flex justify-content-center justify-content-sm-between  align-items-end">
//                         <h2>${data.Name}</h2>
//                         <!-- <a href="modifyEmoCard.html" role="button">
//                             <i class="bi bi-pencil-square"></i>
//                         </a> -->
//                     </div>
//                     <div class="mb-16">
//                         <h3 class="mb-4">意思：</h3>
//                         <p>${data.Description}</p>
//                     </div>
//                     <div>
//                         <h3 class="mb-4">例句：</h3>
//                         <p>${data.Example}</p>
//                     </div>
//                     </div>
//                     <div class="d-none d-sm-block box-bigCard-img">
//                     <img class="w-100" src="${imgSrc}" alt="${data.Name}">
//                     </div>
//                 </div>
//                 </div>
//             </div>
//             </div>
//         </li>`;
//         strCardsOthers+=contentCards;
//         strModal+=contentModals;
//     }
//     })
//     happyCards.innerHTML = strCardsHappy;
//     expectationCards.innerHTML = strCardsExpectation;
//     relivedCards.innerHTML = strCardsRelived;
//     unstableCards.innerHTML = strCardsUnstable;
//     amazedCards.innerHTML = strCardsAmazed;
//     sadnessCards.innerHTML = strCardsSadness;
//     hateCards.innerHTML = strCardsHate;
//     angerCards.innerHTML = strCardsAnger;
//     othersCards.innerHTML = strCardsOthers;
//     // listModal.innerHTML = strModal;
// }
// })