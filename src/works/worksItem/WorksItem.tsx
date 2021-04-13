import React from 'react';
import style from './WorksItem.module.css';

type WorksItemType = {
	photoSrc: string
	title: string
	text: string
}

function WorksItem(props: WorksItemType) {
	return (
		<div className={style.flex__content__item}>
			<div className={style.flex__content__item__title}>
				<button>Смотреть</button>
			</div>
			<div className={style.flex__content__item__text}>
				<p>{props.title}</p>
				<p>{props.text}</p>
			</div>
		</div>


	)
}

export default WorksItem;