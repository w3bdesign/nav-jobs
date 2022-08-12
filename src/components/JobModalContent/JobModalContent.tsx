import parse from "html-react-parser"
import { Button } from "@navikt/ds-react"

import { formatDate } from "../../assets/utils/functions"

import style from "./JobModalContent.module.scss"

import { TJobContentProps } from "./JobModalContent.type"

const JobModalContent = ({ name, description, extent, applicationDue, closeModal }: TJobContentProps) => {
  return (
    <>
      <Button className={style["lukke-knapp"]} variant="danger" onClick={closeModal}>
        Lukk
      </Button>
      <div className={style["job-div"]}>
        <span className={style["job-content"]}>
          <span className={style["job-title"]}>
            <>
              {name}
              <br />
              {extent}
              <br />
              Søknadsfrist: {formatDate(applicationDue)}
            </>
          </span>
          <br />
          {parse(description)}
        </span>
      </div>
    </>
  )
}
export default JobModalContent
