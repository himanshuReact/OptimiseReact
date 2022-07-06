import React from "react";
import "./Child.css";

const Child = (props) => {
  const { counter, updateCounter } = props;
  console.log("!!!!Child is Rendering!!!!");

  return (
    <div className="Child">
      <h1>Child - {counter}</h1>

      {/* <button onClick={updateCounter}>Click</button> */}
    </div>
  );
};

// export default Child;
export default React.memo(Child);

//
//
//
//
//
//
//
//
//
//
//

// const Child = () => {

//   console.log("!!!!Child is Rendering!!!!");

//   return (
//     <div className="Child">
//       <h1>Child</h1>
//     </div>
//   );
// };

// export default React.memo(Child);
