import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import image from "../public/assets/images/nische_ganz_800w.png";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export const meta: V2_MetaFunction = () => {
  return [{ title: "Meine Nische – Buchung" }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-screen bg-meine-nische-background font-sans text-themed-base-text">
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
          <img
            alt="cover"
            src={image}
            className="hidden lg:block lg:object-cover lg:overflow-hidden lg:h-0 lg:w-0 lg:min-h-full lg:min-w-full"
          />
          <div className="flex flex-col justify-between items-center">
            <div />
            <Outlet />
            <div className="py-4">
              <a
                className="underline hover:text-text-secondary"
                href="https://meine-nische.de/kontakt#impressum"
                target="_blank"
                rel="noreferrer"
              >
                Impressum
              </a>{" "}
              |{" "}
              <a
                className="underline hover:text-text-secondary"
                href="https://meine-nische.de/kontakt#datenschutz"
                target="_blank"
                rel="noreferrer"
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
