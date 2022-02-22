import React, { FC } from 'react';
import styles from './MainPage.module.scss';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => (
  <div className={styles.MainPage}>
    MainPage Component
  </div>
);

export default MainPage;