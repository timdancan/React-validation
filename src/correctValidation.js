export default function correctValidation(values) {
  let corrects = {}

  if (/\S+@\S+\.\S+/.test(values.email)) {
    corrects.email = 'Email address is invalid';
  }

  if (values.password.length >= 6) {
    corrects.password = "Password needs to be 6 characters or more"
  } 

  return corrects
}