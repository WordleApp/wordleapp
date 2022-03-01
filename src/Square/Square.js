export default function Square() {
  return (
    <>
    </>
  );
}

function renderBox(x){
  let arr = [];
  for (let i = 0; i < correctWord.length; i++){
    arr.push(<div key={x + i} className={`box x-${x} row y-${i}`}>{`${i}`}</div>);
  }
  return (
    <div className="rows">
      {
        arr
      }
    </div>
  );
}