import { LoadingCircle } from "..";
import { IProps } from "./interface";

export const LoadingPage = ({ isLoading, children }: IProps) => {
  return (
    <>
      {isLoading && (
        <div className="flex fixed w-full h-full items-center justify-center bg-black/20">
          <LoadingCircle />
        </div>
      )}
      {children}
    </>
  );
};
