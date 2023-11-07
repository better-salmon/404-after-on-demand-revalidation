import { RevalidateButton } from "../components/revalidate-button";

export const dynamicParams = false;

export function generateStaticParams() {
  return Promise.resolve([{ slug: "should-work" }]);
}

export default async function Index() {
  const result = await fetch("https://worldtimeapi.org/api/timezone/UTC", {
    next: {
      tags: ["timezone"],
    },
  });

  const data = await result.json();

  return (
    <div>
      <pre>{data.datetime}</pre>
      <RevalidateButton revalidate="/should-work" type="path" />
      <RevalidateButton revalidate="timezone" type="tag" />
    </div>
  );
}
