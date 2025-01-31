import UnitTitleComponent from '../../common/atomic-components/unit-title/unit-title.component';
import styles from './faq.module.css';
import FaqSvg from './svg/FAQs-rafiki.svg';

const FaqPage : React.FC = () : JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.faqContainer}>
        <UnitTitleComponent text='Часто задаваемые вопросы'/>
        <img src={FaqSvg} alt="There is no"/>
      </div>
      <div className={styles.questionContainer}>
        <h1>Что такое Yeap English?</h1>
        <p>Учебный портал "Yeap! English" - ваш верный помощник в освоении английского языка! Забудьте о скучных учебниках и бесконечных переводах - теперь изучение языка стало простым и увлекательным!</p>
        <p>"Yeap! English" предлагает вам уникальный онлайн-опыт обучения английскому языку, который сделает ваше обучение эффективным и увлекательным. Вам больше не нужно тратить время на поиск учителя или посещение физических курсов - все, что вам нужно, находится в нашем удобном и понятном портале.</p>
      </div>
      <div className={styles.questionContainer}>
        <h1>Зачем мне ваше приложение?</h1>
        <p>Приложение "Yeap! English" - ваш идеальный спутник в изучении английской грамматики. Отныне, вы можете освоить сложности языка без особых усилий!</p>

        <p>"Yeap! English" предлагает вам увлекательный и интерактивный подход к изучению грамматики. С его помощью вы сможете не только понять сложные концепции английской грамматики, но также натренировать свои навыки и улучшить понимание правильного использования грамматических структур.</p>
        <ol>
          <li>Удобно работать с различными типами смартфонов/ планшетов</li>
          <li>Регулярные обновления и обратная связь</li>
          <li>Размеры приложение адаптируется под ваше персональное устойство</li>
          <li>Абсолютно бесплатное</li>
          <li>Все ваши данные хранятся в облаке и вы их никогда не потеряете</li>
          <li>Удобный интерактивный и настраиваемый тренажер</li>
        </ol>
      </div>
      <div className={styles.questionContainer}>
        <h1>Совместимость браузеров и устройств</h1>
        <p>Вы можете пользоваться Memorush на различных устройствах. Мы предлагаем официальные приложения для iOS и Android, а наш веб-сайт можно использовать с различными браузерами на компьютерах Windows and Mac.</p>
      </div>
    </div>
  )
}

export default FaqPage;