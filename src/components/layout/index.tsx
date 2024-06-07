import { Box } from "@mui/material";

type Props = {
    children: React.ReactNode;
};
export function Layout({ children }: Props) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            gap={5}
            sx={{ backgroundColor: "#EEEEFF" }}
            m={"0 auto"}
            maxWidth={"700px"}
            minWidth={"360px"}
            p={5}
            mt={5}
            borderRadius={5}
        >
            {children}
        </Box>
    );
}
