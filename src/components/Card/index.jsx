import React from "react";
import { BsHeart, BsDownload } from "react-icons/bs";
import c from "./style.module.css";
import { saveAs } from "file-saver";

const Card = ({ id, src: { original, portrait }, alt, photographer }) => {
  const handleDownload = () => {
    fetch(original)
      .then((res) => res.blob())
      .then((blob) => saveAs(blob, "dowloaded-img.jpg"))
      .catch((err) => console.log(err));
  };

  return (
    <div className={c.card}>
      <div className={c.img__actions}>
        <BsHeart />
      </div>
      <img className={c.card__img} src={portrait} alt={alt} />
      <div className={c.img__details}>
        <div className={c.avatar__wrapper}>
          <div className={c.author__avatar}></div>
          <div className={c.author__name}></div>
        </div>
        <button className={c.download__btn} onClick={handleDownload}>
          <BsDownload />
        </button>
      </div>
    </div>
  );
};

export default Card;
