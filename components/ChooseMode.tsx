import { useCookies } from "react-cookie";
import Image from "next/image";
import CyberpunkThemeIcon from "../public/images/chooseThemeIcons/png/CyberpunkThemeIcon.png";
import MarvelThemeIcon from "../public/images/chooseThemeIcons/png/MarvelThemeIcon.png";
import MinimilisticThemeIcon from "../public/images/chooseThemeIcons/png/MinimalisticThemeIcon.png";
import Year1991ThemeIcon from "../public/images/chooseThemeIcons/png/Year1991ThemeIcon.png";
import Year1991ThemeIconBg from "../public/images/chooseThemeIcons/png/year_1991_theme_icon_bg.jpeg";

function ChooseMode() {
  const [cookie, setCookie, removeCookie] = useCookies(["siteAppearenceMode"]);
  var year_1991_animate_interval: NodeJS.Timer;
  return (
    <div className="choose_mode_main">
      <h2 className="heading">Choose your theme</h2>
      <br />
      <div
        className="theme_icon_holder border-yellow"
        id="cyberpunk_theme_selector"
      >
        <Image
          src={CyberpunkThemeIcon}
          quality={100}
          className="theme_icon_avatar"
          objectFit="contain"
        />
      </div>
      <div
        className="theme_icon_holder border-white"
        id="marvel_theme_selector"
      >
        <Image
          src={MarvelThemeIcon}
          quality={100}
          className="theme_icon_avatar"
          objectFit="contain"
        />
      </div>
      <div
        className="theme_icon_holder_with_bg"
        id="year1991_theme_selector"
        onMouseOver={() => {
          const bgImage = document.getElementById("year1991_theme_selector_bg");
          if (bgImage) {
            var n = 2;
            year_1991_animate_interval = setInterval(() => {
              console.log(n);
              bgImage.className =
                "theme_icon_holder_with_bg_image animate_pos_" + n;
              n++;
              n = n > 4 ? 1 : n;
            }, 750);
          }
        }}
        onMouseOut={() => {
          clearInterval(year_1991_animate_interval);
          const bgImage = document.getElementById("year1991_theme_selector_bg");
          if (bgImage)
            bgImage.className = "theme_icon_holder_with_bg_image animate_pos_1";
        }}
      >
        <div
          className="theme_icon_holder_with_bg_image animate_pos_1"
          id="year1991_theme_selector_bg"
        >
          <Image src={Year1991ThemeIconBg} className="year_1991_bg_image" />
        </div>
        <Image
          src={Year1991ThemeIcon}
          quality={100}
          className="theme_icon_avatar_with_bg"
          objectFit="contain"
        />
      </div>
      <div className="theme_icon_holder" id="minimilistic_theme_selector">
        <Image
          src={MinimilisticThemeIcon}
          quality={100}
          className="theme_icon_avatar"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export default ChooseMode;
