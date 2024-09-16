"use client";

import styles from "../styles/app.module.css";
import Image from 'next/image'
import React, { useState, useEffect } from 'react';

interface animeInfoInterface {
  name: string,
  img: string | null,
  isOngoing: boolean,
  dateFrom: number,
  dateTo: number | null,
  info: string,
}

interface charInfoInterface {
  name: string,
  animeList: animeInfoInterface[],
  info: string,
}

export default function CardApp({charInfo}: {charInfo: charInfoInterface}) {
  const renderedAnimeList: React.ReactNode[] = [];

  const [isCardFlipped, setIsCardFlipped] = useState<boolean>(false);
  const [flipCardLiked, setFlipCardLiked] = useState<boolean|undefined>(undefined);
  const [cardClasses, setCardClasses] = useState<string>(styles.flipCard);
  const [flipCardLikedClasses, setFlipCardLikedClasses] = useState<string>(styles.flipCardLikedHidden);

  useEffect(() => {
    const val = isCardFlipped ? styles.flipCardInnerFlipped : styles.flipCardInner;

    setCardClasses(val);
  }, [isCardFlipped]);

  useEffect(() => {
    switch (flipCardLiked) {
      case true:
        setFlipCardLikedClasses(styles.flipCardLiked);
        break;

      case false:
        setFlipCardLikedClasses(styles.flipCardDisliked);
        break;
    
      default:
        setFlipCardLikedClasses(styles.flipCardLikedHidden);
        break;
    }
  }, [flipCardLiked]);

  function flipCard(val: boolean = true) {
    setIsCardFlipped(val);
  }

  charInfo.animeList.forEach( (el: animeInfoInterface) => {
    const key = Math.random();

    if (el.img) {
      renderedAnimeList.push(
        <div className={styles.animeItem} key={key} title={el.name}>
          <Image className={styles.animeImage} src={el.img} alt={el.name} width="140" height="80"/>

          <p className={styles.animeName}> {el.name} </p>
        </div>
      )
    } else {
      renderedAnimeList.push(
        <div className={styles.animeItem} key={key} title={el.name}>
          <div className={styles.animeImagePLaceholder}></div>

          <div className={styles.animeName}> {el.name} </div>
        </div>
      )
    }
  })

  return (
    <div className={styles.flipCard}>
      <div className={flipCardLikedClasses}>
        
      </div>
      
      <div className={cardClasses}>
        <div className={styles.flipCardFront}>
          <Image className={styles.characterImage} src="/assets/img/character.jpeg" alt="character" width="375" height="500"/>

          {flipCardLiked === undefined && 
            <div className={styles.buttonsAppContainer}>
              <div className={styles.buttonAppNeg} onClick={() => setFlipCardLiked(false)}>No</div>

              <div className={styles.buttonAppMayby} onClick={() => flipCard(true)}>Mayby</div>

              <div className={styles.buttonAppPos} onClick={() => setFlipCardLiked(true)}>Yes</div>
            </div>
          }
        </div>
        <div className={styles.flipCardBack}>
          <div>
            <div className={styles.mainCharInfo}>
              <div className={styles.backToPhoto} onClick={() => flipCard(false)}>
                <Image className={styles.characterImage} src="/assets/img/character.jpeg" alt="character" width="100" height="100"/>

                <div className={styles.backToPhotoArrow}>↻</div>
              </div>

              <h2>
                {charInfo.name}
              </h2>
            </div>

            <p> {charInfo.info} </p>
          </div>

          <div className={styles.animeList}>
            { renderedAnimeList } 
          </div>
        </div>
      </div>
  </div>
  );
}