import React from "react";
import { iText } from 'constants/interfaces'

export type PageDescType = {
  desc: iText[];
}
export const PageDesc: React.FC<PageDescType> = ({ desc }: PageDescType) => {
  return (
    <React.Fragment>
      <div className='page-desc'>
        {desc.map(d => <span>{d.text}<br /></span>)}
      </div>
      <style jsx>{`
      .page-title {
      margin: 25px 0;
      text-align: right;
      }`}</style>
    </React.Fragment>
  )
}
