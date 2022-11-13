import CSSDoodle from "../utilities/doodle";
const BackgroundDark = () => {
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
		
		      background: linear-gradient(@pick-d(0deg, 90deg, 180deg, 270deg), #191919 25%, #141414 25% 50%, #141414 50%);
		      @random(.1) {
		        :after {
			        content: "";
			        @size: @r(5%, 25%);
			        border-radius: 50%;
			        background: radial-gradient(circle at @r(100%) @r(100%), #DBDBDB 0% 50%, #A5FFC9 50% 100%);
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

export default BackgroundDark;