import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function fetchNavJobs(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // This could be replaced with Axios if wanted
  fetch(
    "https://arbeidsplassen.nav.no/public-feed/api/v1/ads?size=100&page=1",
    // 'https://arbeidsplassenx.navtet.no/public-feed/api/v1/ads?size=100&page=1', // <- Trigger error handler with this
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTH}`,
      },
      mode: "cors",
    }
  ).then((result) =>
    result.json().then((data) => {
      res.status(200).json(data.content);
    })
  );
}
