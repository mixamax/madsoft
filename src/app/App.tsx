import { useState } from "react";
import { Question } from "../components/question";
import { ProgressLine } from "../components/progressLine";
import { Timer } from "../components/timer";
import { Layout } from "../components/layout";
import { Modal } from "../components/modal";
import { TmodalState } from "../components/modal";
import { useTestStore } from "../store/store";

function App() {
    const progress = useTestStore((state) => state.progress);
    const questions = useTestStore((state) => state.data);
    const setZeroProgress = useTestStore((state) => state.setZeroProgress);

    const [modal, setModal] = useState<TmodalState>(() => ({
        isOpen: history.state?.isModalOpen ? true : history.state.isModalOpen,
        title: "Тест про JS на английском",
        buttonText: "начать",
    }));

    const openModal = (title: string, buttonText: string) => {
        history.pushState({ ...history.state, isModalOpen: true }, "");
        setModal({ isOpen: true, title, buttonText });
    };
    const closeModal = () => {
        history.pushState(
            { progress: 0, endDate: null, isModalOpen: false },
            ""
        );
        setZeroProgress();
        setModal((prev) => ({ ...prev, isOpen: false }));
    };

    return (
        <Layout>
            {!modal.isOpen && (
                <>
                    <Timer openModal={openModal} />
                    <ProgressLine progress={progress} questions={questions} />
                    <Question
                        question={questions[progress]}
                        openModal={openModal}
                    >
                        <Question.Text />
                        <Question.Img />
                        <Question.SelfAnswer />
                        <Question.TextOneAnswer />
                    </Question>
                </>
            )}
            {modal.isOpen && (
                <Modal
                    title={modal.title}
                    buttonText={modal.buttonText}
                    closeModal={closeModal}
                />
            )}
        </Layout>
    );
}

export default App;
