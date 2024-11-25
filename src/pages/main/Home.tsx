import { useNavigate } from "react-router-dom";
import Button from "../../components/common/Button/Button";
import ROUTE_PATH from "../../constants/ROUTE_PATH";
import { getTodayDate } from "../../utils/util";
import { useEffect, useState } from "react";

import Calendar from "@/components/pages/main/home/Calendar";
import useCalendarData from "@/hooks/query/useCalendarData";

/**
 * 메인 화면
 * @returns
 */
const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const { calendarData, isActiveToday } = useCalendarData(currentDate);

  const navigate = useNavigate();
  const onClickCreateDiary = () => {
    navigate(ROUTE_PATH.DIARY_FLOW.CREATE, { state: { date: getTodayDate() } });
  };

  const handlePrevMonth = () => {
    setCurrentDate((prev) => {
      const prevMonth = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
      return prevMonth;
    });
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => {
      const nextMonth = new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
      return nextMonth;
    });
  };

  useEffect(() => {
    // URL의 쿼리 문자열에서 access_token과 refresh_token을 획득
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);

    const accessToken = params.get("access");
    const refreshToken = params.get("refresh");

    if (accessToken && refreshToken) {
      localStorage.setItem("access_token", accessToken);
      localStorage.setItem("refresh_token", refreshToken);
      window.location.href = "/";
    } else {
      const token = localStorage.getItem("access_token");
      if (!token) {
        navigate(ROUTE_PATH.LOGIN);
        return;
      }
    }
  }, []);

  return (
    <div className="flex h-full flex-grow flex-col justify-between overflow-scroll">
      <Calendar
        calendarData={calendarData}
        currentDate={currentDate}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      ></Calendar>
      <div className="my-4 flex justify-center">
        <Button
          size="big"
          active={isActiveToday}
          text="오늘 일기 작성하기"
          onClickHandler={onClickCreateDiary}
          bgColor="dark"
        />
      </div>
    </div>
  );
};

export default Home;
