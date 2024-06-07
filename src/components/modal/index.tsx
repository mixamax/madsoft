import { Box, Button, Typography } from "@mui/material";

export type TmodalState = {
    isOpen: boolean;
    title: string;
    buttonText: string;
};
type Props = {
    title: string;
    buttonText: string;
    closeModal: () => void;
};

export function Modal({ title, buttonText, closeModal }: Props) {
    return (
        <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignContent="center"
            zIndex="100"
        >
            <Box
                display="flex"
                flexDirection="column"
                gap="10px"
                justifyContent="center"
                alignContent="center"
            >
                <Typography variant="h6" textAlign={"center"}>
                    {title}
                </Typography>
                <Button onClick={() => closeModal()}>{buttonText}</Button>
            </Box>
        </Box>
    );
}
