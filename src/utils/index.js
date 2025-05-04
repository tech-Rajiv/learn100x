import { elements } from "./html.js";
import {
  clientServerModel,
  httpHttps,
  internetHistory,
  internetHowItWorks,
  internetIpDns,
  internetProtocols,
  webBrowsersServers,
} from "./internet.js";

export const objectContent = {
  internet: {
    "internet history": internetHistory,
    "how internet works": internetHowItWorks,
    "TCP/IP protocol": internetProtocols,
    "internet IPs DNS": internetIpDns,
    "client-server model": clientServerModel,
    "http and https" :httpHttps,
    "web browsers and servers":webBrowsersServers,
  },
  html: {
    tags: "HTML tags define elements like headings, paragraphs, and links.",
    elements: elements,
  },
  css: {
    selectors: "Selectors target HTML elements to apply styles.",
    styles: "CSS styles define how HTML elements appear.",
  },
  javascript: {
    promises: "Promises are used for handling asynchronous operations in JS.",
    callbacks:
      "Callbacks are functions passed into other functions as arguments.",
  },
};
