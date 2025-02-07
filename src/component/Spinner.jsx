import React from "react";
import { useState } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const Spinner = () => {
	let [loading, setLoading] = useState(true);

	const override = {
		display: "block",
		margin: "0 auto",
		borderColor: "red",
	};
	return (
		<FadeLoader
			color={"black"}
			loading={loading}
			cssOverride={override}
			size={150}
			aria-label="Loading Spinner"
			data-testid="loader"
		/>
	);
};

export default Spinner;
