import { Fade } from "react-awesome-reveal";
import UnitTitleComponent from "../../../../common/atomic-components/unit-title/unit-title.component";
import ThinkingFaceBroSvg from "./svg/Thinking-face-bro.svg";
import AdvantagesRafikiSvg from "./svg/Advantages-rafiki.svg";
import DictionaryRafiki from "./svg/Dictionary-rafiki.svg";
import styles from "./info.module.css";

const InfoComponent: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <Fade>
        <div className={styles.feature}>
          <UnitTitleComponent text="Для кого это приложение?" />
          <div className={styles.content}>
            <img className={styles.svg} src={ThinkingFaceBroSvg} alt="" />
            <div className={styles.description}>
              <p>
                Этот симулятор создан специально для тех, кто хочет улучшить
                свои знания в области английской грамматики удобным способом.
                Принцип работы приложения основан на бесконечном повторении и
                закреплении грамматических форм, данные упражнения помогут вам
                легче и быстрее запоминать новые грамматические обороты. В то же
                время не забыть старые.
              </p>
              <p>
                Едете ли вы в общественном транспорте или лежите дома на диване,
                просто уделить 10 минут вашего времени изучению английских
                времен и результет не заставит вас долго ждать!
              </p>
              <p>
                Посвящая изучению грамматики всего несколько минут в день, в
                короткое время вы увидите, как улучшаются ваши навыки. Кроме
                того, вы улучшите понимание английской речи на слух, так как все
                варианты слов в упражнениях имеют английский произношение.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.feature}>
          <UnitTitleComponent text="Преимущество нашего подхода к изучению языка" />
          <div className={styles.content}>
            <div className={styles.description}>
              <p>
                Мы понимаем, что грамматика – достаточно сложная часть языка,
                особенно если человек впервые сталкивается с временами
                английского, так непохожими на времена русского языка. Поэтому
                мы разработали онлайн-тренажер, учитывающий разные уровни
                владения материалом.
              </p>
              <p>Основные особенности:</p>
              <ul>
                <li>Условия заданий даются на английском языке</li>
                <li>Все упражнения снабжены подсказками</li>
                <li>
                  Правильный ответ или перевод показывается сразу после
                  выполнения задания
                </li>
                <li>
                  Разноплановые темы помогают определять времена в английском
                  языке в зависимости от глаголов и дополнительных частей речи
                </li>
                <li>
                  Задания направлены не только на тренировку грамматики, но и
                  запоминание лексики, изучение способов словообразования и
                  фонетики.
                </li>
                <li>
                  Аудио-сопровождение поможет правильно произносить отдельные
                  слова и отрабатывать интонацию
                </li>
              </ul>
            </div>
            <img className={styles.svg} src={AdvantagesRafikiSvg} alt="" />
          </div>
        </div>
        <div className={styles.feature}>
          <UnitTitleComponent text="Грамматика – это просто!" />
          <img src={DictionaryRafiki} alt="" />
          <p>
            Специально разработанные онлайн-упражнения направлены на изучение и
            запоминание способов образования настоящего, прошедшего и будущего
            времен в английском языке. Английская грамматика больше не будет
            вызывать ни тени волнения, недоразумения или смущения.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default InfoComponent;
