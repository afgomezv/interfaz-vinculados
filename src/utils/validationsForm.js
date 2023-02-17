export const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexMessage = /^.{1,255}$/;

  if (!form.funcionario.trim()) {
    errors.funcionario = "El nombre del funcionario es requerido";
  } else if (!regexName.test(form.funcionario.trim())) {
    errors.funcionario = "El correo electroónico no es valido";
  }

  if (!form.sexo.trim()) {
    errors.sexo = "El cedula es requerido";
  }

  if (!form.correo.trim()) {
    errors.correo = "El correo electroónico es requerido";
  } else if (!regexEmail.test(form.correo.trim())) {
    errors.correo = "El correo electroónico no es valido";
  }

  if (!form.cedula.trim()) {
    errors.cedula = "El cedula es requerido";
  }

  if (!form.expedida.trim()) {
    errors.expedida = "El cedula es requerido";
  }

  if (!form.fechaNacimiento.trim()) {
    errors.fechaNacimiento = "El fecha de nacimeinto es requerido";
  }

  if (!form.lugarNacimiento.trim()) {
    errors.lugarNacimiento = "El lugar de nacimiento es requerido";
  }

  if (!form.fechaIngreso.trim()) {
    errors.fechaIngreso = "El fecha de ingreso es requerido";
  }

  if (!form.tiempoServicio.trim()) {
    errors.tiempoServicio = "El tiempo de servicio es requerido";
  }

  if (!form.dependencia.trim()) {
    errors.dependencia = "La dependencia es requerida";
  }

  if (!form.areafuncional.trim()) {
    errors.areafuncional = "El area es requerido";
  }

  if (!form.cargo.trim()) {
    errors.cargo = "El cargo es requerido";
  }

  // if (!form.eps.trim()) {
  //   errors.eps = "El cedula es requerido";
  // }

  // if (!form.pension.trim()) {
  //   errors.pension = "El cedula es requerido";
  // }

  // if (!form.cesantias.trim()) {
  //   errors.cesantias = "El cedula es requerido";
  // }

  if (!form.direccion.trim()) {
    errors.direccion = "La dirección es requerido";
  }

  if (!form.ciudad.trim()) {
    errors.ciudad = "La ciudad es requerida";
  }

  if (!form.correoPersonal.trim()) {
    errors.correoPersonal = "El correo personal es requerido";
  }

  if (!form.telefono.trim()) {
    errors.telefono = "El telefono es requerido";
  }

  if (!form.celular.trim()) {
    errors.celular = "El cedula es requerido";
  }

  if (!form.estadoCivil.trim()) {
    errors.estadoCivil = "El estado civil es requerido";
  }

  if (!form.hijos.trim()) {
    errors.hijos = "El numero de hijos  es requerido";
  }

  return errors;
};
