import axios from 'axios'

const KEY = 'AIzaSyArMFqgbSWxJbYU4_S5drdPZsflVbdKhCo'

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY,
	},
})
