import React from "react";
import { iTitle, iText } from 'constants/interfaces'
import { PageDesc } from "./page-desc";

export type pageTitleType = {
  title: iTitle;
  showDescription?: boolean;
}
export const PageTitle: React.FC<pageTitleType> = ({ title, showDescription }: pageTitleType) => {
  return (
    <React.Fragment>
      <div className='page-title'>{title.id}<br />{title.text}</div>
      {showDescription && title.descriptions && <PageDesc desc={title.descriptions} />}
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