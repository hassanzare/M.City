import { CityLogo } from "../Utils/tools";

const footer = () => {
  return (
    <footer className="bck_blue">
      <div className="footer-logo">
        <CityLogo link={true} linkTo={"/"} width="70px" height="70px" />
      </div>
      <div className="footer_descl">
        manchester city 2023.All rights reseeved
      </div>
    </footer>
  );
};

export default footer;
