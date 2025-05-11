import { create } from "zustand";

export const useJobStore = create((set) => ({
	selectedJob: null,
	setSelectedJob: (job) => set({ selectedJob: job }),
}));

export const useImageStore = create((set) => ({
	backgroundPicture: null,
	setBackgroundPicture: (value) => set({ backgroundPicture: value }),

	uploadedprofilePicture: null,
	setUploadedProfilePicture: (value) => set({ profile: value }),
}));

export const useCountStore = create((set) => ({
	count: 0,
	increaseCount: () => set((state) => ({ count: state.count + 1 })),
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
	setSkill: (value) => set({ skill: value }),
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
	activities: "",
	description: "",
	skill: "",
	skills: [],
	education: [],
	setSchool: (school) => set({ school }),
	setSkill: (skill) => set({ skill }),
	setField: (fieldOfStudy) => set({ fieldOfStudy }),
	setStartMonth: (startMonth) => set({ startMonth }),
	setStartYear: (startYear) => set({ startYear }),
	setEndMonth: (endMonth) => set({ endMonth }),
	setEndYear: (endYear) => set({ endYear }),
	setDegree: (degree) => set({ degree }),
	setActivities: (activities) => set({ activities }),
	setDescription: (description) => set({ description }),
	setSkills: (skill) =>
		set((state) => ({
			...state,
			skills: [...state.skills, skill],
		})),
	deleteSkill: (skill) =>
		set((state) => ({
			...state,
			skills: state.skills.filter((oldSkills) => oldSkills !== skill),
		})),
	setEducation: (edu) =>
		set((state) => ({ ...state, education: [...state.education, edu] })),
	resetAllField: () =>
		set({
			school: "",
			degree: "",
			fieldOfStudy: "",
			startMonth: "",
			startYear: "",
			endMonth: "",
			endYear: "",
			activities: "",
			description: "",
			skill: "",
			skills: [],
		}),
}));

export const useAllSkills = create((set) => ({
	skill: "",
	setSkill: (skill) => set({ skill }),
	allSkills: [],
	setAllSkills: (skill) =>
		set((state) => ({ ...state, allSkills: [...state.allSkills, skill] })),
	deleteSkill: (skill) =>
		set((state) => ({
			...state,
			skills: state.skills.filter((oldSkills) => oldSkills !== skill),
		})),
	resetAllField: () =>
		set({
			skill: "",
			allSkills: [],
		}),
}));

export const useAuthenticatedStore = create((set) => ({
	authenticated: localStorage.getItem("sent") === "true",
	setAuthenticated: () => {
		localStorage.setItem("sent", "true");
		set({ authenticated: true });
	},
}));

export const useSetUser = create((set) => ({
	user: null,
	setUser: (value) => set({ user: value }),
}));

export const signedUser = create((set) => ({
	email: null,
	password: null,
	setEmail: (value) => set({ email: value }),
	setPassword: (value) => set({ password: value }),
}));

export const useJobSeeker = create((set) => ({
	candidate: localStorage.getItem("candidate") === "true",
	setCandidate: (value) => {
		localStorage.setItem("candidate", "true")
		set({ candidate: value })
	},
	name: null,
	setName: (value) => set({ name: value }),
	email: null,
	password: null,
	setEmail: (value) => set({ email: value }),
	setPassword: (value) => set({ password: value }),
	resetValue: () =>
		set({
			name: "",
			email: "",
			password: "",
		}),
}));

export const useEmployer = create((set) => ({
	employer: localStorage.getItem("employer") === "true",
	setEmployer: (value) => {
		localStorage.setItem("employer", "true");
		set({ employer: value });
	},
	name: null,
	setName: (value) => set({ name: value }),
	email: null,
	password: null,
	setEmail: (value) => set({ email: value }),
	setPassword: (value) => set({ password: value }),
	resetValue: () =>
		set({
			name: "",
			email: "",
			password: "",
		}),
}));
