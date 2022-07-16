import React, { useState } from "react";
import ShortenedLink from "./ShortenedLink";
import Button from "./sub-components/Button";
import Container from "./sub-components/Container";

const ShortenLink = () => {
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastCopiedID, setLastCopiedID] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (link === "") {
      setError("Provide a link please");
      return;
    }
    setLoading(true);
    try {
      const req = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
      const res = await req.json();
      if (res.ok) {
        setLinks((prevLinks) => [
          ...prevLinks,
          { id: res.result.code, link, shortLink: res.result.short_link },
        ]);
        setError("");
      } else {
        setError(res.error);
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <Container>
      <div className="py-1 px-6 lg:px-12 bg-shorten-pattern-mobile lg:bg-shorten-pattern-desktop bg-cover bg-center bg-violet rounded-md -translate-y-1/2">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="py-5 lg:py-1 flex flex-col md:flex-row gap-5 lg:items-center"
        >
          <div
            className={
              error ? "relative grow pb-11 lg:py-6" : "relative grow lg:py-6"
            }
          >
            <input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full rounded-md py-3 px-6"
              type="text"
              placeholder="Shorten a link here..."
            />
            {error && (
              <span className="absolute bottom-0 left-0 text-red text-xs italic">
                {error}
              </span>
            )}
          </div>
          <Button
            style={{ height: "51px" }}
            disabled={loading}
            className={
              loading ? "!rounded-lg !bg-lightcyan cursor-wait" : "!rounded-lg"
            }
            type="submit"
          >
            Shorten It!
          </Button>
        </form>
      </div>
      <div className="-mt-8">
        {links.map((item) => (
          <ShortenedLink
            key={item.id}
            link={item.link}
            id={item.id}
            setLastCopiedID={setLastCopiedID}
            lastCopiedID={lastCopiedID}
            shortLink={item.shortLink}
          />
        ))}
      </div>
    </Container>
  );
};

export default ShortenLink;
