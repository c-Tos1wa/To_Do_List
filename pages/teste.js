import { Formik, Field, Form } from 'formik'
import { Input, FormControl, FormErrorMessage, FormLabel, Button } from '@chakra-ui/react'

export default function FormikExample() {
  function validateName(value) {
    let error
    if (!value) {
      error = "Name is required"
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱"
    }
    return error
  }

  return (
    <Formik
      initialValues={{ name: "", anotherName: '' }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Field name="name" validate={validateName}>
            {({ field, form }) => (
              <>
              <FormControl isInvalid={form.errors.name && form.touched.name}>
                {/*<FormLabel htmlFor="name">First name</FormLabel>*/}
                <Input {...field} id="name" placeholder="name" />
                <FormErrorMessage>{form.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={form.errors.anotherName && form.touched.anotherName}>
              {/*<FormLabel htmlFor="name">First name</FormLabel>*/}
              <Input {...field} id="anotherName" placeholder="anotherName" />
              <FormErrorMessage>{form.errors.ànotherName}</FormErrorMessage>
            </FormControl>
            </>
            )}
          </Field>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}