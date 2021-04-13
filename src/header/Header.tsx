import React from 'react';
import Nav from '../nav/Nav';
import style from './Header.module.css';


function Header() {
	return (
		<div className={style.block__absolute}>
			<div className={style.main__container}>
				<div className={style.header}>
					<div className={style.logo}>Logo</div>
					<Nav />
				</div>
			</div>
		</div>
	)
}


export default Header;


