
// Покидання елемента меню

const menuItems = document.querySelectorAll('.main_menu_item');

// Додаємо обробник події для кожного елемента
menuItems.forEach(item => {
	// Отримуємо елемент .main_menu_item_border_hover для поточного елемента
	const borderHoverItem = item.querySelector('.main_menu_item_border_hover');
	// Відслідковуємо подію виходження курсора миші
	item.addEventListener('mouseleave', () => {
		// Додаємо клас leaving, який змінює стилі
		borderHoverItem.classList.add('leaving');

		// Через 1 секунду видаляємо клас leaving, щоб елемент повернувся до звичайного стану
		setTimeout(() => {
			borderHoverItem.classList.remove('leaving');
		}, 100); // 1000 мілісекунд = 1 секунда
	});
});
//////////////////////////////////////////////////////////////////////////

//Випадаюча кнопка в шапці

const arrowItem = document.querySelector('.drop_down_buttom_up_arrow');

arrowItem.addEventListener('click', () => {
	arrowItem.classList.add('active')
	const arrowItemActive = document.querySelector('.drop_down_buttom_up_arrow.active');
	arrowItemActive.addEventListener('click', () => {
		arrowItemActive.classList.remove('active')
	})
})
const arrowItemActive = document.querySelector('.drop_down_buttom_up_arrow.active');
if (arrowItemActive) {
	arrowItemActive.addEventListener('click', () => {
		arrowItemActive.classList.remove('active')
	})
}

// робота з бургер меню ////////////////////////////////////////////////////////////////////////////////
let burger = document.querySelector('.burger_menu');
let menuBlock = document.querySelector('.menu_block');

burger.addEventListener('click', () => {
	menuBlock.classList.add('active');
	// Додаємо клас active до всіх дочірніх елементів
	menuBlock.querySelectorAll('.menu_item1').forEach(element => {
		element.classList.add('active');
	});
});

document.querySelector('.close_button').addEventListener('click', () => {
	menuBlock.classList.remove('active');
	// Видаляємо клас active у всіх дочірніх елементів
	menuBlock.querySelectorAll('.menu_item1').forEach(element => {
		element.classList.remove('active');
	});
});


// ////////////////////////////////////////////////////////////////////////////////
