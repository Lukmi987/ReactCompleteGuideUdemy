import { useQuery } from 'react-query'
import axios from 'axios'

const fetchUserList = (key, postId) => {
     axios.get('https://react-hooks-update-4307d.firebaseio.com/ingredients.json?auth=' + userAuthInfo.idToken);
}

export default function useFetchUserList (){

}

export const fetchPost = (key, postId) =>
    axios.get(`/api/posts/${postId}`).then((res) => res.data)

export default function usePost(postId) {
    return useQuery(postId && ['post', postId], fetchPost)
}