import { Outlet } from "react-router-dom";

import bgSmall from "@/assets/images/bg/bg_movie_1080x1920.png";
import bgMedium from "@/assets/images/bg/bg_movie_1920x1080.png";
import bgLarge from "@/assets/images/bg/bg_movie_2048x2048.png";
import bgXLarge from "@/assets/images/bg/bg_movie_2560x1440.png";

const GameMenuLayout = () => {
  return (
    <div className="relative h-screen overflow-hidden select-none">
      {/* Responsive background image */}
      <img
        src={bgMedium}
        srcSet={`
          ${bgSmall}  1080w,
          ${bgMedium} 1920w,
          ${bgLarge}  2048w,
          ${bgXLarge} 2560w
        `}
        sizes="100vw"
        alt="background"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        fetchPriority="high"
      />

      <Outlet />
    </div>
  );
};

export default GameMenuLayout;
