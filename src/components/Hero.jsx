import React, { useEffect, useState } from "react";
import picture1 from "../img/karpaty.jpg";
import picture2 from "../img/maldives.jpg";
import picture3 from "../img/egypt.jpg";
import picture4 from "../img/ibiza.jpg";
import "../dist/styles.css";
import PreloadImages from "./PreloadImages";

const images = [picture1, picture2, picture3, picture4];
const textData = [
  {
    title: "Карпати",
    subtitle:
      "казкова природа та аутентична культура в самому серці Європи. Зелені гори, які змальовують неймовірні панорами, створюють ідеальну атмосферу для активного відпочинку. Вирушайте в піші прогулянки або велосипедні походи, відкривайте таємничі водоспади та ліси, де живе дика природа. Крім того, Карпати - це місце, де ви можете зануритися в українську культуру та смаки. Спробуйте справжні карпатські страви, від ковбасок до борщу, і насолоджуйтеся гостинністю місцевого населення. Неабияка краса природи, місцевий колорит і можливість відпочити від міської метушні роблять Карпати ідеальним місцем для відпочинку та пригод у природі.",
  },
  {
    title: "Мальдiви",
    subtitle:
      "Мальдіви - тропічний рай з білими пісками пляжів, кокосовими гаями і чистим блакитним морем. Первісна природа Південної Азії, дивовижний підводний світ, передчуття захоплення, спокою та райської насолоди – це те, чим можна охарактеризувати відпочинок на Мальдівах. Заради цього сюди з'їжджаються туристи з усього світу, недаремно острови мають другу назву – «Тропічний рай».",
  },
  {
    title: "Єгипет",
    subtitle:
      "Египет - це чарівна країна та справжній рай для любителів подорожей. Тут вас чекають захоплюючі пригоди в сонячних пустелях та підводний світ Красного моря, де ви зможете доторкнутися до неймовірної різноманітності коралових рифів. Відвідайте давні пам'ятки, такі як піраміди та храми фараонів, які розповідають історію стародавнього світу. А ще, насолоджуйтесь гостинністю місцевого народу та справжньою арабською кухнею. Египет - це казковий світ пригод і магії, який чекає на вас з відкритими обіймами.",
  },
  {
    title: "Iбiца",
    subtitle:
      "острів мрій і незабутніх вражень для справжніх любителів розваг та релаксу. Тут вас чекають бескрайні білі пляжі, кришталево-чисте море і безсонні ночі на найгарячіших вечірках світу. Відвідайте клуби, де грають найкращі діджеї планети, і занурьтеся в електронну музичну атмосферу. Або оберіть спокійну прогулянку по старовинним вуличкам Дальта, де історія і сучасність переплітаються в найкращому вигляді. Ібіца - це місце, де ви зможете розслабитися та відчути безмежний відпочинок під лучами сонця та ритмами найкращої музики.",
  },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransparent, setIsTransparent] = useState(false);
  const { title, subtitle } = textData[currentImageIndex];
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const nextImage = () => {
    setFadeOut(true);
    setIsTransparent(true);

    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);

      setFadeOut(false);
      setFadeIn(true);

      setTimeout(() => {
        setFadeIn(false);
      }, 5000);

      setTimeout(() => {
        setIsTransparent(false);
      }, 500);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center bottom",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: isTransparent
      ? "rgba(40, 58, 94, 0.1)"
      : "rgba(40, 58, 94, 0.5)",
    zIndex: 1,
    transition: "background-color 0.5s ease-in-out",
    animationName: fadeOut ? "fadeOutLeft" : fadeIn ? "fadeInLeft" : "none",
  };

  return (
    <>
      <PreloadImages images={images} />
      <div className="hero" style={backgroundImageStyle}>
        <div className="hero-overlay" style={overlayStyle}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  className={`title ${fadeOut ? "fade-out" : ""} ${
                    fadeIn ? "fade-in" : ""
                  }`}
                >
                  <h2>{title}</h2>
                </div>
                <div
                  className={`subtitle ${fadeOut ? "fade-out" : ""} ${
                    fadeIn ? "fade-in" : ""
                  }`}
                >
                  <p>{subtitle}</p>
                </div>
                <div
                  className={`btns ${fadeOut ? "fade-out" : ""} ${
                    fadeIn ? "fade-in" : ""
                  }`}
                >
                  <a href="/home" className="theme-btn">
                    Детальніше
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
