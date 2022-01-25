// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


  // This could be replaced with Axios if wanted
  fetch(
    "https://arbeidsplassen.nav.no/public-feed/api/v1/ads?size=100&page=1",
    // 'https://arbeidsplassenx.navtet.no/public-feed/api/v1/ads?size=100&page=1', // <- Trigger error handler with this
    {
      method: "GET",
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWJsaWMudG9rZW4udjFAbmF2Lm5vIiwiYXVkIjoiZmVlZC1hcGktdjEiLCJpc3MiOiJuYXYubm8iLCJpYXQiOjE1NTc0NzM0MjJ9.jNGlLUF9HxoHo5JrQNMkweLj_91bgk97ZebLdfx3_UQ`,
      },
      mode: "cors",
    }
  ).then((result) =>
    result.json().then((data) => {
      //console.log(data.content);
      res.status(200).json(data.content);
    })
  );
}
