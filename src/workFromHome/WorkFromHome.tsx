import React from 'react';
import style from './WorkFromHome.module.css';
import styleContainer from '../common/styles/StyleContainer.module.css';

function WorkFromHome() {
	return (
		<div className={style.mainBlockBg}>
			<div className={styleContainer.main__container}>
				<div className={style.block__flex__container}>
					<div className={style.block__flex}>
						<h2 className={style.block__flex__item}>Рассматриваю варианты удаленной работы</h2>
						<div className={style.block__flex__item}><button>Нанять меня</button></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WorkFromHome;