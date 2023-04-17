import React from "react";
import style from '../styles/modules/title.module.scss';

function PageTitle({Children, ...rest}) {
  return (

     <p className={style.title}{...rest}>{Children}</p>
    
  );
}

export default PageTitle;
