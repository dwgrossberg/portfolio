import CSSDoodle from "../utilities/doodle";
import theme from "../utilities/theme";
const BackgroundLight = () => {
  return (
    <CSSDoodle
      className="css-doodle"
      onClick={(e: any) => {
        e.target.update && e.target.update();
      }}
      onMouseOver={(e: any) => {
        e.target.style.transform = "rotate(@rand(360)deg)";
        e.target.style.transition = ".2s;";
      }}
      rule={`
          :doodle {
            @grid: 17;
			      @size: 100vmax;
          }
		      background: linear-gradient(@pick-d(0deg, 90deg, 180deg, 270deg), ${theme.colors.light.backgroundSec} 25%, ${theme.colors.light.backgroundPri} 25% 50%, ${theme.colors.light.backgroundPri} 50%);
		      @random(.1) {
		        :after {
			        content: "";
			        @size: @r(5%, 25%);
			        border-radius: 50%;
			        background: radial-gradient(circle at @r(100%) @r(100%), ${theme.colors.light.backgroundBall} 0% 50%, ${theme.colors.light.backgroundAccent} 50% 100%);
			        display: @pick(none, unset);
			        transform: translateX(@r(-100%, 100%)) ;
			        animation: floatAnim @r(4s, 6s) @r(6s) infinite alternate ease-in-out;
              opacity: @r(1);
              z-index:1;
		        }
          }
		      @keyframes floatAnim {
			      100% {
				      transform: translateX(@r(100%, 700%));
              transform: translateY(@r(100%, 700%));
			      }
		      }
        `}
    />
  );
};

export default BackgroundLight;
