import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const testTime = 1 * 60 * 1000 + 1000;
type Props = {
    openModal: (title: string, buttonText: string) => void;
};

export function Timer({ openModal }: Props) {
    const [time, setTime] = useState<{
        minutes: number;
        seconds: number;
    }>({ minutes: 0, seconds: 0 });

    useEffect(() => {
        const endDate = history.state?.endDate || Date.now() + testTime;
        history.pushState({ ...history.state, endDate }, "");
        const timer = setInterval(() => {
            const time = timeLeft(endDate);
            setTime(time);
            if (time.minutes <= 0 && time.seconds <= 0) {
                clearInterval(timer);
                openModal("Время вышло", "попробовать еще");
            }
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <Box
            sx={{}}
            p={0}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"center"}
            width={"400px"}
        >
            <Typography mr={2}>время до звершения теста:</Typography>
            <Typography
                variant="h5"
                border={"2px solid purple"}
                borderRadius={"5px"}
                pl={2}
                pr={2}
                minHeight="32px"
                minWidth="50px"
                textAlign={"center"}
            >
                {time.minutes === 0 && time.seconds === 0
                    ? " "
                    : `${time.minutes}:${time.seconds}`}
            </Typography>
        </Box>
    );
}

function timeLeft(endDate: number) {
    const startDate = Date.now();
    const time = endDate - startDate;
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return { minutes, seconds };
}
