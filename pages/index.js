import {
	Container,
	Stack,
	Input,
	Button,
	ButtonGroup,
	Heading,
	Box,
	Text,
	useToast
} from "@chakra-ui/react";
import { useEffect, useState } from "react";


function Home() {

	const toast = useToast();

	function handleSignUp()
	{
		const emailElem = document.getElementById("email");
		const passwordElem = document.getElementById("password");

		const email = emailElem.value;
		const password = passwordElem.value;

		//	Cheking Email Format using Regex
		if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ) {
			emailElem.value = "";
			passwordElem.value = "";

			toast({
				title: "Enter a valid email!",
				description: "The email you have entered doesn't match with any email format. Please check it again and enter.",
				status: "error",
				duration: 8000,
				isClosable: true,
			});
			return;
		}

		//	Now perform the sign up and store the creds in cookies

		console.log(email, password);
	}

	//	Why tf are we using useEffect? Because it only runs on Client Side
	useEffect(() => {
		if ('serviceWorker' in window.navigator) {
			navigator.serviceWorker.register("./js/sw.js");
		}
		else {
			toast({
				title: "This browser doesn't support ServiceWorkers!",
				duration: 10000,
				isClosable: true,
				status: "error"
			});
		}
	}, []);

	return (
		<Container>
			<Stack>
				<Box height={'200px'}></Box>
				<Heading fontSize={'4xl'}>
					New To Kiosk?
				</Heading>
				<Text>
					Sign up using your email and password
				</Text>
				<Input placeholder='Email or Username' size='lg' id="email" />
				<Input placeholder='Password' size='lg' id="password" />
				<ButtonGroup>
					<Button colorScheme='green' size={'md'}>Log In</Button>
					<Button colorScheme='blue' size={'md'} onClick={handleSignUp}>Sign Up</Button>
				</ButtonGroup>
			</Stack>
		</Container>
	);
}

export default Home;