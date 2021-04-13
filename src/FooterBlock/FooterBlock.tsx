import React from 'react';
import style from './FooterBlock.module.css';
import styleContainer from '../common/styles/StyleContainer.module.css';


function FooterBlock() {
	return (
		<div className={style.mainBlockBg}>
			<div className={styleContainer.main__container}>
				<div className={style.block__flex}>
					<h3 className={style.block__flex__item}>Кравченко Андрей</h3>
					<div className={`${style.block__flex__item} ${style.block__flex__item__block}`}>
						<div className={style.block__flex__item__block__item}></div>
						<div className={style.block__flex__item__block__item}></div>
						<div className={style.block__flex__item__block__item}></div>
						<div className={style.block__flex__item__block__item}></div>
					</div>
					<div className={style.block__flex__item}>© 2021 Все права защищены </div>
				</div>
			</div>
		</div >
	)
}


export default FooterBlock;