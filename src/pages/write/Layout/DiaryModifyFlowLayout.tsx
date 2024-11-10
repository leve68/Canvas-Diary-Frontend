import { Outlet, useNavigate, useParams } from "react-router-dom";
import Appbar from "../../../components/common/Appbar";
import MobileLayout from "../../Layout/MobileLayout";
import Button from "../../../components/common/Button";
import { useState } from "react";
import { postImageToDiary } from "@/api/api";

//리팩토링 무조건 해야함
const DiaryModifyFlowLayout = () => {
  const navigate = useNavigate();
  const { diaryID } = useParams<{ diaryID: string }>();
  const [diaryInfo, setDiaryInfo] = useState<{ style: string }>({ style: "" });
  const [isLoaded, setIsLoaded] = useState(false);

  const onClickNext = async () => {
    if (location.pathname === `/diary/${diaryID}/style` && diaryID) {
      postImageToDiary({ diaryId: diaryID, style: diaryInfo.style })
        .then(() => {
          setIsLoaded(true);
        })
        .catch((error) => {
          throw error;
        });
      navigate(`/diary/${diaryID}/draw`);
    } else if (location.pathname === `/diary/${diaryID}/draw`) navigate(`/diary/${diaryID}`);
  };

  const handleActive = () => {
    if (location.pathname === `/diary/${diaryID}/style` && diaryInfo.style !== "") return true;
    if (location.pathname === `/diary/${diaryID}/draw` && isLoaded) return true;
    else return false;
  };

  return (
    <MobileLayout>
      <Appbar text="이미지 추가" backHandler={() => navigate(-1)}></Appbar>
      <div className="flex-grow overflow-scroll px-800 py-300">
        <Outlet context={{ diaryInfo, setDiaryInfo }} />
      </div>
      <div className="my-4 flex justify-center">
        <Button
          size="big"
          active={handleActive()}
          text="추가 생성하기"
          onClickHandler={onClickNext}
          bgColor="dark"
        />
      </div>
    </MobileLayout>
  );
};

export default DiaryModifyFlowLayout;