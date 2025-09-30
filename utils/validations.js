import { check, validationResult } from 'express-validator'

export const userValidations = async (req) => {
  await check('nombre')
    .notEmpty()
    .trim()
    .withMessage('El nombre no puede estar vacio')
    .isLength({ max: 20 })
    .withMessage('El nombre debe tener menos de 20 caracteres')
    .run(req)
  await check('email').isEmail().trim().withMessage('Email no valido').run(req)
  await check('password')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe de ser minimo 6 caracteres')
    .run(req)
  await check('repetir_password')
    .matches(req.body.password)
    .withMessage('Las contraseñas no coinciden')
    .run(req)

  return validationResult(req)
}
export const mensajeValidations = async (req) => {
  await check('mensaje')
    .trim()
    .notEmpty()
    .withMessage('El mensaje no debe de estar vacio.')
    .isLength({ max: 300 })
    .withMessage('El mensaje no debe de contener mas de 300 caracteres.')
    .run(req)

  return validationResult(req)
}

export const loginValidations = async (req) => {
  await check('email')
    .notEmpty()
    .withMessage('Campo Obligatorio')
    .isEmail()
    .trim()
    .withMessage('Email no valido')
    .run(req)

  await check('password')
    .notEmpty()
    .withMessage('Campo Obligatorio')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe de ser minimo 6 caracteres')
    .run(req)

  return validationResult(req)
}

export const resetValidations = async (req) => {
  await check('password')
    .isLength({ min: 6 })
    .withMessage('La contraseña debe de ser minimo 6 caracteres')
    .run(req)
  await check('repetir_password')
    .equals(req.body.password)
    .withMessage('Las contraseñas no coinciden')
    .run(req)

  return validationResult(req)
}

export const passwordValidations = async (req) => {
  await check('email').isEmail().trim().withMessage('Email no valido').run(req)

  return validationResult(req)
}

export const propiedadesValidations = async (req) => {
  await check('titulo')
    .notEmpty()
    .withMessage('El campo Titulo no debe de estar vacio')
    .isLength({ max: 75 })
    .withMessage('El campo Titulo no debe ser mayor a 75 caracteres')
    .run(req)
  await check('descripcion')
    .notEmpty()
    .withMessage('El campo Descripcion no debe de estar vacio')
    .isLength({ max: 300 })
    .withMessage('El campo Descripcion no debe ser mayor a 300 caracteres')
    .run(req)
  await check('categoria')
    .notEmpty()
    .withMessage('Selecciona una categoria')
    .run(req)
  await check('precio')
    .notEmpty()
    .withMessage('Selecciona un rango de precio')
    .run(req)
  await check('habitaciones')
    .notEmpty()
    .withMessage('Selecciona la cantidad de habitaciones')
    .run(req)
  await check('estacionamiento')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Selecciona capacidad de coches para la cochera')
    .run(req)
  await check('wc')
    .notEmpty()
    .withMessage('Selecciona un de cantidad de wc')
    .run(req)

  return validationResult(req)
}
