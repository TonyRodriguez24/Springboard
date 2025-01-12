import React, {useState} from "react";

const Clicker = () => {
  const fireLasers = (e) => {
    console.log(e.nativeEvent);
    console.log("lasers are now being fired");
  }

  return (
    <>
      <button onClick={fireLasers}>Mouse over me</button>
      <textarea onScroll= {fireLasers} row='2'>
        sdsa agfdsfasdfasdf sdafasdf
        sdsa agfdsfasdfasdf sdafasdf
        sdsa agfdsfasdfasdf sdafasdf
        sdsa agfdsfasdfasdf sdafasdf
        sdsa agfdsfasdfasdf sdafasdf
        sdsa agfdsfasdfasdf sdafasdf
        sdsa agfdsfasdfasdf sdafasdf
        sdsa agfdsfasdfasdf sdafasdf
      </textarea>
    </>
  );
}
export default Clicker;