import type { MetaFunction } from "@remix-run/node";
import {Tabs, Tab} from "@nextui-org/tabs";
import { useLocation } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { pathname } = useLocation();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <Tabs selectedKey={pathname} aria-label="Tabs">
        <Tab key="/" href="/" title="Home" />
        <Tab key="/photos" href="/photos" title="Photos" />
        <Tab key="/music" href="/music" title="Music" />
        <Tab key="/videos" href="/videos" title="Videos" />
      </Tabs>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
