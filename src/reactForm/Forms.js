import { Box, Button, Group, PasswordInput, TextInput } from '@mantine/core'
import { useState } from 'react';
import { useFormik } from 'formik';
 function Forms() {
    const initialValues = {
        name: "",
        email: "",
        password: ""
    }
    useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log(values)
        }
    })
    const [isTouched, setIsTouched] = useState(false);
    const [isDirty, setIsDirty] = useState(false);
    const [formData, setFormData] = useState({
    });
    const handleInputChange = (event) => {
        const { name, value } = (event.target);
        setFormData({ ...formData, [name]: value })
        setIsTouched(true);
        setIsDirty(true);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
    };

    return (
        <>
            <Box maw={400} mx="auto" mt="10%" p="10vh" sx={(theme) => ({
                // background: "#1098AD",
                borderRadius: "10px"
            })}>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        withAsterisk
                        label="Name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        id="name"
                        name="name"
                        touched={isTouched}
                        dirty={isDirty}/>
                    <TextInput
                        withAsterisk

                        label="Email"
                        placeholder="Email"
                        mt="md"
                        value={formData.email}
                        onChange={handleInputChange}
                        id="email"
                        name="email"
                        touched={isTouched}
                        dirty={isDirty}/>
                    <PasswordInput
                        withAsterisk
                        label="Password"
                        placeholder="Password"
                        mt="md"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        touched={isTouched}
                        dirty={isDirty} />
                    <Group position='right'>
                        <Button right color='dark' type="submit" mt="md" disabled={!isDirty}>
                            Submit
                        </Button>
                    </Group>
                </form>
            </Box>
        </>
    )
}