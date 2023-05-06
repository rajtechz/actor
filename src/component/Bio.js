import { Box, Grid, Navbar, Container, Group, Text, Drawer, Flex, Divider, Anchor, Burger, Center } from '@mantine/core'
import React, { useState } from 'react'
// import p1 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"
// import m1 from "../assets/m1.jpg"
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { BsInstagram } from "react-icons/bs";
import { IoDocumentTextSharp } from "react-icons/io5";

export default function Bio() {
    const [open, setOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false)
    const toggleDrawer = () => {
        setOpen((prev) => !prev);
    };
    const navDrawer = () => {
        setNavOpen((prev) => !prev);
    };
    return (
        <>
            <Box id='#bio'>
                <Box >
                    <Grid p={0} m={0}>
                        <Grid.Col p={0} m={0} md={6}>
                            <Box >
                                <Drawer.Root transitionProps={{ duration: 1000, timingFunction: 'linear' }} opened={open} onClose={toggleDrawer} size="50%" overlayProps={{ opacity: 0.4 }} sx={(theme) => ({ backgroundColor: theme.colors.primary[1], '@media (max-width: 768px)': { display: "none" }, })}                                >
                                    <Drawer.Content p={80} sx={(theme) => ({ backgroundColor: theme.colors.primary[0] })}        >
                                        <Drawer.Header p={0} sx={(theme) => ({ background: theme.colors.primary[0], position: "unset" })}>
                                            <Drawer.Title >
                                                <Text sx={(theme) => ({ fontSize: "35px", fontWeight: "bold", color: theme.colors.primary[1] })}>
                                                    Resume
                                                </Text>
                                            </Drawer.Title>
                                            <Drawer.CloseButton size="lg" style={{ color: "#fff", background: "none", }} />
                                        </Drawer.Header>
                                        <Drawer.Body p={0} mt={40}>
                                            <Grid p={0} m={0}>
                                                <Grid.Col p={0} m={0} md={6}>
                                                    <Box style={{ color: "#fff" }}>
                                                        <Text>Born : 1985</Text>
                                                        <Text>Height : 5”11</Text>
                                                        <Text>Eye Color : Brown</Text>
                                                        <Text>Hair Color : Brown</Text>
                                                        <Text>Languages : English, Hindi, Tamil</Text>
                                                    </Box>
                                                </Grid.Col>
                                                <Grid.Col md={6} >
                                                    <Flex>
                                                        <IoDocumentTextSharp size={30} color='#fff' />
                                                        <Anchor ml="lg" mt="xs" sx={(theme) => ({ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', })}> <Text>Download Resume</Text></Anchor>
                                                    </Flex>
                                                </Grid.Col>
                                            </Grid>
                                            <Divider size="sm" mt={50} />
                                            <Grid >
                                                <Grid.Col md={6}>
                                                    <Drawer.Title mt={50} >
                                                        <Text sx={(theme) => ({ fontSize: "35px", color: theme.colors.primary[1] })}>
                                                            Special Skills
                                                        </Text>
                                                    </Drawer.Title>
                                                    <Box style={{ color: "#fff" }} mt={50}>
                                                        <Text>Physical Comedy</Text>
                                                        <Text>Singing</Text>
                                                        <Text>Swimming</Text>
                                                        <Text>Football</Text>
                                                    </Box>
                                                </Grid.Col>
                                                <Grid.Col md={6} >
                                                    <Drawer.Title mt={50} >
                                                        <Text sx={(theme) => ({ fontSize: "35px", color: theme.colors.primary[1] })}>
                                                            Theater
                                                        </Text>
                                                    </Drawer.Title>
                                                    <Box style={{ color: "#fff" }} mt={50}>
                                                        <Text>2035, Play / Director / Theater / Role</Text>
                                                        <Text>2035, Play / Director / Theater / Role</Text>
                                                    </Box>
                                                </Grid.Col>
                                                <Grid.Col md={6}>
                                                    <Drawer.Title mt={50} >
                                                        <Text sx={(theme) => ({ fontSize: "35px", color: theme.colors.primary[1] })}>
                                                            Films
                                                        </Text>
                                                    </Drawer.Title>
                                                    <Box style={{ color: "#fff" }} mt={50}>
                                                        <Text>2035, Title / Director / Role</Text>
                                                        <Text>2035, Title / Director / Role</Text>
                                                        <Text>2035, Title / Director / Role</Text>
                                                    </Box>
                                                </Grid.Col>
                                                <Grid.Col md={6} >
                                                    <Drawer.Title mt={50} >
                                                        <Text sx={(theme) => ({ fontSize: "35px", color: theme.colors.primary[1] })}>
                                                            Education & Training
                                                        </Text>
                                                    </Drawer.Title>
                                                    <Box style={{ color: "#fff" }} mt={50}>
                                                        <Text>Institution / Workshop Name / Instructor</Text>
                                                        <Text>Institution / Workshop Name / Instructor</Text>
                                                        <Text>Institution / Workshop Name / Instructor</Text>
                                                    </Box>
                                                </Grid.Col> <Grid.Col md={6}>
                                                    <Drawer.Title mt={50} >
                                                        <Text sx={(theme) => ({ fontSize: "35px", color: theme.colors.primary[1] })}>
                                                            TV
                                                        </Text>
                                                    </Drawer.Title>
                                                    <Box style={{ color: "#fff" }} mt={50}>
                                                        <Text>2035, Title / Director / Production House / Role</Text>
                                                        <Text>2035, Title / Director / Production House / Role</Text>
                                                    </Box>
                                                </Grid.Col>
                                                <Grid.Col md={6} >
                                                    <Drawer.Title mt={50} >
                                                        <Text sx={(theme) => ({ fontSize: "35px", color: theme.colors.primary[1] })}>
                                                            Awards
                                                        </Text>
                                                    </Drawer.Title>
                                                    <Box style={{ color: "#fff" }} mt={50}>
                                                        <Text>2035, Play / Director / Theater / Role</Text>
                                                        <Text>2035, Play / Director / Theater / Role</Text>
                                                    </Box>
                                                </Grid.Col>
                                            </Grid>
                                        </Drawer.Body>
                                    </Drawer.Content>
                                </Drawer.Root>
                            </Box>
                            <Box >
                                <Drawer.Root transitionProps={{ duration: 1000, timingFunction: 'linear' }} opened={open} onClose={toggleDrawer} size="100%" zIndex={200} overlayProps={{ opacity: 0.4 }} sx={(theme) => ({ backgroundColor: theme.colors.primary[1], display: "none", '@media (max-width: 768px)': { display: "block" }, })}      >
                                    <Drawer.Content p={80} sx={(theme) => ({ backgroundColor: theme.colors.primary[0] })}>
                                        <Drawer.Header p={0} sx={(theme) => ({ background: theme.colors.primary[0], position: "unset" })}>
                                            <Drawer.Title >
                                                <Text sx={(theme) => ({ fontSize: "35px", fontWeight: "bold", color: theme.colors.primary[1] })}>
                                                    Resume
                                                </Text>
                                            </Drawer.Title>
                                            <Drawer.CloseButton size="lg" style={{ color: "#fff", background: "none", }} />
                                        </Drawer.Header>
                                        <Drawer.Body p={0} mt={40}>
                                            <Grid>
                                                <Grid.Col md={6}>
                                                    <Box style={{ color: "#fff" }}>
                                                        <Text>Born : 1985</Text>
                                                        <Text>Height : 5”11</Text>
                                                        <Text>Eye Color : Brown</Text>
                                                        <Text>Hair Color : Brown</Text>
                                                        <Text>Languages : English, Hindi, Tamil</Text>
                                                    </Box>
                                                </Grid.Col>
                                                <Grid.Col md={6} >
                                                    <Flex >
                                                        <IoDocumentTextSharp size={30} color='#fff' />
                                                        <Anchor ml="lg" mt="xs">  <Text>Download Resume</Text></Anchor>
                                                    </Flex>
                                                </Grid.Col>
                                            </Grid>
                                            <Divider size="sm" mt={50} />
                                            <Grid >
                                                <Grid.Col md={6}>
                                                    <Drawer.Title mt={50} >
                                                        <Text sx={(theme) => ({ fontSize: "35px", color: theme.colors.primary[1] })}>
                                                            Special Skills
                                                        </Text>
                                                    </Drawer.Title>
                                                    <Box style={{ color: "#fff" }} mt={50}>
                                                        <Text>Physical Comedy</Text>
                                                        <Text>Singing</Text>
                                                        <Text>Swimming</Text>
                                                        <Text>Football</Text>
                                                    </Box>
                                                </Grid.Col>
                                                <Grid.Col md={6} >
                                                    <Drawer.Title mt={50} >
                                                        <Text sx={(theme) => ({ fontSize: "35px", color: theme.colors.primary[1] })}>
                                                            Theater
                                                        </Text>
                                                    </Drawer.Title>
                                                    <Box style={{ color: "#fff" }} mt={50}>
                                                        <Text>2035, Play / Director / Theater / Role</Text>
                                                        <Text>2035, Play / Director / Theater / Role</Text>
                                                    </Box>
                                                </Grid.Col>
                                                <Grid.Col md={6}>
                                                    <Drawer.Title mt={50} >
                                                        <Text sx={(theme) => ({ fontSize: "35px", color: theme.colors.primary[1] })}>
                                                            Films
                                                        </Text>
                                                    </Drawer.Title>
                                                    <Box style={{ color: "#fff" }} mt={50}>
                                                        <Text>2035, Title / Director / Role
                                                        </Text>
                                                        <Text>2035, Title / Director / Role
                                                        </Text>
                                                        <Text>2035, Title / Director / Role
                                                        </Text>
                                                    </Box>
                                                </Grid.Col>
                                                <Grid.Col md={6} >
                                                    <Drawer.Title mt={50} >
                                                        <Text sx={(theme) => ({ fontSize: "35px", color: theme.colors.primary[1] })}>
                                                            Education & Training
                                                        </Text>
                                                    </Drawer.Title>
                                                    <Box style={{ color: "#fff" }} mt={50}>
                                                        <Text>Institution / Workshop Name / Instructor</Text>
                                                        <Text>Institution / Workshop Name / Instructor</Text>
                                                        <Text>Institution / Workshop Name / Instructor</Text>
                                                    </Box>
                                                </Grid.Col>
                                                <Grid.Col md={6}>
                                                    <Drawer.Title mt={50} >
                                                        <Text sx={(theme) => ({ fontSize: "35px", color: theme.colors.primary[1] })}>
                                                            TV
                                                        </Text>
                                                    </Drawer.Title>
                                                    <Box style={{ color: "#fff" }} mt={50}>
                                                        <Text>2035, Title / Director / Production House / Role</Text>
                                                        <Text>2035, Title / Director / Production House / Role</Text>
                                                    </Box>
                                                </Grid.Col>
                                                <Grid.Col md={6} >
                                                    <Drawer.Title mt={50} >
                                                        <Text sx={(theme) => ({ fontSize: "35px", color: theme.colors.primary[1] })}>
                                                            Awards
                                                        </Text>
                                                    </Drawer.Title>
                                                    <Box style={{ color: "#fff" }} mt={50}>
                                                        <Text>2035, Play / Director / Theater / Role</Text>
                                                        <Text>2035, Play / Director / Theater / Role</Text>
                                                    </Box>
                                                </Grid.Col>
                                            </Grid>
                                        </Drawer.Body>
                                    </Drawer.Content>
                                </Drawer.Root>
                            </Box>
                            <Navbar p={0} m={0} sx={(theme) => ({ background: theme.colors.primary[0], height: "100vh" })}>
                                <Navbar.Section>
                                    <Container size="90%" >
                                        <Flex sx={(theme) => ({ justifyContent: "space-between" })}>
                                            <Box pt={30} pb="sm">
                                                <Text sx={(theme) => ({ fontSize: "25px", color: theme.colors.primary[1], })}>Venkatesh Prabhu    </Text>
                                            </Box>
                                            <Box pt={30} pb="sm" sx={(theme) => ({ display: "none", "@media(max-width :768px)": { display: "block" } })}>
                                                <Burger opened={navOpen} onClick={() => setNavOpen((o) => !o)} color="#fff" zIndex={100} />
                                            </Box>
                                        </Flex>
                                        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <Box >
                                                <Drawer.Root position="left" transitionProps={{ duration: 500, transition: 'rotate-right', timingFunction: 'linear' }} opened={navOpen} onClose={navDrawer} size="100%" overlayProps={{ opacity: 0.4 }} sx={(theme) => ({ display: "none", backgroundColor: theme.colors.primary[1], '@media (max-width: 768px)': { display: "block" }, })}                 >
                                                    <Drawer.Content p={20} sx={(theme) => ({ backgroundColor: theme.colors.primary[0] })}                                                    >
                                                        <Drawer.Header p={0} sx={(theme) => ({ background: theme.colors.primary[0], position: "unset" })}>
                                                            <Drawer.CloseButton position="left" size="lg" style={{ color: "#fff", background: "none", }} />
                                                        </Drawer.Header>
                                                        <Center >
                                                            <Drawer.Body pt="20%" mt={40} >
                                                                <Box >
                                                                    <Box mb="xs" sx={(theme) => ({ textAlign: "center", fontSize: "20px", })}>
                                                                        <Anchor opened={open} onClick={() => setOpen((o) => !o)} sx={(theme) => ({ color: "#fff", "&:hover": { textDecoration: "none", color: theme.colors.primary[1] } })}>Bio </Anchor>
                                                                    </Box>
                                                                    <Divider mb="md" />
                                                                    <Box mb="xs" sx={(theme) => ({ textAlign: "center", fontSize: "20px", })}>
                                                                        <Anchor href="#videos" sx={(theme) => ({ color: "#fff", "&:hover": { textDecoration: "none", color: theme.colors.primary[1] } })}>Video</Anchor>
                                                                    </Box>
                                                                    <Divider mb="md" />
                                                                    <Box mb="xs" sx={(theme) => ({ textAlign: "center", fontSize: "20px", })}>
                                                                        <Anchor href="#photos" sx={(theme) => ({ color: "#fff", "&:hover": { textDecoration: "none", color: theme.colors.primary[1] } })}>Photos</Anchor>
                                                                    </Box>
                                                                    <Divider mb="md" />
                                                                    <Box sx={(theme) => ({ textAlign: "center", fontSize: "20px", })}>
                                                                        <Anchor href="#contact" sx={(theme) => ({ color: "#fff", "&:hover": { textDecoration: "none", color: theme.colors.primary[1] } })}>Contact</Anchor>
                                                                    </Box>
                                                                </Box>
                                                            </Drawer.Body>
                                                        </Center>
                                                    </Drawer.Content>
                                                </Drawer.Root>
                                            </Box>
                                        </Box>
                                        <Group position='center' sx={(theme) => ({ background: theme.colors.primary[1], display: "none", "@media(max-width :768px)": { display: "block" } })}        >
                                            <Flex sx={(theme) => ({ textAlign: "center", alignItems: "center" })}>
                                                <Box miw="25%">
                                                    <TiSocialFacebook size={30} color='black' />
                                                </Box>
                                                <Box miw="25%">
                                                    <BsInstagram size={20} color='black' />
                                                </Box>
                                                <Box miw="25%">
                                                    <TiSocialYoutube size={20} color='black' />
                                                </Box>
                                                <Box miw="25%">
                                                    <TiSocialTwitter size={30} color='black' />
                                                </Box>
                                            </Flex>
                                        </Group>
                                        <Flex sx={(theme) => ({ "@media(max-width:768px)": { display: "none" } })} >
                                            <Anchor pr={30} opened={open} onClick={() => setOpen((o) => !o)} sx={(theme) => ({ color: "#fff", "&:hover": { textDecoration: "none", color: theme.colors.primary[1] } })}>Bio </Anchor>
                                            <Anchor pr={30} href="#videos" sx={(theme) => ({ color: "#fff", "&:hover": { textDecoration: "none", color: theme.colors.primary[1] } })}>Video</Anchor>
                                            <Anchor pr={30} href="#photos" sx={(theme) => ({ color: "#fff", "&:hover": { textDecoration: "none", color: theme.colors.primary[1] } })}>Photos</Anchor>
                                            <Anchor href="#contact" sx={(theme) => ({ color: "#fff", "&:hover": { textDecoration: "none", color: theme.colors.primary[1] } })}>Contact</Anchor>
                                        </Flex>
                                    </Container>
                                </Navbar.Section>
                                <Box sx={(theme) => ({ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', })}>
                                    <Box>
                                        <Box>
                                            <Text sx={(theme) => ({ fontSize: "48px", color: theme.colors.primary[1], "@media(max-width:768px)": { fontSize: "30px" } })}>Hey I'am</Text>
                                            <Text sx={(theme) => ({ fontSize: "80px", color: theme.colors.primary[2], "@media(max-width:768px)": { fontSize: "40px" } })}>Venkatesh Prabhu</Text>
                                            <Text color='#fff'>Actor / Performer / Model</Text>
                                        </Box>
                                    </Box>
                                </Box>
                            </Navbar>
                        </Grid.Col>
                        <Grid.Col p={0} m={0} md={6}>
                            <Box sx={(theme) => ({ height: "100vh", backgroundRepeat: "no-repeat", backgroundImage: `url(${p3})`, backgroundSize: "100% 100%", })}>
                                <Group position='center' sx={(theme) => ({ background: theme.colors.primary[1], height: "161px", width: "46px", position: "fixed", bottom: "50%", color: "white", right: "0%", "@media(max-width :768px)": { display: "none" } })}>
                                    <TiSocialFacebook size={30} color='black' />
                                    <BsInstagram size={20} color='black' />
                                    <TiSocialYoutube size={20} color='black' />
                                    <TiSocialTwitter size={30} color='black' />
                                </Group>
                            </Box>
                        </Grid.Col>
                    </Grid>
                </Box>


                <Box p={50} sx={(theme) => ({
                    background: "whitesmoke"
                })}>
                    <Container size="90%">

                        <Center>
                            <Text sx={(theme) => ({ fontSize: "40px", fontWeight: 700, color: theme.colors.primary[0], })}>About Me</Text>

                        </Center>
                        <Center>
                            <Box mt={50} maw={1000}>


                                <Text style={{ textAlign: 'justify' }}  > I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

                                    Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.                                This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.</Text>
                            </Box>

                        </Center>
                        <Center>
                            <Box mb="xs" p="xs" sx={(theme) => ({ textAlign: "center", background:theme.colors.primary[1],"&:hover":{background:theme.colors.primary[0],color:theme.colors.primary[1]}})}>

                                <Anchor opened={open} onClick={() => setOpen((o) => !o)} sx={(theme) => ({  "&:hover": { textDecoration: "none", color:theme.colors.primary[1] } })}> View Full Resume</Anchor>
                            </Box>
                        </Center>
                    </Container>
                </Box>
            </Box >
        </>
    )
}
