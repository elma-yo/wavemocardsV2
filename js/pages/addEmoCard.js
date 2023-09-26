const emoName = document.getElementById("addEmoName")
const emoDefinition = document.getElementById("addEmoDefinition")
const emoExample = document.getElementById("addEmoExample")
const forEmoImage = document.getElementById("forAddEmoImage")
const emoImageInput = document.getElementById("addEmoImage")
const emoImage = document.getElementById("emoImage")
const must = document.querySelectorAll(".must")[0]
const limitationName = document.querySelector(".limitation__name")
const limitationDefinition = document.querySelector(".limitation__definition")
const limitationExample = document.querySelector(".limitation__example")

const NAME_WORD_LIMITATION = 5
const WORD_LIMITATION = 30

/**
 * 判斷是否輸入字數超過限制
 *
 * @param {number} value - input value
 * @param {number} limitation - 字數限制
 * @param {HTMLElement} limitationElement - 限制用的那個 DOM 元素
 */
function determineWordOverLimitation(value, limitation, limitationElement) {
  if (value > limitation) {
    limitationElement.classList.add("text-pink-dark")
  } else if (limitationElement.classList.contains("text-pink-dark")) {
    limitationElement.classList.remove("text-pink-dark")
  }
  if (limitationElement.firstElementChild) {
    limitationElement.firstElementChild.textContent = value
  } else {
    throw new Error(
      "請在限制元素內使用一個元素去放置目前字數，可以參考前面的 HTML 作法"
    )
  }
}

emoName.addEventListener("blur", (e) => {
  if (e.target.value.length === 0) {
    must.classList.add("text-pink-dark")
    emoName.nextElementSibling.classList.add("d-block")
    emoName.classList.add("border", "border-2", "border-pink-dark")
  }
})

emoName.addEventListener("input", (e) => {
  if (emoName.nextElementSibling.classList.contains("d-block")) {
    must.classList.remove("text-pink-dark")
    emoName.nextElementSibling.classList.remove("d-block")
    emoName.classList.remove("border", "border-2", "border-pink-dark")
  }
  determineWordOverLimitation(
    e.target.value.length,
    NAME_WORD_LIMITATION,
    limitationName
  )
})

emoDefinition.addEventListener("blur", (e) => {
  if (e.target.value.length === 0) {
    emoDefinition.classList.add("border", "border-2", "border-pink-dark")
  }
})

emoDefinition.addEventListener("input", (e) => {
  if (emoDefinition.classList.contains("border-pink-dark")) {
    emoDefinition.classList.remove("border", "border-2", "border-pink-dark")
  }
  determineWordOverLimitation(
    e.target.value.length,
    WORD_LIMITATION,
    limitationDefinition
  )
})

emoExample.addEventListener("blur", (e) => {
  if (e.target.value.length === 0) {
    emoExample.classList.add("border", "border-2", "border-pink-dark")
  }
})

emoExample.addEventListener("input", (e) => {
  if (emoExample.classList.contains("border-pink-dark")) {
    emoExample.classList.remove("border", "border-2", "border-pink-dark")
  }
  determineWordOverLimitation(
    e.target.value.length,
    WORD_LIMITATION,
    limitationExample
  )
})

forEmoImage.addEventListener("click", () => {
  emoImageInput.click()
})

emoImageInput.addEventListener("input", (e) => {
  const file = e.target.files[0]
  if (file) {
    if (file.type.includes("image")) {
      emoImage.src = URL.createObjectURL(file)
    }
  }
})
