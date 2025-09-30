const propertiessIterableFuncion = (properties) => {
  let result = []
  for (let prop of properties) {
    if (!prop.imagen) {
      prop.imagen = process.env.PROPERTY_IMAGE_PLACEHOLDER_URL
    }
    result.push(prop)
  }

  return result
}

export default propertiessIterableFuncion
