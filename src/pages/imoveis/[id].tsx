import {useRouter} from 'next/router';
import React from 'react'

const Imovel = () => {
    const { query } = useRouter();
  return (
    <div>Imovel com id {query.id} </div>
  )
}

export default Imovel