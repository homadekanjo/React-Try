import { useMemo, useState } from "react";
import "./App.css";
function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const increment1 = () => {
    setCounter1(counter1 + 1);
  };
  const increment2 = () => {
    setCounter2(counter2 + 1);
  };
  const myFunction = useMemo(() => {
    for (let i = 0; i < 100_000_000_0; i++);
    if (counter1 % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }, [counter1]);
  return (
    <>
      <section className="bg-red-100 text-black p-2 rounded-sm">
        <h2 className="inline-flex mx-3 my-2"> first Counter ({counter1})</h2>
        <h2 className="inline-flex mx-3 my-2"> second Counter ({counter2})</h2>
        <div className="btns flex gap-2 justify-center">
          <button onClick={increment1}>counter1 +</button>
          <button onClick={increment2}>counter2 +</button>
        </div>
        <div className="state_of_counter1 text-center my-2">
          counter2 state : {myFunction ? "even" : "odd"}
        </div>
      </section>
    </>
  );
}
export default App;
