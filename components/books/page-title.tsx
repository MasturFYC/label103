import React from "react";
import { iIntro, iText } from 'constants/interfaces'
import { PageDesc } from "./page-desc";

export type pageTitleType = {
  intro: iIntro;
  showDescription?: boolean;
}
export const PageTitle: React.FC<pageTitleType> = ({ intro, showDescription }: pageTitleType) => {
  return (
    <React.Fragment>
      <div className='page-title'>{intro.id}<br />{intro.title}</div>
      {showDescription && intro.descriptions && <PageDesc desc={intro.descriptions} />}
      <style jsx>{`
      .page-title {
        font-weight: bold;
        font-size: 16pt;
        text-align: right;
        margin-top: 16px;
      }`}</style>
    </React.Fragment>
  )
}