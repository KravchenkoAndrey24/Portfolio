import React from 'react';
import style from './Main.module.css';
import styleContainer from './../common/styles/StyleContainer.module.css'

function Main() {
	return (
		<div className={style.mainBlockBg}>
			<div className={styleContainer.main__container}>
				<div className={style.block__flex}>
					<div className={style.text}>
						<p>Привет!</p>
						<h1>Меня зовут Кравченко Андрей</h1>
						<h2>Я front-end разработчик</h2>
					</div>
					<div >
						<img className={style.block__img} src="https://www.blexar.com/avatar.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}


export default Main;

