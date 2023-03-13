import React from "react";
import { ReactComponent as Python } from "../../assets/icons/python.svg";
import { ReactComponent as JavaScript } from "../../assets/icons/javascript.svg";
import { ReactComponent as ReactJs } from "../../assets/icons/react.svg";
import { ReactComponent as Pandas } from "../../assets/icons/pandas.svg";
import { ReactComponent as Selenium } from "../../assets/icons/selenium.svg";
import { ReactComponent as Jupyter } from "../../assets/icons/jupyter.svg";
import { ReactComponent as Mui } from "../../assets/icons/mui.svg";
import { ReactComponent as Django } from "../../assets/icons/django.svg";
import { ReactComponent as CSharp } from "../../assets/icons/csharp.svg";
import { ReactComponent as DotNet } from "../../assets/icons/dotnet.svg";
import { ReactComponent as MySql } from "../../assets/icons/mysql.svg";
import { ReactComponent as LinkedIn } from "../../assets/icons/linkedin.svg";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as Email } from "../../assets/icons/mail.svg";
import { ReactComponent as Tailwind } from "../../assets/icons/tailwind.svg";
import { ReactComponent as Docker } from "../../assets/icons/docker.svg";

const TechIcon = (props) => {
  const Icons = {
    JavaScript: JavaScript,
    Python: Python,
    ReactJs: ReactJs,
    MUI: Mui,
    Jupyter: Jupyter,
    Selenium: Selenium,
    Pandas: Pandas,
    Django: Django,
    CSharp: CSharp,
    DotNet: DotNet,
    MySql: MySql,
    LinkedIn: LinkedIn,
    GitHub: GitHub,
    Email: Email,
    Tailwind: Tailwind,
    Docker,
    Docker,
  };
  const Icon = Icons[props.tech];
  return <Icon className="h-14" />;
};

export default TechIcon;
