import React, { memo } from 'react'

function HeaderMemo() {

    console.log("header com Memo atualizou")

  return (
    <div>Header Com Memo</div>
  )
}

export default memo(HeaderMemo)