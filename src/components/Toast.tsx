type HorizontalPosition = "left" | "center" | "bottom";

type VerticalPosition = "left" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition} - ${VerticalPosition}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};