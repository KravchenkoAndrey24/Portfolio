import React from 'react';
import style from './SkillsItem.module.css';

type SkillsItem = {
	photo: string
	title: string
	text: string
}

function SkillsItem(props: SkillsItem) {
	return (
		<div className={style.flex__content__item}>
			<div className={style.flex__content__item__photo}>{props.photo}</div>
			<div className={style.flex__content__item__title}>{props.title}</div>
			<div className={style.flex__content__item__text}>{props.text}</div>
		</div>
	)
}


export default SkillsItem;

