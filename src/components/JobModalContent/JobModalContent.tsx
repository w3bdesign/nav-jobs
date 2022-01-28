import parse from 'html-react-parser'
import { Button } from '@navikt/ds-react'

import { formatDate } from '../../assets/utils/functions'

import style from './JobModalContent.module.scss'

import { TJobContentProps } from './JobModalContent.type'

const JobModalContent = ({ name, description, extent, applicationDue, closeModal }: TJobContentProps) => {
  return (
    <>
      <Button className="lukkeKnapp" variant="danger" onClick={closeModal}>
        Lukk
      </Button>
      <div className={style.jobDiv}>
        <span className={style.jobContent}>
          <span className={style.jobTitle}>
            {name}
            <br />
            {extent}
            <br />
            Søknadsfrist: {formatDate(applicationDue)}
          </span>
          <br />
          {parse(description)}
        </span>
      </div>
    </>
  )
}
export default JobModalContent
