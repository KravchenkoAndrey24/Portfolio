import React from 'react';
import style from './Nav.module.css';


function Nav() {
	return (
		<div className={style.menu__block}>
			<a className={style.menu__item}>Главная</a>
			<a className={style.menu__item}>Скиллы</a>
			<a className={style.menu__item}>Работы</a>
			<a className={style.menu__item}>Контакты</a>
		</div>
	)
}


export default Nav;