import { createContext, useContext, useMemo, useState } from "react";
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    TextField,
    Button,
} from "@mui/material";
import { Tquestion } from "../../model/types";
import { useTestStore } from "../../store/store";

type TOpenModal = (title: string, buttonText: string) => void;
type TContext = {
    question: Tquestion;
    openModal: TOpenModal;
};
type Props = {
    children: React.ReactNode;
    question: Tquestion;
    openModal: TOpenModal;
};
type WrapperProps = {
    children: React.ReactNode;
    question: Tquestion["question"];
    openModal: TOpenModal;
};

const QuestionContext = createContext<TContext | null>(null);

export function Question({ children, question, openModal }: Props) {
    const value = useMemo(() => ({ question, openModal }), [question]);

    return (
        <QuestionContext.Provider value={value}>
            {children}
        </QuestionContext.Provider>
    );
}

function QuestionWrapper({ children, question, openModal }: WrapperProps) {
    const increaseProgress = useTestStore((state) => state.increaseProgress);
    const questionsNumber = useTestStore((state) => state.questionsNumber);

    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const historyProgress = history.state?.progress;
        if (historyProgress && historyProgress >= questionsNumber - 1) {
            openModal("Вы прошли тест", "повторить");
            return;
        }
        history.pushState(
            {
                ...history.state,
                progress: historyProgress ? historyProgress + 1 : 1,
            },
            ""
        );
        increaseProgress();
    };
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            gap={2}
            component="form"
            onSubmit={(e) => {
                onSubmitHandler(e);
            }}
        >
            <Typography variant="h6">{question}</Typography>
            {children}
            <Button
                variant="contained"
                type="submit"
                sx={{ backgroundColor: "#af8ef5", width: "100px" }}
            >
                Ответить
            </Button>
        </Box>
    );
}

Question.Img = function Img() {
    const context = useContext(QuestionContext);
    const question = context?.question;

    if (!question || question.type !== "img") return null;
    return (
        <QuestionWrapper
            question={question.question}
            openModal={context.openModal}
        >
            <Box width="70%" minWidth="300px">
                {" "}
                <img
                    width={"100%"}
                    src={question.src}
                    alt="image of question"
                />
            </Box>
            <FormGroup>
                {question.answers.map((answer) => (
                    <FormControlLabel
                        key={answer.id}
                        control={<Checkbox />}
                        label={answer.answer}
                    />
                ))}
            </FormGroup>
        </QuestionWrapper>
    );
};

Question.SelfAnswer = function SelfAnswer() {
    const context = useContext(QuestionContext);
    const question = context?.question;

    if (!question || question.type !== "selfAnswer") return null;

    return (
        <QuestionWrapper
            question={question.question}
            openModal={context.openModal}
        >
            <TextField
                id="standard-multiline-flexible"
                label="Введите свой ответ"
                multiline
                maxRows={4}
                variant="outlined"
            />
        </QuestionWrapper>
    );
};

Question.Text = function Text() {
    const context = useContext(QuestionContext);
    const question = context?.question;

    if (!question || question.type !== "text") return null;

    return (
        <QuestionWrapper
            question={question.question}
            openModal={context.openModal}
        >
            <FormGroup>
                {question.answers.map((answer) => (
                    <FormControlLabel
                        key={answer.id}
                        control={<Checkbox />}
                        label={answer.answer}
                    />
                ))}
            </FormGroup>
        </QuestionWrapper>
    );
};

Question.TextOneAnswer = function Text() {
    const context = useContext(QuestionContext);
    const question = context?.question;
    const [checked, setChecked] = useState(0);

    if (!question || question.type !== "textOneAnswer") return null;

    return (
        <QuestionWrapper
            question={question.question}
            openModal={context.openModal}
        >
            <FormGroup>
                {question.answers.map((answer, index) => (
                    <FormControlLabel
                        key={answer.id}
                        control={
                            <Checkbox
                                checked={checked === index}
                                onChange={() => setChecked(index)}
                            />
                        }
                        label={answer.answer}
                    />
                ))}
            </FormGroup>
        </QuestionWrapper>
    );
};
