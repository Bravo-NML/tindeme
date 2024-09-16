"use client";

import styles from "../styles/collection.module.css";
// import СardCollection from "../ui/collectionCard";
import { useState, useEffect } from 'react';

const URL_USER_COLLECTION = "http://127.0.0.1:5000/get_name/";

export default function СollectionHomepage() {
  const [charactersNames, setCharactersNames] = useState<any>([]);

  useEffect(() => {
    fetch(URL_USER_COLLECTION)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCharactersNames(data.names);
      });
  }, []);

  return (
    <div className={styles.collectionHomepage}>
      {charactersNames.map((name: string) => (
        <div key={name} className={styles.cardCollection}>
          {name}
        </div>
      ))}
    </div>
  );
};
