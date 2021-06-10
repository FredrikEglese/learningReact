import React, { useState } from "react";

import "./style/app.css";

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const increment1 = () => {
		setCounter((x) => x + 1);
	};

	const increment10 = () => {
		setCounter((x) => x + 10);
	};

	const resetCounter = () => {
		setCounter(0);
	};

	return (
		<div>
			<p>Counter value: {counter}</p>

			<button onClick={increment1}>Increment by 1</button>
			<button onClick={increment10}>Increment by 10</button>

			<button onClick={resetCounter}>Reset</button>
		</div>
	);
};

export default Counter;
