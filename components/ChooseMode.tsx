import { useCookies } from "react-cookie";
import Image from "next/image";
import CyberpunkThemeIcon from "../public/images/chooseThemeIcons/png/CyberpunkThemeIcon.png";
import MarvelThemeIcon from "../public/images/chooseThemeIcons/png/MarvelThemeIcon.png";
import MinimilisticThemeIcon from "../public/images/chooseThemeIcons/png/MinimalisticThemeIcon.png";
import Year1900ThemeIcon from "../public/images/chooseThemeIcons/png/Year1900ThemeIcon.png";
import Year1900ThemeIconBg from "../public/images/chooseThemeIcons/png/year_1900_theme_icon_bg.jpeg";
import MarvelThemeIconWithoutBg from "../public/images/chooseThemeIcons/png/MarvelThemeIconWithoutBg.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function ChooseMode() {
  const [cookie, setCookie, removeCookie] = useCookies(["siteAppearenceMode"]);
  var year_1900_animate_interval: NodeJS.Timer;
  var [selectedTheme, setSelectedTheme] = useState("minimal");
  var [isMarvelThemeHovered, setIsMarvelThemeHovered] = useState(false);
  var [isCyberpunkThemeHovered, setIsCyberpunkThemeHovered] = useState(false);

  if (typeof window === "object") {
    var theme_1900 = document.getElementById(
      "year1900_theme_selector"
    ) as HTMLDivElement;
    var theme_minimal = document.getElementById(
      "minimilistic_theme_selector"
    ) as HTMLDivElement;
    var theme_marvel = document.getElementById(
      "marvel_theme_selector"
    ) as HTMLDivElement;
    var theme_cyberpunk = document.getElementById(
      "cyberpunk_theme_selector"
    ) as HTMLDivElement;
    if (theme_1900) {
      var theme_1900_pos = theme_1900.getBoundingClientRect();
      var theme_1900_pos_x = theme_1900_pos.x;
      var theme_1900_pos_y = theme_1900_pos.y;
      var theme_1900_subtext = document.getElementById(
        "mode_sub_text_1900"
      ) as HTMLHeadingElement;
      if (theme_1900_subtext) {
        var theme_1900_subtext_width = theme_1900_subtext.clientWidth;
        if (theme_1900_subtext_width < theme_1900.offsetWidth) {
          var spaceToBeLeft_1900 =
            (theme_1900.offsetWidth - theme_1900_subtext_width) / 2;
          theme_1900_subtext.style.position = "fixed";
          theme_1900_subtext.style.left =
            theme_1900_pos_x + spaceToBeLeft_1900 + "px";
          theme_1900_subtext.style.top =
            theme_1900_pos_y + theme_1900.offsetHeight + 20 + "px";
          theme_1900_subtext.style.fontFamily = "Year1900";
        } else {
          theme_1900_subtext.style.position = "fixed";
          theme_1900_subtext.style.left = theme_1900_pos_x + "px";
          theme_1900_subtext.style.top =
            theme_1900_pos_y + theme_1900.offsetHeight + 20 + "px";
          theme_1900_subtext.style.fontFamily = "Year1900";
        }
      }
    }
    if (theme_minimal) {
      var theme_minimal_pos = theme_minimal.getBoundingClientRect();
      var theme_minimal_pos_x = theme_minimal_pos.x;
      var theme_minimal_pos_y = theme_minimal_pos.y;
      var theme_minimal_subtext = document.getElementById(
        "mode_sub_text_minimal"
      ) as HTMLHeadingElement;
      if (theme_minimal_subtext) {
        var theme_minimal_subtext_width = theme_minimal_subtext.clientWidth;
        if (theme_minimal_subtext_width < theme_minimal.offsetWidth) {
          var spaceToBeLeft_minimal =
            (theme_minimal.offsetWidth - theme_minimal_subtext_width) / 2;
          theme_minimal_subtext.style.position = "fixed";
          theme_minimal_subtext.style.left =
            theme_minimal_pos_x + spaceToBeLeft_minimal + "px";
          theme_minimal_subtext.style.top =
            theme_minimal_pos_y + theme_minimal.offsetHeight + 20 + "px";
          theme_minimal_subtext.style.fontFamily = "Minimal Regular";
        } else {
          theme_minimal_subtext.style.position = "fixed";
          theme_minimal_subtext.style.left = theme_minimal_pos_x + "px";
          theme_minimal_subtext.style.top =
            theme_minimal_pos_y + theme_minimal.offsetHeight + 20 + "px";
          theme_minimal_subtext.style.fontFamily = "Minimal Regular";
        }
      }
    }
    if (theme_marvel) {
      var theme_marvel_pos = theme_marvel.getBoundingClientRect();
      var theme_marvel_pos_x = theme_marvel_pos.x;
      var theme_marvel_pos_y = theme_marvel_pos.y;
      var theme_marvel_subtext = document.getElementById(
        "mode_sub_text_marvel"
      ) as HTMLHeadingElement;
      if (theme_marvel_subtext) {
        var theme_marvel_subtext_width = theme_marvel_subtext.clientWidth;
        if (theme_marvel_subtext_width < theme_marvel.offsetWidth) {
          var spaceToBeLeft_marvel =
            (theme_marvel.offsetWidth - theme_marvel_subtext_width) / 2;
          theme_marvel_subtext.style.position = "fixed";
          theme_marvel_subtext.style.left =
            theme_marvel_pos_x + spaceToBeLeft_marvel + "px";
          theme_marvel_subtext.style.top =
            theme_marvel_pos_y + theme_marvel.offsetHeight + 20 + "px";
          theme_marvel_subtext.style.fontFamily = "Marvel Regular";
        } else {
          theme_marvel_subtext.style.position = "fixed";
          theme_marvel_subtext.style.top =
            theme_marvel_pos_y + theme_cyberpunk.offsetHeight + 20 + "px";
          theme_marvel_subtext.style.left = theme_marvel_pos_x + "px";
          theme_marvel_subtext.style.fontFamily = "Marvel Regular";
        }
      }
    }
    if (theme_cyberpunk) {
      var theme_cyberpunk_pos = theme_cyberpunk.getBoundingClientRect();
      var theme_cyberpunk_pos_x = theme_cyberpunk_pos.x;
      var theme_cyberpunk_pos_y = theme_cyberpunk_pos.y;
      var theme_cyberpunk_subtext = document.getElementById(
        "mode_sub_text_cyberpunk"
      ) as HTMLHeadingElement;
      if (theme_cyberpunk_subtext) {
        var theme_cyberpunk_subtext_width = theme_cyberpunk_subtext.clientWidth;
        if (theme_cyberpunk_subtext_width < theme_cyberpunk.offsetWidth) {
          var spaceToBeLeft_cyberpunk =
            (theme_cyberpunk.offsetWidth - theme_cyberpunk_subtext_width) / 2;
          theme_cyberpunk_subtext.style.position = "fixed";
          theme_cyberpunk_subtext.style.left =
            theme_cyberpunk_pos_x + spaceToBeLeft_cyberpunk + "px";
          theme_cyberpunk_subtext.style.top =
            theme_cyberpunk_pos_y + theme_cyberpunk.offsetHeight + 20 + "px";
          theme_cyberpunk_subtext.style.fontFamily = "Cyberpunk Regular";
        } else {
          theme_cyberpunk_subtext.style.position = "fixed";
          theme_cyberpunk_subtext.style.top =
            theme_cyberpunk_pos_y + theme_cyberpunk.offsetHeight + 20 + "px";
          theme_cyberpunk_subtext.style.left = theme_cyberpunk_pos_x + "px";
          theme_cyberpunk_subtext.style.fontFamily = "Cyberpunk Regular";
        }
      }
    }
    window.addEventListener("resize", () => {
      var theme_1900 = document.getElementById(
        "year1900_theme_selector"
      ) as HTMLDivElement;
      var theme_minimal = document.getElementById(
        "minimilistic_theme_selector"
      ) as HTMLDivElement;
      var theme_marvel = document.getElementById(
        "marvel_theme_selector"
      ) as HTMLDivElement;
      var theme_cyberpunk = document.getElementById(
        "cyberpunk_theme_selector"
      ) as HTMLDivElement;
      if (theme_1900) {
        var theme_1900_pos = theme_1900.getBoundingClientRect();
        var theme_1900_pos_x = theme_1900_pos.x;
        var theme_1900_pos_y = theme_1900_pos.y;
        var theme_1900_subtext = document.getElementById(
          "mode_sub_text_1900"
        ) as HTMLHeadingElement;
        if (theme_1900_subtext) {
          var theme_1900_subtext_width = theme_1900_subtext.clientWidth;
          if (theme_1900_subtext_width < theme_1900.offsetWidth) {
            var spaceToBeLeft_1900 =
              (theme_1900.offsetWidth - theme_1900_subtext_width) / 2;
            theme_1900_subtext.style.position = "fixed";
            theme_1900_subtext.style.left =
              theme_1900_pos_x + spaceToBeLeft_1900 + "px";
            theme_1900_subtext.style.top =
              theme_1900_pos_y + theme_1900.offsetHeight + 20 + "px";
            theme_1900_subtext.style.fontFamily = "Year1900";
          } else {
            theme_1900_subtext.style.position = "fixed";
            theme_1900_subtext.style.left = theme_1900_pos_x + "px";
            theme_1900_subtext.style.top =
              theme_1900_pos_y + theme_1900.offsetHeight + 20 + "px";
            theme_1900_subtext.style.fontFamily = "Year1900";
          }
        }
      }
      if (theme_minimal) {
        var theme_minimal_pos = theme_minimal.getBoundingClientRect();
        var theme_minimal_pos_x = theme_minimal_pos.x;
        var theme_minimal_pos_y = theme_minimal_pos.y;
        var theme_minimal_subtext = document.getElementById(
          "mode_sub_text_minimal"
        ) as HTMLHeadingElement;
        if (theme_minimal_subtext) {
          var theme_minimal_subtext_width = theme_minimal_subtext.clientWidth;
          if (theme_minimal_subtext_width < theme_minimal.offsetWidth) {
            var spaceToBeLeft_minimal =
              (theme_minimal.offsetWidth - theme_minimal_subtext_width) / 2;
            theme_minimal_subtext.style.position = "fixed";
            theme_minimal_subtext.style.left =
              theme_minimal_pos_x + spaceToBeLeft_minimal + "px";
            theme_minimal_subtext.style.top =
              theme_minimal_pos_y + theme_minimal.offsetHeight + 20 + "px";
            theme_minimal_subtext.style.fontFamily = "Minimal Regular";
          } else {
            theme_minimal_subtext.style.position = "fixed";
            theme_minimal_subtext.style.left = theme_minimal_pos_x + "px";
            theme_minimal_subtext.style.top =
              theme_minimal_pos_y + theme_minimal.offsetHeight + 20 + "px";
            theme_minimal_subtext.style.fontFamily = "Minimal Regular";
          }
        }
      }
      if (theme_marvel) {
        var theme_marvel_pos = theme_marvel.getBoundingClientRect();
        var theme_marvel_pos_x = theme_marvel_pos.x;
        var theme_marvel_pos_y = theme_marvel_pos.y;
        var theme_marvel_subtext = document.getElementById(
          "mode_sub_text_marvel"
        ) as HTMLHeadingElement;
        if (theme_marvel_subtext) {
          var theme_marvel_subtext_width = theme_marvel_subtext.clientWidth;
          if (theme_marvel_subtext_width < theme_marvel.offsetWidth) {
            var spaceToBeLeft_marvel =
              (theme_marvel.offsetWidth - theme_marvel_subtext_width) / 2;
            theme_marvel_subtext.style.position = "fixed";
            theme_marvel_subtext.style.left =
              theme_marvel_pos_x + spaceToBeLeft_marvel + "px";
            theme_marvel_subtext.style.top =
              theme_marvel_pos_y + theme_marvel.offsetHeight + 20 + "px";
            theme_marvel_subtext.style.fontFamily = "Marvel Regular";
          } else {
            theme_marvel_subtext.style.position = "fixed";
            theme_marvel_subtext.style.top =
              theme_marvel_pos_y + theme_cyberpunk.offsetHeight + 20 + "px";
            theme_marvel_subtext.style.left = theme_marvel_pos_x + "px";
            theme_marvel_subtext.style.fontFamily = "Marvel Regular";
          }
        }
      }
      if (theme_cyberpunk) {
        var theme_cyberpunk_pos = theme_cyberpunk.getBoundingClientRect();
        var theme_cyberpunk_pos_x = theme_cyberpunk_pos.x;
        var theme_cyberpunk_pos_y = theme_cyberpunk_pos.y;
        var theme_cyberpunk_subtext = document.getElementById(
          "mode_sub_text_cyberpunk"
        ) as HTMLHeadingElement;
        if (theme_cyberpunk_subtext) {
          var theme_cyberpunk_subtext_width =
            theme_cyberpunk_subtext.clientWidth;
          if (theme_cyberpunk_subtext_width < theme_cyberpunk.offsetWidth) {
            var spaceToBeLeft_cyberpunk =
              (theme_cyberpunk.offsetWidth - theme_cyberpunk_subtext_width) / 2;
            theme_cyberpunk_subtext.style.position = "fixed";
            theme_cyberpunk_subtext.style.left =
              theme_cyberpunk_pos_x + spaceToBeLeft_cyberpunk + "px";
            theme_cyberpunk_subtext.style.top =
              theme_cyberpunk_pos_y + theme_cyberpunk.offsetHeight + 20 + "px";
            theme_cyberpunk_subtext.style.fontFamily = "Cyberpunk Regular";
          } else {
            theme_cyberpunk_subtext.style.position = "fixed";
            theme_cyberpunk_subtext.style.top =
              theme_cyberpunk_pos_y + theme_cyberpunk.offsetHeight + 20 + "px";
            theme_cyberpunk_subtext.style.left = theme_cyberpunk_pos_x + "px";
            theme_cyberpunk_subtext.style.fontFamily = "Cyberpunk Regular";
          }
        }
      }
    });
  }

  return (
    <div className="choose_mode_main">
      <h1 className="heading" id="choose_theme_heading">
        CHOOSE YOUR THEME
      </h1>
      <div className="theme_icons" id="theme_icons">
        <div
          className="theme_icon_holder_with_bg"
          id="year1900_theme_selector"
          onMouseEnter={() => {
            setIsCyberpunkThemeHovered(false);
            const bgImage = document.getElementById(
              "year1900_theme_selector_bg"
            );
            const choose_theme_heading = document.getElementById(
              "choose_theme_heading"
            );
            if (choose_theme_heading)
              choose_theme_heading.style.fontFamily = "Year1900";

            if (bgImage) {
              var n = 2;
              year_1900_animate_interval = setInterval(() => {
                bgImage.className =
                  "theme_icon_holder_with_bg_image animate_pos_" + n;
                n++;
                n = n > 4 ? 1 : n;
              }, 750);
            }
          }}
          onMouseOut={() => {
            setIsCyberpunkThemeHovered(false);
            const choose_theme_heading = document.getElementById(
              "choose_theme_heading"
            );
            if (selectedTheme !== "year1900") {
              if (selectedTheme === "cyberpunk") {
                if (choose_theme_heading)
                  choose_theme_heading.style.fontFamily = "Cyberpunk Regular";
              } else if (selectedTheme === "marvel") {
                if (choose_theme_heading)
                  choose_theme_heading.style.fontFamily = "Marvel Regular";
              } else {
                if (choose_theme_heading)
                  choose_theme_heading.style.fontFamily = "Minimal Regular";
              }
            }
            clearInterval(year_1900_animate_interval);
            const bgImage = document.getElementById(
              "year1991_theme_selector_bg"
            );

            if (bgImage)
              bgImage.className =
                "theme_icon_holder_with_bg_image animate_pos_1";
          }}
          onClick={() => {
            setIsCyberpunkThemeHovered(false);
            clearInterval(year_1900_animate_interval);
            setSelectedTheme("year1900");
          }}
        >
          <div
            className="theme_icon_holder_with_bg_image animate_pos_1"
            id="year1900_theme_selector_bg"
          >
            <Image
              src={Year1900ThemeIconBg}
              className="year_1991_bg_image"
              priority={true}
            />
          </div>
          <Image
            src={Year1900ThemeIcon}
            quality={100}
            className="theme_icon_avatar_with_bg"
            objectFit="contain"
            priority={true}
          />
        </div>

        <div
          className="theme_icon_holder"
          id="minimilistic_theme_selector"
          onClick={() => {
            setIsCyberpunkThemeHovered(false);
            if (year_1900_animate_interval)
              clearInterval(year_1900_animate_interval);

            setSelectedTheme("minimal");
            const choose_theme_heading = document.getElementById(
              "choose_theme_heading"
            );
            if (choose_theme_heading)
              choose_theme_heading.style.fontFamily = "Minimal Regular";
          }}
          onMouseOver={() => {
            setIsCyberpunkThemeHovered(false);
            if (year_1900_animate_interval)
              clearInterval(year_1900_animate_interval);

            const choose_theme_heading = document.getElementById(
              "choose_theme_heading"
            );
            if (choose_theme_heading)
              choose_theme_heading.style.fontFamily = "Minimal Regular";
          }}
          onMouseOut={() => {
            setIsCyberpunkThemeHovered(false);
            const choose_theme_heading = document.getElementById(
              "choose_theme_heading"
            );
            if (selectedTheme !== "minimal") {
              if (selectedTheme === "cyberpunk") {
                if (choose_theme_heading)
                  choose_theme_heading.style.fontFamily = "Cyberpunk Regular";
              } else if (selectedTheme === "marvel") {
                if (choose_theme_heading)
                  choose_theme_heading.style.fontFamily = "Marvel Regular";
              } else if (selectedTheme === "year1900") {
                if (choose_theme_heading)
                  choose_theme_heading.style.fontFamily = "Year1900";
              }
            }
          }}
        >
          <Image
            src={MinimilisticThemeIcon}
            quality={100}
            className="theme_icon_avatar"
            objectFit="contain"
            priority={true}
          />
        </div>
        <div
          className="theme_icon_holder border-white"
          id="marvel_theme_selector"
          onMouseOver={() => {
            setIsMarvelThemeHovered(true);
            setIsCyberpunkThemeHovered(false);
            if (year_1900_animate_interval)
              clearInterval(year_1900_animate_interval);
            const choose_theme_heading = document.getElementById(
              "choose_theme_heading"
            );
            if (choose_theme_heading)
              choose_theme_heading.style.fontFamily = "Marvel Regular";
          }}
          onMouseOut={() => {
            setIsMarvelThemeHovered(false);
            setIsCyberpunkThemeHovered(false);
            const choose_theme_heading = document.getElementById(
              "choose_theme_heading"
            );
            if (selectedTheme !== "marvel") {
              if (selectedTheme === "cyberpunk") {
                if (choose_theme_heading)
                  choose_theme_heading.style.fontFamily = "Cyberpunk Regular";
              } else if (selectedTheme === "year1900") {
                if (choose_theme_heading)
                  choose_theme_heading.style.fontFamily = "Year1900";
              } else {
                if (choose_theme_heading)
                  choose_theme_heading.style.fontFamily = "Minimal Regular";
              }
            }
          }}
          onClick={() => {
            setIsMarvelThemeHovered(false);
            setSelectedTheme("marvel");
            setIsCyberpunkThemeHovered(false);
            if (year_1900_animate_interval)
              clearInterval(year_1900_animate_interval);
            const choose_theme_heading = document.getElementById(
              "choose_theme_heading"
            );
            if (choose_theme_heading)
              choose_theme_heading.style.fontFamily = "Marvel Regular";
          }}
        >
          <Image
            src={
              isMarvelThemeHovered ? MarvelThemeIconWithoutBg : MarvelThemeIcon
            }
            quality={100}
            className="theme_icon_avatar"
            objectFit="contain"
            priority={true}
          />
        </div>

        <div
          className="theme_icon_holder border-yellow"
          id="cyberpunk_theme_selector"
          onMouseOver={() => {
            setIsCyberpunkThemeHovered(true);
            if (year_1900_animate_interval)
              clearInterval(year_1900_animate_interval);
            const choose_theme_heading = document.getElementById(
              "choose_theme_heading"
            );
            if (choose_theme_heading)
              choose_theme_heading.style.fontFamily = "Cyberpunk Regular";
          }}
          onMouseOut={() => {
            setIsCyberpunkThemeHovered(false);
            const choose_theme_heading = document.getElementById(
              "choose_theme_heading"
            );
            if (selectedTheme !== "cyberpunk") {
              if (selectedTheme === "marvel") {
                if (choose_theme_heading)
                  choose_theme_heading.style.fontFamily = "Marvel Regular";
              } else if (selectedTheme === "year1900") {
                if (choose_theme_heading)
                  choose_theme_heading.style.fontFamily = "Year1900";
              } else {
                if (choose_theme_heading)
                  choose_theme_heading.style.fontFamily = "Minimal Regular";
              }
            }
          }}
          onClick={() => {
            setIsCyberpunkThemeHovered(false);
            if (year_1900_animate_interval)
              clearInterval(year_1900_animate_interval);
            setSelectedTheme("cyberpunk");
            const choose_theme_heading = document.getElementById(
              "choose_theme_heading"
            );
            if (choose_theme_heading)
              choose_theme_heading.style.fontFamily = "Cyberpunk Regular";
          }}
        >
          {!isCyberpunkThemeHovered ? (
            <Image
              src={CyberpunkThemeIcon}
              quality={100}
              className="theme_icon_avatar"
              objectFit="contain"
              priority={true}
            />
          ) : null}
        </div>
      </div>

      <h2 className="mode_sub_text" id="mode_sub_text_1900">
        Year 1900's
      </h2>
      <h2 className="mode_sub_text" id="mode_sub_text_minimal">
        Minimalistic
      </h2>
      <h2 className="mode_sub_text" id="mode_sub_text_marvel">
        Marvel
      </h2>
      <h2 className="mode_sub_text" id="mode_sub_text_cyberpunk">
        Cyberpunk
      </h2>
      {selectedTheme === "year1900" ? (
        <motion.button
          className="theme_selector_button year1900_button"
          id="theme_selector_button year_1900_button"
          onClick={() => {
            console.log("Click Year 1900");
          }}
        >
          Continue
        </motion.button>
      ) : null}
      {selectedTheme === "minimal" ? (
        <motion.button
          className="theme_selector_button minimal_button"
          id="theme_selector_minimal_button"
          onClick={() => {
            console.log("Click Minimal");
          }}
        >
          Continue
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ color: "black", height: "2.5vh", width: "2vw" }}
            id="right-arrow"
          />
        </motion.button>
      ) : null}
      {selectedTheme === "marvel" ? (
        <motion.button
          className="theme_selector_button marvel_button"
          id="theme_selector_marvel_button"
          onClick={() => {
            console.log("Click Marvel");
          }}
        >
          Continue
        </motion.button>
      ) : null}
      {selectedTheme === "cyberpunk" ? (
        <motion.button
          className="theme_selector_button cyberpunk_button"
          id="theme_selector_cyberpunk_button"
          onClick={() => {
            console.log("Click Cyberpunk");
          }}
        >
          <span className="cyberpunk_button_content">Continue</span>
          <span className="cyberpunk_button_glitch"></span>
        </motion.button>
      ) : null}
    </div>
  );
}

export default ChooseMode;
