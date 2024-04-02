import { Button } from "@mui/material";

type Props = {
  text: string;
  type: "button" | "submit" | "reset";
  color?: string;
  onClick?: () => void;
};

const CustomButton = ({ text, type = "button", color = "#246068", onClick }: Props) => {
  return (
    <>
      <Button
        variant="contained"
        type={type}
        onClick={onClick}
        sx={{
          backgroundColor: color,
          width: "100%",
          marginBottom: "12px",
          "&:hover": {
            opacity: .8,
            backgroundColor: color,
            transition: ".3s linear all",
          },
        }}
      >
        {text}
      </Button>
    </>
  );
};

export default CustomButton;
