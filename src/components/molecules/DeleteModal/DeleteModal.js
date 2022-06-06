import React from 'react'
import * as Styled from './styles'
import {Button} from '../../atoms/Button'

const DeleteModal = ({confirm,reject}) => {
  return (
    <Styled.Modal>
        <h2>Are you sure you want to delete this post?</h2>
        <div>
        <Button onClick={confirm}>Yes</Button>
        <Button onClick={reject}>No</Button>
        </div>
    </Styled.Modal>
  )
}

export default DeleteModal