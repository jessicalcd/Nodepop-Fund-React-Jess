import "./photo.css";
import clsx from "clsx";
import defaultPhoto from "../../assets/wallapop-svgrepo-com (1).svg";
import type { ComponentProps } from "react";

const Photo = ({ className, alt, src, ...props }: ComponentProps<"img">) => (
  <img
    className={clsx("photo", className)}
    src={src ?? defaultPhoto}
    alt={alt ?? "photo"}
    {...props}
  />
);

export default Photo;