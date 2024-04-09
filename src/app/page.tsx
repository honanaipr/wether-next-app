'use client'

import styles from "./page.module.css";
import WeatherCard from './weatherCard'
import React, { useEffect, useState } from "react";


export default function Home() {
  return (
    <div className={`${styles['flex-container']} ${styles.fill}`}>
      <WeatherCard />
    </div>
  );
}
