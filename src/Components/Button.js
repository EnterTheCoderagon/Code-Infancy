import React, {Children}from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../Utils/getClasses';


const buttonTypes = {
    primary: "primary",
    secondary: "secondary",
};




function Button({Children, type, variant, ...rest}) {
  return (
    <button className={getClasses([styles.Button, styles[`button--${buttonTypes[variant]}`],])} type={type==='submit' ? 'submit' : 'button'} {...rest}>
      {Children}
    </button>
  )
}
function SelectButton ({Children,id, ...rest}) {
  return (
    <select className= {getClasses([styles.button, styles.button__select])}>
      {Children} {...rest}
    </select>
  );
}
export {SelectButton}; 
export default Button;
