import React from "react";
import Button from "./sub-components/Button";

const ShortenedLink = ({
  link,
  shortLink,
  id,
  setLastCopiedID,
  lastCopiedID,
}) => {
  const handleClick = async () => {
    navigator.clipboard.writeText(shortLink);
    setLastCopiedID(id);
  };
  return (
    <div className="py-5 lg:py-3 px-4 mb-4 flex flex-col lg:flex-row lg:items-center bg-white lg:gap-3 rounded-md">
      <p className="grow border-b lg:border-0	 border-solid border-darkgray pb-2 mb-2 lg:pb-0 lg:mb-0 -mx-4 px-4">
        {link}
      </p>
      <p className="text-lightblue pb-3 lg:pb-0">{shortLink}</p>
      <Button
        onClick={handleClick}
        className={
          lastCopiedID === id
            ? "!bg-violet !rounded-md lg:w-32"
            : "!rounded-md lg:w-32"
        }
      >
        {lastCopiedID === id ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
};

export default ShortenedLink;
