import JobsCard from "./JobsCard";
import { useClicked, useJobStore } from "../../Zustand";
import JobsDescription from "./JobsDescription";

const Jobs = ({data}) => {
	const { selectedJob } = useJobStore();
	const { clicked } = useClicked();

	return (
		<div className="mt-0 mb-10">
			<p className="mt-3 ml-3"></p>
			<div className="jobs w-full mt-1">
				<>
					{/* Jobs List */}
					<div className="jobsList space-y-3 px-4 py-5">
						{data?.map((job) => (
							<JobsCard job={job} key={job.id} />
						))}
					</div>

					{/* Job Description */}
					<div
						className={`jobsDescription ${
							clicked ? "block" : "hidden"
						}  md:block mt-5 px-4 py-5 rounded-md`}
						style={{ borderWidth: "1px" }}
						id="jobs">
						<JobsDescription job={selectedJob} data={data} />
					</div>
				</>
			</div>
		</div>
	);
};

export default Jobs;
