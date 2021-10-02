import React from 'react';
import { Formik } from 'formik';
import { FormControl, FormLabel, Input, Heading, Button, VStack, Divider, Box } from "@chakra-ui/react";

 
 const Basic = () => (
   <div>
    
    <VStack spacing='1.5rem' bgGradient='linear-gradient(90deg,#11AEEB, #35F39D)' height='100vh' spacing='2.5' flexDirection='column' w=''>

     <Heading mt='40px' fontSize="4xl" fontWeight="semibold" lineHeight="short" mb='50' padding='7'>
       Entre e veja as suas tarefas
      </Heading>
     
     <Formik
       initialValues={{ name: '', email: '', password: '' }}
       validate={values => {
         const errors = {};
        if(!values.name){
           errors.name = 'Required'; 
          } else if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
      
       
       <form onSubmit={handleSubmit}>    {/* // começo do form  */}
          
          <Box bg='gray.100'>

          <VStack spacing='2rem' >

            <Input
             variant="subtle"
             type="name"
             name="name"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.name}
             size="lg"
             placeholder='Digite seu nome'
           />
           {errors.name && touched.name && errors.name}
           
           <Input
             variant="subtle"
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
             size="lg"
             placeholder='Agora seu email'
           />
           
           {errors.email && touched.email && errors.email}
           
           <Input
             variant="subtle"
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
             size="lg"
             placeholder='E agora sua senha'
            />
           {errors.password && touched.password && errors.password}
           
           <Divider />

           <Button height="48px" border="2px" colorScheme='brand.800' variant="subtle"
           borderColor="brand.800" type="submit" variant="outline" disabled={isSubmitting} 
           _hover='gray.200'
           >
             Cadastrar
           </Button>

           </VStack>
           </Box>
         </form>
       )}
     </Formik>

    </VStack>
    
   </div>
 );
 
 export default Basic;