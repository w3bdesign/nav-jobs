import { useQuery } from "@tanstack/react-query"

export async function getJobs() {
  return await fetch("/api/fetchNavJobs").then((result) =>
    result.json().then((data) => {
      return data
    }),
  )
}

const useJobs = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobs,
  })
  return { data, isLoading }
}

export default useJobs
