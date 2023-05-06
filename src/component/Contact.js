import { Box, Grid, Text, Image, Footer, Container, Divider, Center, List, Group, Flex } from '@mantine/core'
import React from 'react'
import m3 from "../assets/m3.png"
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti'
import { BsInstagram } from 'react-icons/bs'
export default function Contact() {
  return (
    <>
      <Box id='contact'  >

        <Box pt={50} >
          <Grid p={0} m={0} sx={(theme) => ({
            background: theme.colors.primary[0]
          })}>
            <Grid.Col p={0} m={0} md={6}>
              <Box pt="lg">

                <Image src={m3} alt="" />
              </Box>


            </Grid.Col>
            <Grid.Col p={0} m={0} md={6}>
              <Center>
                <Box p={100} sx={(theme) => ({ textAlign: "justify", color: "#fff" })}>

                  <Text sx={(theme) => ({ fontSize: "40px", fontWeight: 700, color: theme.colors.primary[1] })}>

                    Contact
                  </Text>



                  <Text sx={(theme) => ({ fontSize: "25px", })}>
                    Representation
                  </Text>

                  <Box mt="lg"><Text><b>Manager</b></Text>
                    <List spacing="2px" listStyleType='none' sx={(theme) => ({ color: "#fff" })}>
                      <List.Item >Bruce Robertson </List.Item>
                      <List.Item>Email - info@mysite.com</List.Item>
                      <List.Item>Tel - 123-456-7890</List.Item>
                    </List>

                  </Box>

                  <Box mt="lg"><Text><b>Commercial Agent</b></Text>
                    <List spacing="2px" listStyleType='none' sx={(theme) => ({ color: "#fff" })}>
                      <List.Item>Magnum - Steven Macfee</List.Item>
                      <List.Item>Email - info@mysite.com</List.Item>
                      <List.Item>Tel - 123-456-7890</List.Item>
                    </List>

                  </Box>
                  <Box mt="lg"><Text><b>SF Agent</b></Text>
                    <List spacing="2px" listStyleType='none' sx={(theme) => ({ color: "#fff" })}   >
                      <List.Item>Pinnacle - Nathan Kelly</List.Item>
                      <List.Item>Email - info@mysite.com</List.Item>
                      <List.Item>Tel - 123-456-7890</List.Item>
                    </List>
                    <Group mt="lg" >
                      <Flex sx={(theme) => ({ alignItems: "center", gap: "20px" })}>
                        <Box >
                          <TiSocialFacebook size={30} color='#fff' />
                        </Box>
                        <Box >
                          <BsInstagram size={20} color='#fff' />
                        </Box>
                        <Box >
                          <TiSocialYoutube size={20} color='#fff' />
                        </Box>
                        <Box >
                          <TiSocialTwitter size={30} color='#fff' />
                        </Box>
                      </Flex>
                    </Group>
                  </Box>


                </Box>
              </Center>
            </Grid.Col>
          </Grid>
        </Box>
        <Footer style={{ backgroundColor: '#f5f5f5', padding: '1rem' }}>
          <Container>
            <Center>
              <Text color="black" size="sm">© 2023 KD BaBa. All rights reserved</Text>
            </Center>
          </Container>
        </Footer>

      </Box>

    </>
  )
}
