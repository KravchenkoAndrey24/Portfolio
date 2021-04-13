import style from './Contacts.module.css';
import styleContainer from '../common/styles/StyleContainer.module.css';

function Contacts() {
	return (
		<div className={style.mainBlockBg}>
			<div className={styleContainer.main__container}>
				<div className={style.block__flex}>
					<div className={style.block__flex__main}>
						<h3 className={style.block__flex__item}>Контакты</h3>
						<form className={`${style.block__flex__item} ${style.block__flex__item__form}`}>
							<input type="text" placeholder='Введите ваше имя' />
							<input type="email" placeholder='Введите ваш email' />
							<textarea name="" id="" placeholder='Введите ваше сообщение'></textarea>
						</form>
						<button className={style.block__flex__item}>Отправить</button>
					</div>
				</div>
			</div>
		</div>
	)
}


export default Contacts;
