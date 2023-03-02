import React from "react";
import { ReactComponent as Python } from "../../assets/icons/python.svg";
import { ReactComponent as JavaScript } from "../../assets/icons/javascript.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/react.svg";
import { ReactComponent as Pandas } from "../../assets/icons/pandas.svg";
import { ReactComponent as Selenium } from "../../assets/icons/selenium.svg";
import { ReactComponent as Jupyter } from "../../assets/icons/jupyter.svg";
import { ReactComponent as Mui } from "../../assets/icons/mui.svg";
import { ReactComponent as Django } from "../../assets/icons/django.svg";

const TechIcon = (props) => {
  const Icons = {
    JavaScript: JavaScript,
    Python: Python,
    React: ReactIcon,
    MUI: Mui,
    Jupyter: Jupyter,
    Selenium: Selenium,
    Pandas: Pandas,
    Django: Django,
  };
  const Icon = Icons[props.tech];
  return <Icon height="3rem" />;
};

export default TechIcon;
