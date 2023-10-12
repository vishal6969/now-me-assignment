import React from "react";
import Comment from "./Comment";
import Cross from "./Cross";
import DotsHorizontal from "./DotsHorizontal";
import Eye from "./Eye";
import IconI from "./interface";
import Logo from "./Logo";

const icons = {
  comment: (props: IconI) => <Comment {...props} />,
  cross: (props: IconI) => <Cross {...props} />,
  dotsHorizontal: (props: IconI) => <DotsHorizontal {...props} />,
  eye: (props: IconI) => <Eye {...props} />,
  logo: (props: IconI) => <Logo {...props} />,
};

const Icon = ({ name, ...rest }: { name: string } & IconI) => {
  const CurrentIcon = icons[name];
  if (!CurrentIcon) {
    return null;
  }
  return <CurrentIcon {...rest} />;
};

export default Icon;
