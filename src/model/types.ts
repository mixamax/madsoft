export type Tquestion = {
    id: number;
    type: string;
    src?: string;
    question: string;
    answers: Tanswer[];
};
export type Tanswer = {
    id: number;
    answer: string;
};
