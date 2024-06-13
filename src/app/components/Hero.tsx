"use client";

import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


export default function Hero() {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    const element = ref.current;

    gsap.to(element, {
      scale: '1.1',
      opacity: '.5',
      scrollTrigger: {
        trigger: element,
        start: 'top top',
        end: 'bottom center',
        // markers: true,  // マーカーを表示させる
        scrub: true, // スクロールに応じてアニメーションさせる
      },
    });
  }, []);

  return (
    <div className={styles.Hero} data-gsap="hero">
      <video className={styles.video} ref={ref} autoPlay loop muted>
        <source src="/fv.mp4" type="video/mp4"/>
      </video>
    </div>
  );
};