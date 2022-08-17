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

import CONFIG from "../config/config.json";
import { postData } from "../services/HttpService";
import { storeData_Local, storeJSON_Local } from "../services/StorageService";


function handleSignIn()
{
	const toast = useToast();

	const emailElem = document.getElementById("email");
	const email = emailElem.value;
	const passwordElem = document.getElementById("password");
	const password = passwordElem.value;

	//	Cheking Email Format using Regex
	if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) )
	{
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
	const signInUrl = `${CONFIG.BASE_URL.AUTH}/api/auth/org/signin`;
	const payload = {
		email: email,
		password: password
	}

	postData(signInUrl, payload)
	.then((data) => {
		console.log("Response data:", data);
		storeData_Local("token", data.token);
	});
}

function Home()
{
	useEffect(() => {
		// if ('serviceWorker' in window.navigator) {
		// 	navigator.serviceWorker.register("./js/sw.js");
		// }
		// else {
		// 	toast({
		// 		title: "This browser doesn't support ServiceWorkers!",
		// 		duration: 10000,
		// 		isClosable: true,
		// 		status: "error"
		// 	});
		// }
	}, []);

	return (
		<Container>
			<Stack>
				<Box height={'200px'}></Box>
				<Heading fontSize={'4xl'}>
					New To Kiosk?
				</Heading>
				<Text>
					Create an account <a>here</a>
				</Text>
				<Input placeholder='Email or Username' size='lg' id="email" />
				<Input placeholder='Password' size='lg' id="password" />
				<ButtonGroup>
					<Button colorScheme='green' size={'md'} onClick={handleSignIn}>Log In</Button>
				</ButtonGroup>
			</Stack>
		</Container>
	);
}

export default Home;