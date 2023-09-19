/* eslint-disable no-console */
import React from "react";
import { navigateToUrl } from "single-spa";

export default function Root(props) {
  const [message, setMessage] = React.useState("message");

  React.useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.source === "nexacro" || event.data.event === "component") {
        setMessage(event.data.payload.component);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const sendMessage = (menuId) => {
    const iframe = document.getElementById("myIframe");
    if (iframe) {
      iframe.contentWindow.postMessage(
        { source: "platform", event: "route", payload: { menu: menuId } },
        "*"
      );
    }
  };

  return (
    <>
      <div className="">
        {/* <section className="bg-slate-100">{props.name} is mounted!</section> */}
        <p className="px-5 pt-7 font-semibold text-lg">nexacro</p>
        <ul className="px-10 pt-3 list-disc list-outside leading-8">
          <li>
            <a
              href="/nexacro-adapter"
              className="underline "
              onClick={navigateToUrl}
            >
              Layout page
            </a>
          </li>
          <li>
            <a
              href="/nexacro-adapter?menu=3"
              className="underline "
              onClick={navigateToUrl}
            >
              Hello page url
            </a>
          </li>
          <li>
            <a
              href="/nexacro-adapter?menu=4"
              className="underline "
              onClick={navigateToUrl}
            >
              World page url
            </a>
          </li>
          <li>
            <button
              className="underline text-left"
              onClick={() => sendMessage(3)}
            >
              Hello page event
            </button>
          </li>
          <li>
            <button
              className="underline text-left"
              onClick={() => sendMessage(4)}
            >
              World page event
            </button>
          </li>
        </ul>
      </div>
      {/* iframe 위 overlay 가능 테스트 */}
      <div className="fixed top-0 right-0 m-10 p-10 bg-slate-500 text-slate-100 flex items-center justify-center">
        {message}
      </div>
    </>
  );
}
