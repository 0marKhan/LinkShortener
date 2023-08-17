import React, { useEffect, useState } from "react";
import "./LinkResult.css";
import CopyToClipboard from "react-copy-to-clipboard";

const LinkResult = (props) => {
  const [shortenedLink, setShortenedLink] = useState("Hello World");
  const [linkCopied, setLinkCopied] = useState(false);

  const linkCopiedHandler = () => {
    setLinkCopied(true);
  };

  //timer to make the copy link button return to normal after 1000ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setLinkCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [linkCopied]);

  return (
    <div className="link-result">
      <p>{shortenedLink}</p>
      <CopyToClipboard text={shortenedLink} onCopy={linkCopiedHandler}>
        <button className={linkCopied ? "link-copied" : ""}>
          Copy to clipboard
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default LinkResult;
