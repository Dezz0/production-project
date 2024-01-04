import React, { useState } from "react";
import styles from "./comp.module.scss";

const Component: React.FC = () => {
	const [count, setCount] = useState<number>(0);
	return (
		<div className={styles.button}>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>+1</button>
		</div>
	);
};

export default Component;
