import { useOutletContext } from "react-router-dom";
import dummy from "../../assets/dummy/_Image.png";
import { FADEINANIMATION } from "../../styles/animations";
import { ContextProps } from "./Layout/DiaryWriteFlowLayout";

const Draw = () => {
  const { isLoaded } = useOutletContext<ContextProps>();

  return (
    <div className="items-centergap-[2rem] flex h-full flex-col justify-center font-Binggrae text-gray-900 dark:text-gray-50">
      <div className="flex flex-col items-center justify-center gap-1000 font-BinggraeBold text-title-2">
        <img
          src={dummy}
          alt=""
          className={`${FADEINANIMATION[0]} h-[9.6rem] w-[9.6rem] rounded-full`}
        />
        <div className={`${FADEINANIMATION[1]} flex flex-col gap-500 overflow-hidden`}>
          <div
            className={`${isLoaded && "-translate-y-11 opacity-0"} transition-all duration-1000`}
          >
            <span className="text-primary-medium dark:text-primary-light-3">그림</span>을 그리고
            있어요
          </div>
          <div
            className={`${isLoaded ? "-translate-y-11 opacity-100" : "opacity-0"} transition-all duration-1000`}
          >
            <span className="text-primary-medium dark:text-primary-light-3">그림</span>이 다
            그려졌어요
          </div>
        </div>
      </div>
    </div>
  );
};

export default Draw;
