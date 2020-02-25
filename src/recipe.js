import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, label, image, ingredients, url }) => {
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt="" />
      <div className={style.meta}>
        <p>{label}</p>
        <a href={url} target="_blank">
          See Recipe
        </a>
        {/* <p>{yields}serving size</p> */}
      </div>
      {/* <div className={style.recipeContainer}>
        <h3 className={style.title}>{title}</h3>
        <ul className={style.list}>
          {ingredients.map(ingredient => (
            <li className={style.listItem}>{ingredient}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Recipe;
