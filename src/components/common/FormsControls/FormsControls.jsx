import { Field } from 'redux-form'
import styles from './FormsControls.module.css'

const FormControl = ({input, meta: {touched, error}, children, ...props}) => {
  const hasError = touched && error
  return (
    <div className={styles.formСontrol + ' ' + (hasError ? styles.error : '')}>
      {children}
      {hasError && <p>{error}</p>}
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, ...restProps} = props
  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
  const {input, meta, ...restProps} = props
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const creatField = (type, placeholder, name, validators, component, text) => (
  <div>
    <Field 
      type={type} 
      placeholder={placeholder} 
      name={name} 
      component={component} 
      validate={validators}
      text={text}
       /> {text}
  </div>
)