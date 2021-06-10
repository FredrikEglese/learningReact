import { useEffect, useState } from "react";

import "./style/app.css";

const Counter = () => {
	const [counter, setCounter] = useState(0);
	const incrementOptions = [1, 10];

	const increment = (incrementer: number) => {
		setCounter((x) => x + incrementer);
	};

	const resetCounter = () => {
		setCounter(0);
	};

	useEffect(() => {
		document.title = `C = ${counter}`;

		return () => {
			document.title = "hello!";
		};
	}, [counter]);

	const incrementButtons = incrementOptions.map((i) => {
		return (
			<button key={"num_button_" + i} onClick={() => increment(i)}>
				Increment by {i}
			</button>
		);
	});

	return (
		<div>
			<p>Counter value: {counter}</p>
			{incrementButtons}
			<button onClick={resetCounter}>Reset</button>
		</div>
	);
};

export default Counter;
