import moment from "moment-timezone";
import "moment/locale/ko";
import { ChangeEvent, useRef, useState } from "react";

const MomentExample = () => {
  const momentDate = moment();
  const newMDate = momentDate.add(1, "week");
  const cloneNewMDate = newMDate.clone().add(1, "week");

  const birthDayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthDayChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDay(moment(event.target.value, "YYYY-MM-DD").format("dddd"));
  };
  return (
    <div>
      <h1>Moment</h1>
      <div> Inmutable check</div>
      <div>
        {momentDate.format()}
        <br />
        {newMDate.format()}
        <br />
        {cloneNewMDate.format()}
        <br />
        <br />
        <div>summber time</div>
        <div>
          2018 3월 10일 13시에 하루 더하기
          {moment
            .tz("2018-03-10  13:00:00", "America/New_York")
            .add(1, "day")
            .format()}
        </div>
        <div>
          2018 3월 10일 13시에 24시 더하기
          {moment
            .tz("2018-03-10  13:00:00", "America/New_York")
            .add(24, "hour")
            .format()}
        </div>
        <br />
        <div>Leam Year</div>
        <div>
          2017 1월 1일 1년 빼기
          {moment("2017-01-01").subtract(1, "year").format()}
        </div>
        <div>
          2017 1월 1일 365일 빼기
          {moment("2017-01-01").subtract(365, "day").format()}
        </div>
        <br />
        <div>한국어 표기</div>
        <div>{moment("07-17-21").format("YYYY년 M월 D일")}</div>
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
          {moment("2021-03-10 13:00:00").diff(
            moment("2020-03-10 13:00:00"),
            "day"
          )}
          일
        </div>
      </div>
    </div>
  );
};

export default MomentExample;
