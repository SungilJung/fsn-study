export default function Event(props: any) {
  const handleButtonClick = () => {
    console.log("click");
  };
  const handleClickCapter = () => {
    console.log("capter");
  };
  const handleMouseLeave = (e: any) => {
    console.dir(e);
  };
  const handleClickCapter2 = () => {
    console.log("capter2");
  };
  const handleClickBubble = () => {
    console.log("Bubbles");
  };

  return (
    <div onClickCapture={handleClickCapter}>
      <div onClickCapture={handleClickCapter2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>
          button
        </button>
      </div>
    </div>
  );
}
