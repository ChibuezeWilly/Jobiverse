import React from "react";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";

const CompanyPage = () => {
	// const url =
	// 	"https://glassdoor-real-time.p.rapidapi.com/companies/overview-details";

	// const fetchCompaniesData = async () => {
	// 	const res = await fetch(url, {
	// 		method: "GET",
	// 		headers: {
	// 			"x-rapidapi-key": "d65eaeb95amshdb5acc3d5dc8a2cp18968fjsn96ed4f3a1276",
	// 			"x-rapidapi-host": "fresh-linkedin-profile-data.p.rapidapi.com",
	// 		},
	// 	});
	// 	return res.json();
	// };

	// const { data, isError, isLoading } = useQuery({
	// 	queryKey: ["companiesData"],
	// 	queryFn: fetchCompaniesData,
	// 	refetchOnWindowFocus: false,
	// 	staleTime: 1000 * 60 * 60 * 24 * 7, // 1 week
	// 	cacheTime: 1000 * 60 * 60 * 24 * 7, // 1 week
	// });

	// console.log(data);

	async function fetchCompaniesData() {
		const url =
			"https://glassdoor-real-time.p.rapidapi.com/companies/overview";
		const options = {
			method: "GET",
			headers: {
				"x-rapidapi-key": "d65eaeb95amshdb5acc3d5dc8a2cp18968fjsn96ed4f3a1276",
				"x-rapidapi-host": "glassdoor-real-time.p.rapidapi.com",
			},
		};

		try {
			const response = await fetch(url, options);
			const result = await response.text();
			console.log(result);
		} catch (error) {
			console.error(error);
		}
	}

	fetchCompaniesData()

	return (
		<div className="w-full my-10 bg-white px-4 flex flex-col justify-center items-center gap-5 md:grid md:grid-cols-[350px_1fr] ">
			<div className=" bg-red-600 space-y-3 px-4 py-5">Hello</div>
			<div className=" min-h-screen h-auto px-2 sm:px-4 py-5 rounded-md ">
				{isError && (
					<p
						className="text-gray-700 text-base mt-5"
						style={{ fontFamily: "Poppins" }}>
						Error Fetching companies data
					</p>
				)}
				{isLoading ? (
					<Spinner />
				) : (
					<div className="h-64 w-full rounded-md hover:bg-gray-100">
						{/* <img
							src={data?.data?.employer.squareLogoUrl}
							alt=""
							srcset=""
							className=" border border-gray-400 py-1 h-16 w-16 px-1 rounded-md"
						/>
						<h1>{data?.data?.employer.revenue}</h1> */}
					</div>
				)}
			</div>
		</div>
	);
};

export default CompanyPage;
