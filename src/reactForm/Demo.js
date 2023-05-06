import { useForm } from '@mantine/form';
import { TextInput, Text, Box, PasswordInput, Group, Button, Flex } from '@mantine/core';
import { useState } from 'react';
import { useFormik } from 'formik';

function Demo() {
    const [isDirty, setIsDirty] = useState(false);

    const form = useForm({
        initialValues: {
            name: "",
            email: "",
            password: '',


        },


    });


    return (
        <>
            <Box >




                <Box maw={400} mx="auto" mt="10%" p="10vh" sx={(theme) => ({
                    background: "#D3F9D8",
                    borderRadius: "10px"
                })}>
                    <form
                        onSubmit={form.onSubmit(console.log)}
                    >
                        <TextInput
                            withAsterisk
                            label="Name"
                            placeholder="Name"

                            id="name"
                            name="name"
                            {...form.getInputProps('name')}

                        />



                        <Box>

                            <Text size="sm" span color={form.isTouched('name') ? 'blue' : 'red'}>{form.isTouched('name') ? 'touched' : 'not touched'} </Text>,

                            <Text size="sm" span color={form.isDirty('name') ? 'blue' : 'red'}> {form.isDirty('name') ? 'dirty' : 'not dirty'}</Text>
                        </Box>

                        <TextInput
                            withAsterisk

                            label="Email"
                            placeholder="Email"
                            mt="md"

                            id="email"
                            name="email"
                            {...form.getInputProps('email')}
                        />
                        <Box>

                            <Text size="sm" span color={form.isTouched('email') ? 'blue' : 'red'}>{form.isTouched('email') ? 'touched' : 'not touched'} </Text>,

                            <Text size="sm" span color={form.isDirty('email') ? 'blue' : 'red'}> {form.isDirty('email') ? 'dirty' : 'not dirty'}</Text>
                        </Box>
                        <PasswordInput
                            withAsterisk
                            label="Password"
                            placeholder="Password"
                            mt="md"
                            id="password"
                            name="password"
                            {...form.getInputProps('password')}
                        />
                        <Box>

                            <Text size="sm" span color={form.isTouched('password') ? 'blue' : 'red'}>{form.isTouched('password') ? 'touched' : 'not touched'} </Text>,

                            <Text size="sm" span color={form.isDirty('password') ? 'blue' : 'red'}> {form.isDirty('password') ? 'dirty' : 'not dirty'}</Text>
                        </Box>
                        <Group position='right'>

                            <Button right color='dark' type="submit" mt="md"

                            // disabled={!isDirty}
                            >
                                Submit
                            </Button>
                        </Group>
                    </form>
                </Box>
            </Box>
        </>
    );
}