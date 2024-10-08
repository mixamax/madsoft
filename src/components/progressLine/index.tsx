import { Box } from "@mui/material";
import { Tquestion } from "../../model/types";

enum Colors {
    behind = "black",
    active = "#af8ef5",
    ahead = "lightgray",
}

type Props = { progress: number; questions: Tquestion[] };
export function ProgressLine({ progress, questions }: Props) {
    return (
        <Box display="flex" flexDirection="row">
            {questions.map((item, index) => (
                <Box
                    key={item.id}
                    sx={{
                        width: "50px",
                        height: "3px",
                        backgroundColor:
                            index < progress
                                ? Colors.behind
                                : index === progress
                                ? Colors.active
                                : Colors.ahead,
                        marginRight: "5px",
                    }}
                ></Box>
            ))}
        </Box>
    );
}
