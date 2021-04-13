import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/StyleContainer.module.css';
import SkillsItem from './skillsItem/SkillsItem';

function Skills() {
	return (
		<div className={style.mainBlockBg}>
			<div className={styleContainer.main__container}>
				<div className={style.block__flex}>
					<h2 className={style.heading}>Мои скиллы</h2>
					<div className={style.flex__content}>
						<SkillsItem photo={''} title='HTML' text='Подробное описание навыка 1' />
						<SkillsItem photo={''} title='CSS' text='Подробное описание навыка 2' />
						<SkillsItem photo={''} title='React' text='Подробное описание навыка 3' />
					</div>
				</div>
			</div>
		</div>
	)
}


export default Skills;


