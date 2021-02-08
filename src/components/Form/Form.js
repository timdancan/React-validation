import emailIcon from '../../img/mail.png'
import passwordIcon from '../../img/lock.png'
import errorIcon from '../../img/Layer2.png'
import checkIcon from '../../img/check.svg'
import { useState } from 'react'
import validate from '../../validateInfo.js'
import correct from '../../correctValidation'

const useForm = (validate, correct) => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [correctly, setCorrectly] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  const handleSubmit = e => {
    e.preventDefault()
    setErrors(validate(values))
    setCorrectly(correct(values))
    setIsSubmitting(true)
  }

  return {handleChange, values, handleSubmit, errors, correctly}
}



const Form = () => {
  const { values, handleChange, handleSubmit, errors, correctly } = useForm (validate, correct)

  return(
    <form action="submit" className="form" onSubmit={handleSubmit} noValidate>
        <label className="label">
          <img className="icon" src={emailIcon} alt="" /><input value={values.email} onChange={handleChange} className={correctly.email ? 'input input_green': 'input' } type="email" name="email" id="email" placeholder="E-mail"/>
          {errors.email && <p className="errors" >{errors.email}</p>}
          {errors.email && <img className="error-icon" src={errorIcon} alt="" />}
          {correctly.email && <img className="error-icon" src={checkIcon} alt="" />}
        </label>  
        <label className="label">
          <img className="icon" src={passwordIcon} alt="" /><input value={values.password} onChange={handleChange} className={correctly.password ? 'input input_green': 'input' } type="password" name="password" id="password" placeholder="Password"/>
          {errors.password && <p className="errors">{errors.password}</p>}
          {errors.password && <img className="error-icon" src={errorIcon} alt="" />}
          {correctly.password && <img className="error-icon" src={checkIcon} alt="" />}
        </label>
        <button className="button" type="submit">Login</button>
        <p className="text">Forgot your password?<a href="/"> Reset it here.</a></p>
      </form>
  )
}

export default Form