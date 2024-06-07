import { create } from "zustand";
import { Tquestion } from "../model/types";
import { questions } from "./data";

interface TestState {
    data: Tquestion[];
    questionsNumber: number;
    progress: number;
    increaseProgress: () => void;
    setZeroProgress: () => void;
}

export const useTestStore = create<TestState>((set) => ({
    data: questions,
    questionsNumber: questions.length,
    progress: history.state?.progress || 0,
    increaseProgress: () => set((state) => ({ progress: state.progress + 1 })),
    setZeroProgress: () => set({ progress: 0 }),
}));
