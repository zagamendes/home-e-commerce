import React from "react";

import "./brand.css";
import forever21 from "../../img/forever21.png";
interface BrandProps {
  img?: string;
}
const Brand: React.FC<BrandProps> = ({ img = "./img/forever21.png" }) => {
  return (
    <div className="ctn-brand p-0">
      <img src={img} className="img-fluid" />
    </div>
  );
};

export default Brand;
