import { create } from "zustand";
import Experience from "./component/Profile/Experience";

export const useJobStore = create((set) => ({
	selectedJob: null,
	setSelectedJob: (job) => set({ selectedJob: job }),
}));

export const useCountStore = create((set) => ({
	count: 0,
	increaseCount: () => set((state) => ({ count: state.count + 1 }))
}));

export const useClicked = create((set) => ({
	clicked: null,
	setClicked: (value) => set({ clicked: !!value }),
}));

export const useSavedStore = create((set) => ({
	save: null,
	setSaved: (value) => set({ save: !!value }),
}));

export const useFormStore = create((set) => ({
	name: "",
	phone: null,
	gender: "",
	email: "",
	dob: "",
	exp: "",
	qualifications: "",
	jobTitle: "",
	salary: "",
	heading: "",
	locations: "",
	city: "",
	portfolio: "",
	school: "",
	companyName: "",
	link: "",
	linkText: "",
	country: "",

	// Actions to update form state
	setName: (name) => set({ name }),
	setPhone: (phone) => set({ phone }),
	setGender: (gender) => set({ gender }),
	setEmail: (email) => set({ email }),
	setDob: (dob) => set({ dob }),
	setExp: (exp) => set({ exp }),
	setQualifications: (qualifications) => set({ qualifications }),
	setJobTitle: (jobTitle) => set({ jobTitle }),
	setSalary: (salary) => set({ salary }),
	setHeading: (heading) => set({ heading }),
	setLocations: (locations) => set({ locations }),
	setCity: (city) => set({ city }),
	setPortfolio: (portfolio) => set({ portfolio }),
	setSchool: (school) => set({ school }),
	setCompanyName: (companyName) => set({ companyName }),
	setLink: (link) => set({ link: link }),
	setLinkText: (linkText) => set({ linkText }),
}));

export const useExperienceStore = create((set) => ({
	workTitle: "",
	organization: "",
	employmentType: "",
	startMonth: "",
	startYear: "",
	endMonth: "",
	endYear: "",
	workLocation: "",
	workLocationType: "",
	currentWork: "",
	description: "",
	skill: "",
	skillArray: [],
	experiences: [],
	setWorkTitle: (workTitle) => set({ workTitle }),
	setOrganization: (organization) => set({ organization }),
	setEmploymentType: (employmentType) => set({ employmentType }),
	setStartMonth: (startMonth) => set({ startMonth }),
	setStartYear: (startYear) => set({ startYear }),
	setEndMonth: (endMonth) => set({ endMonth }),
	setEndYear: (endYear) => set({ endYear }),
	setWorkLocation: (workLocation) => set({ workLocation }),
	setWorkLocationType: (workLocationType) => set({ workLocationType }),
	setCurrentWork: (value) => set({ currentWork: value }),
	setDescription: (description) => set({ description }),
	setSkill: (value) => set({skill: value}),
	setSkillArray: (skill) =>
		set((state) => ({ ...state, skillArray: [...state.skillArray, skill] })),
	setExperience: (newExperience) =>
		set((state) => ({
			...state,
			experiences: [...state.experiences, newExperience],
		})),
	skills: [],
	setSkills: (skill) =>
		set((state) => ({ ...state, skills: [...state.skills, skill] })),
	deleteSkill: (skill) =>
	set((state) => ({
	...state,
	skillArray: state.skillArray.filter((oldskills) => oldskills !== skill),
	})),
	resetAllFields: () =>
		set({
			workTitle: "",
			organization: "",
			employmentType: "",
			startMonth: "",
			startYear: "",
			endMonth: "",
			endYear: "",
			workLocation: "",
			workLocationType: "",
			currentWork: "",
			description: "",
			skill: "",
		}),
}));

export const useEducationStore = create((set) => ({
	school: "",
	degree: "",
	fieldOfStudy: "",
	startMonth: "",
	startYear: "",
	endMonth: "",
	endYear: "",
	grade: "",
	activities: "",
	description: "",
	skill: "",
	skills: [],
	education: [],
	media: null,
	setSchool: (school) => set({school}),
	setSkill: (skill) => set({skill}),
	setDegree: (degree) => set({degree}),
	setField: (fieldOfStudy) => set({fieldOfStudy}),
	setStartMonth: (startMonth) => set({startMonth}),
	setStartYear: (startYear) => set({startYear}),
	setEndMonth: (endMonth) => set({endMonth}),
	setEndYear: (endYear) => set({endYear}),
	setGrade: (grade) => set({grade}),
	setActivities: (activities) => set({activities}),
	setDescription: (description) => set({description}),
	setSkills: (skill) => set((state) => ({
		...state, skills: [...state.skills, skill]
	})),
	deleteSkill: (skill) => set((state) => ({
		...state, skills: state.skills.filter((oldSkills) => oldSkills !== skill)
	})),
	setEducation: (edu) => set((state) => ({...state, education: [...state.education, edu]}))
}));