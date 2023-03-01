import { Button } from "@navikt/ds-react"
import { CSSTransition } from "react-transition-group"

import { useStoreState } from "@/assets/utils/hooks"
import { truncateTextLength } from "@/assets/utils/functions"

import style from "./SavedJobs.module.scss"

import { ISavedJobsProps } from "./SavedJobs.interface"
import { NextPage } from "next"

const SavedJobs: NextPage<ISavedJobsProps> = ({ handleOpenModalClick }) => {
  const jobModalItems = useStoreState((state) => state.jobs.jobModalItems)

  return (
    <div>
      {jobModalItems.length > 0 && (
        <>
          <div>
            <h2 className={style["saved-job-title"]}>Lagrede jobber: </h2>
          </div>
          <div className={style["saved-jobs"]}>
            {jobModalItems.map(({ id, title, description, extent, name, applicationDue }) => (
              <CSSTransition
                key={id}
                in={jobModalItems.length > 0}
                timeout={500}
                className="animate__animated animate__fadeInLeft"
                unmountOnExit
                appear
              >
                <Button onClick={() => handleOpenModalClick(description, extent, name, applicationDue)} key={id}>
                  {truncateTextLength(title, 40, " ... ")}
                </Button>
              </CSSTransition>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default SavedJobs
