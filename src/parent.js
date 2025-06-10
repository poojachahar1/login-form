import React, { useMemo } from "react";

export default function Parent() {
  const handleLargeCalculation = useMemo(() => {
    console.log("Heavy calculation running...");
    let sum = 0;
    for (let i = 0; i <= 10; i++) {
      sum += i;
    }
    return sum;
  }, []);

  return (
    <div>
      <p>Memoized Sum: {handleLargeCalculation}</p>
      <button onClick={() => alert(`Sum is: ${handleLargeCalculation}`)}>
        Show Sum
      </button>
    </div>
  );
}
