import {useRouter} from 'next/router'
import React from 'react'

const Lancamento = () => {
  const { query } = useRouter();

  const id = query.id;

  return (
    <div>
      
      Lançamento {id}
    </div>
  )
}

export default Lancamento