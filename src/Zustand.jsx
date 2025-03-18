import { create } from "zustand";

export const useJobStore = create((set) => ({
    selectedJob: null,
    setSelectedJob: (job) => set({selectedJob : job})
}))

export const useCountStore = create((set) => ({
	count: 0,
	setCount: () => set((state) => ({count: state.count + 1}))
}));

export const useClicked = create((set) => ({
	clicked: null,
	setClicked: (value) => set({ clicked: !!value })
}));

export const useSavedStore = create((set) => ({
	save: null,
	setSaved: (value) => set({save: !!value})
}))

// export const useJobsStore = create((set) => ({
// 	workType: "",
// 	workLocation: "",
// 	title: "",
// 	setWork: (workType) => set({ workType }),
// 	setWorkLocation: (workLocation) => set({ workLocation }),
// 	setTitle: (title) => set({ title }),
// }));

// export const useClickFuntion = create((set) => ({
	
// }))