import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

import {
  Card,
  CardHeader,
  CardActions,
  Avatar,
  IconButton,
} from '@material-ui/core'

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import ModalConfirm from './ModalConfirm'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
 
}))

const CustomerCard = ({
  name,
  lastname,
  email,
  avatar,
  className,
}) => {
  const classes = useStyles()

  const [openModal, setOpenModal] = useState(false)

  const handleToggleOpenModal = () => {
    setOpenModal(!openModal)
  }

  const handleConfirmModal = () => {
    alert('ok')
  }

  const handleRemoveCustomers = () => {
    handleToggleOpenModal()
  }

  
  return (
    <>
      <Card className={classNames(className, classes.root)}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={avatar}>
              R
            </Avatar>
          }        
          title={`${name} ${lastname}`}
          subheader={email}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="editar cadastro">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="remover cadastro" onClick={handleRemoveCustomers}>
            <DeleteIcon />
          </IconButton>
          </CardActions>      
      </Card>
      <ModalConfirm
        open={openModal}
        onClose={handleToggleOpenModal}
        onConfirm={handleConfirmModal}
        title="Deseja realmente excluir este cadastro?"
        message="Depois de confirmar não será possivel reverter esta operação."
      />
    </>
  )
}

export default CustomerCard