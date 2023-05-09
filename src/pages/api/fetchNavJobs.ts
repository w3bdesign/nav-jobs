import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  name: string
}

export default async function fetchNavJobs(_req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> {
  try {
    const result = await fetch("https://arbeidsplassen.nav.no/public-feed/api/v1/ads?size=100&page=1", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTH}`,
      },
      mode: "cors",
    })
    const data = await result.json()
    res.status(200).json(data.content)
  } catch (error: any) {
    res.status(500).json(error)
  }
}
