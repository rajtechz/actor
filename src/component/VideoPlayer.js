import { Text, Box, Center, Container } from '@mantine/core'
import React from 'react'
// import vd1 from "../assets/vd1.mp4"
import vd2 from "../assets/vd2.mp4"
export default function VideoPlayer() {
  return (
    <>
      <Box id='videos' >
        <Container size="90%">
          <Center>
            <Text p={50} sx={(theme) => ({ fontSize: "40px", fontWeight: 700, color: theme.colors.primary[0], })}>Showreel</Text>
          </Center>
        </Container>
        <video width="100%" height="500" controls>
          <source src={vd2} type="video/mp4" />
        </video>
      </Box>
    </>
  )
}
