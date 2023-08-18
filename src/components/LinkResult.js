import React, { useEffect, useState } from "react";
import "./LinkResult.css";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const LinkResult = ({ inputLink }) => {
  const [shortenedLink, setShortenedLink] = useState("");
  const [linkCopied, setLinkCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const linkCopiedHandler = () => {
    setLinkCopied(true);
  };

  // making an api call for the shortened link
  useEffect(() => {
    const getShortenedUrl = async () => {
      try {
        setLoading(true);
        const response = await axios.request(
          `https://api.shrtco.de/v2/shorten?url=${inputLink}`
        );
        setShortenedLink(response.data.result.full_short_link);
        console.log(response.data);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    };

    if (inputLink) {
      getShortenedUrl();
    }
  }, [inputLink]);

  //timer to make the copy link button return to normal after 1000ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setLinkCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [linkCopied]);

  return (
    <>
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {shortenedLink && (
        <div className="link-result">
          <p>{shortenedLink}</p>
          <CopyToClipboard text={shortenedLink} onCopy={linkCopiedHandler}>
            <button className={linkCopied ? "link-copied" : ""}>Copy</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default LinkResult;
