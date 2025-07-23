import clsx from "clsx";
import cameraPlaceholder from "../../assets/8666672_camera_icon.svg";

interface PhotoProps extends React.ComponentProps<"img"> {
  src?: string;
  alt?: string;
  className?: string;
}

const Photo = ({ src, alt, className, ...props }: PhotoProps) => (
  <img
    className={clsx("photo", className)}
    src={src || cameraPlaceholder}
    alt={alt || "foto del anuncio"}
    {...props}
  />
);

export default Photo;
