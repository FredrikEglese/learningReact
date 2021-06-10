import { useState } from "react";
import Counter from "./Counter";

const App = () => {
	const [showCounter, setShowCounter] = useState(true);
	return (
		<div>
			{showCounter && <Counter />}
			<button onClick={() => setShowCounter((x) => !x)}>Toggle Counter</button>
		</div>
	);
};

export default App;
