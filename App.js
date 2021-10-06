import axios from "axios";

const getData = async (userID) => {
	const user = await axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`).then(res => res.data)
	const posts = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`).then(res => res.data)
	return console.log({user, posts})
}

export default getData;