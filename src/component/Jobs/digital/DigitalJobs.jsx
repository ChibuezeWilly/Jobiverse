import { useEffect } from "react";
import Spinner from "../../Spinner";
import { useClicked, useJobStore } from "../../../Zustand";
import JobsCard from "../JobsCard";
import JobsDescription from "../JobsDescription";
import allJobs from "../../../allJobs.json";

const DigitalJobs = () => {
	// Use digital jobs from allJobs.json
	const data = allJobs.digital;

	// Get Zustand state and actions
	const { selectedJob, setSelectedJob } = useJobStore();
	const { clicked } = useClicked();

	// set the first job as the selectedJob
	useEffect(() => {
		if (data?.length > 0) {
			setSelectedJob(data[0]);
		}
	}, [data]);

	// const [workType, workLocation, title] = useJobsStore()

	// const filterJobs = data.filter(
	// 	(job) =>
	// 		job.title.toLowerCase().includes(title.toLowerCase()) ||
	// 		job.workType.toLowerCase().includes(workType.toLowerCase()) ||
	// 		job.workLocation.toLowerCase().includes(workLocation.toLowerCase())
	// );
	return (
		<div className="mt-0 mb-10">
			<p className="mt-3 ml-3">{}</p>
			<div className="jobs w-full mt-1">
				{!data ? (
					<Spinner />
				) : (
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
				)}
			</div>
		</div>
	);
};

export default DigitalJobs;
