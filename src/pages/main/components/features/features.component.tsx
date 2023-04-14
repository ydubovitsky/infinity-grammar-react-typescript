import SectionTitleComponent from "../../../../common/atomic-components/section-title/section-title.component";
import ButtonComponent from "../../../../common/components/button/button.component";
import styles from "./features.module.css";
const Fade = require("react-reveal/Fade");
interface FeaturePropsInterface {
  icon: string;
  title: string;
  text: string;
}

const featuresData: FeaturePropsInterface[] = [
  {
    icon: "fas fa-meteor",
    title: "Неограниченное число упражнений",
    text: "Онлайн-тренажер по грамматике английского языка Infinity Grammar — это бесконечные упражнения, позволяющие оттачить ваши навыки до автоматизма",
  },
  {
    icon: "fas fa-feather-alt",
    title: "Современный дизайн",
    text: "Красивый, минималистичный и функциональный дизайн приложения позволит вам сосредоточиться исключительно на учебе и не будет перегружать вас избытком ненужной информации",
  },
  {
    icon: "far fa-lightbulb",
    title: "Обновления и поддержка",
    text: "Команда разработчиков открыта предложений от пользователей, мы постоянно работаем на улучшением нашего продукта",
  },
];

const FeaturesComponent: React.FC = () => {
  const showFeatureEl = (array: FeaturePropsInterface[]): JSX.Element[] => {
    return array.map((data, idx) => {
      return (
        <div key={idx} className={styles.feature}>
          <div className={styles.featureHeader}>
            <i className={data.icon}></i>
            <h3>{data.title}</h3>
          </div>
          <p>{data.text}</p>
        </div>
      );
    });
  };

  return (
    <div className={styles.container}>
      <Fade bottom cascade>
        <SectionTitleComponent
          name="Потрясающие особенности нашего приложения"
        />
        <div className={styles.featuresContainer}>
          {showFeatureEl(featuresData)}
        </div>
        <ButtonComponent name="Начать прямо сейчас" />
      </Fade>
    </div>
  );
};

export default FeaturesComponent;
