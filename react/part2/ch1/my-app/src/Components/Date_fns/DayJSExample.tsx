import { add, format } from "date-fns";
import { addWeeks } from "date-fns/esm";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import timezone from "dayjs/plugin/timezone";
import "dayjs/plugin/utc";
import utc from "dayjs/plugin/utc";
import { ChangeEvent, useRef, useState } from "react";

dayjs.locale("ko");
dayjs.extend(utc);
dayjs.extend(timezone);
const DateFNSExample = () => {
  const date = new Date();
  const newMDate = add(date, { days: 1 });
  const cloneNewMDate = addWeeks(newMDate, 1);

  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthDayChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDay(dayjs(event.target.value, "YYYY-MM-DD").format("dddd"));
  };
  return (
    <div>
      <h1>Date FNS</h1>
      <div> Inmutable check</div>
      <div>
        {format(date, "yyyy-mm-dd")}
        <br />
        {format(newMDate, "yyyy-mm-dd")}
        <br />
        {format(cloneNewMDate, "yyyy-mm-dd")}
        <br />
        <br />
        <div>summber time</div>
        <div>
          2018 3월 10일 13시에 하루 더하기
          {dayjs
            .tz("2018-03-10  13:00:00", "America/New_York")
            .add(1, "day")
            .format()}
        </div>
        <div>
          2018 3월 10일 13시에 24시 더하기
          {dayjs
            .tz("2018-03-10  13:00:00", "America/New_York")
            .add(24, "hour")
            .format()}
        </div>
        <br />
        <div>Leam Year</div>
        <div>
          2017 1월 1일 1년 빼기
          {dayjs("2017-01-01").subtract(1, "year").format()}
        </div>
        <div>
          2017 1월 1일 365일 빼기
          {dayjs("2017-01-01").subtract(365, "day").format()}
        </div>
        <br />
        <div>한국어 표기</div>
        <div>{dayjs("07-17-21").format("YYYY년 M월 D일")}</div>
        <br />
        <div>자기 생일 찾기</div>
        <input
          type={"date"}
          ref={birthDayRef}
          onChange={handleBirthDayChange}
        ></input>
        <div>무슨요일</div>
        <div>{day}</div>

        <br />
        <div> 두날짜 비교</div>
        <div> 2021 3월 10일 13시, 2020 3월 10일 13시</div>
        <div>
          {dayjs("2021-03-10 13:00:00").diff(
            dayjs("2020-03-10 13:00:00"),
            "day"
          )}
          일
        </div>
      </div>
    </div>
  );
};

export default DateFNSExample;
