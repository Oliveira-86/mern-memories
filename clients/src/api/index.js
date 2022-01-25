import axios from  'axios';

const BASE_URL = "http://localhost:5000/api/posts";

export const fetchPosts = () => axios.get(BASE_URL);
export const createPost = (newPost) => axios.post(BASE_URL, newPost); 