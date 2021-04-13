import React from 'react';
import style from './Works.module.css';
import styleContainer from '../common/styles/StyleContainer.module.css';
import WorksItem from './worksItem/WorksItem';

function Works() {
	return (
		<div className={style.mainBlockBg}>
			<div className={styleContainer.main__container}>
				<div className={style.block__flex}>
					<h2 className={style.heading}>Мои работы</h2>
					<div className={style.flex__content}>
						<WorksItem photoSrc='https://www.blexar.com/avatar.png' title='Название проекта' text='Краткое описание' />
						<WorksItem photoSrc='https://www.blexar.com/avatar.png' title='Название проекта 2 ' text='Краткое описание 2' />

					</div>
				</div>
			</div>
		</div>
	)
}


export default Works;
