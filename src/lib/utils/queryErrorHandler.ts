import { useError } from "../hooks/useError";

const queryErrorHandler = (error: unknown): void => {
  const title =
    error instanceof Error ? error.message : "error connecting to server";
  useError(title);
};

export default queryErrorHandler;
