import { Box, Center, Container, Grid, Text, Image } from '@mantine/core'
import React from 'react'
import c1 from "../assets/c1.jpg"
import c2 from "../assets/c2.jpg"
import c3 from "../assets/c3.jpg"
// import c4 from "../assets/c4.jpg"
import c5 from "../assets/c5.jpg"
import c6 from "../assets/c6.jpg"
import c7 from "../assets/c7.jpg"
// import p2 from "../assets/p2.jpg"
export default function Gallery() {
  return (
    <>
      <Box id='photos' >
        <Container size="90%">
          <Center>
            <Text p={50} sx={(theme) => ({ fontSize: "40px", fontWeight: 700, color: theme.colors.primary[0], })}>Photos</Text>
          </Center>

          <Grid>
            <Grid.Col md={4}>
              <Box >

                <Image src={c1} alt="" />
              </Box>
            </Grid.Col>
            <Grid.Col md={4}>
              <Box >

                <Image src={c2} alt="" />
              </Box>
            </Grid.Col> <Grid.Col md={4}>
              <Box >

                <Image src={c3} alt="" />
              </Box>
            </Grid.Col> <Grid.Col md={4}>
              <Box >

                <Image src={c7} alt="" />
              </Box>
            </Grid.Col> <Grid.Col md={4}>
              <Box >

                <Image src={c5} alt="" />
              </Box>
            </Grid.Col><Grid.Col md={4}>
              <Box >

                <Image src={c6} alt="" />
              </Box>
            </Grid.Col>
          </Grid>


        </Container>


      </Box>
    </>
  )
}
