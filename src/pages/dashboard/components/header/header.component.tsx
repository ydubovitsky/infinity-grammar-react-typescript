import styles from "./header.module.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  userRolesSelector,
  logout,
} from "../../../../redux/features/auth/auth.slice";

const HeaderComponent = () => {
  const userRoles = useSelector(userRolesSelector);
  const dispatch = useDispatch();

  const showAdminLinkEl = (): any => {
    return userRoles.includes("ADMIN") ? (
      <Link to={"admin"} className={styles.navEl}>
        Панель администратора
      </Link>
    ) : null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Infinity Grammar</div>
      <div className={styles.nav}>
        <Link to={"/"} className={styles.navEl}>
          Главная страница
        </Link>
        <Link to={"info"} className={styles.navEl}>
          Описание
        </Link>
        <Link to={"trainer?themeId=1"} className={styles.navEl}>
          Тренажер
        </Link>
        {showAdminLinkEl()}
        <div onClick={() => dispatch(logout())} className={styles.navEl}>
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
