"use client";

type Props = {
  error: Error;
  reset: () => void;
};

const ErrorPage = ({ error, reset }: Props) => {
  console.log(error);
  return (
    <>
      <div>An unexpected error has occurred</div>
      <button className="btn" onClick={() => reset()}>
        RETRY
      </button>
    </>
  );
};
export default ErrorPage;
