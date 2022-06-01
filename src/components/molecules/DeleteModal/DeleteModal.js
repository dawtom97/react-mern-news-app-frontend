import React from 'react'
import * as Styled from './styles'

const DeleteModal = ({confirm,reject}) => {
  return (
    <Styled.Modal>
        <h2>Are you sure you want to delete this post?</h2>
        <button onClick={confirm}>Yes</button>
        <button onClick={reject}>No</button>
    </Styled.Modal>
  )
}

export default DeleteModal