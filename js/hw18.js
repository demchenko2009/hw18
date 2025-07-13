// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).

// Наприклад, для першої категорії вийде:

// Категорія: Тварини
// Кількість елементів: 4



const category = document.querySelectorAll("#categories .item")

category.forEach(item=>{

    
    const titleEl = item.querySelector("h2")
        console.log(` Категорія: ${titleEl.textContent}`);

        const itemEl = item.querySelectorAll("li")
        console.log(` Кількість елементів:${itemEl.length}`);
        
})

//==========================================================================

// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().



const ingredients = [
 'Картопля',
 'Гриби',
 'Часник',
 'Помідори',
 'Зелень',
 'Приправи',
];


const listIng= document.getElementById("ingredients")


ingredients.forEach(item => {
const itemEl = document.createElement("li")
itemEl.textContent=item
itemEl.style.color="red"
    listIng.appendChild(itemEl)
})

console.log(listIng);





//==========================================================================


// Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().



// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через css-класи.




const images = [
 {
  url:
   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url:
   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url:
   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];

const galerEL = document.getElementById("gallery")
const itemRef = images.map(({url,alt}) =>{
    return `<li>
    <img src="${url}" alt="${alt}" width="400">
</li>`
}).join("")
galerEL.insertAdjacentHTML("beforeend",itemRef)

//========================================================


const dicrimeant = document.querySelector('[data-action="decrement"]')



const valueEl = document.getElementById("value")
const incriment = document.querySelector('[ data-action="increment"]')

 let counter = 0
dicrimeant.addEventListener("click",() => {
    counter -=1
valueEl.textContent = counter
})

incriment.addEventListener("click",() => {
    counter+=1
 valueEl.textContent = counter
})