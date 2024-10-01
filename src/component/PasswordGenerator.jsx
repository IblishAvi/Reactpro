import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [allowChar, setAllowChar] = useState(false);
  const [allowNum, setAllowNum] = useState(false);
  let [password, setPassword] = useState("");

  // Callback Hook to memoize the changes in the variable.
  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowChar) str += "~`!@#$%^&*()-+><,.?/{}[]'";
    if (allowNum) str += "0123456789";
    // Generate Random Number
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass); 
  }, [length,allowChar, allowNum, setPassword]);

  // respond as per changes
  useEffect(() => {
    passGenerator();
  }, [length, allowChar, allowNum, passGenerator]);

  const message =()=>{
    document.querySelector(".mess").innerHTML = "copied";
  }
  return (
    // Password Generation  code inside Fragment
    <>
      <div className=" w-full  max-w-md mx-auto px-4 my-8  text-orange-500 rounded-lg bg-gray-700  ">
        <div className="" >
          <h1 className="text-center text-white ">Password Generator</h1>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
            <input
              type="text"
              value={password}
              required
              placeholder="Password"
              readOnly
              className="outline-none w-full py-1 px-3 rounded-xl "
            />
            
            <button onClick={message} className= "mess bg-blue-600  w-15 rounded-xl text-black">
              Copy
            </button>
          </div>
          <div className=" flex text-white  justify-between">
            <input
              type="range"
              min={0}
              max={60}
              required
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="length" className="">
              Length :{length}
            </label>
          </div>
          <div className=" font-bold rounded-md ">
            <input
              type="checkbox"
              className="size-4 bottom-0 rounded-md"
              onClick={(e) => setAllowNum(e.target.value)}
            />
            <label className="text-white font-bold size-4 pb-3">Number</label><br />
            <input
              type="checkbox"
              className="text-white size-4 rounded-md"
              onClick={(e) => setAllowChar(e.target.value)}
            />
            <label htmlFor="" className="text-white font-bold ">
              Character
            </label>
          </div>
          
        </div>
      </div>
    </>
  );
}
export default App;