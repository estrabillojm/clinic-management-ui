import { Button } from "@mui/material";

type Props = {
    text: string;
    type: "button" | "submit" | "reset";
    color?: "success" | "primary"
}

const CustomButton = ({text, type="button", color = "primary"}: Props) => {
    return (
        <>
            <Button variant="contained" type={type} color={color}>
                {text}
            </Button>
        </>
    )
}

export default CustomButton;