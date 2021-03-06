import axios from 'axios'

const apiClientMulti = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'multipart/form-data',
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Origin': '*',
  },
})
const apiClientJson = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: true, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getBlog(id) {
    return apiClientMulti.get('/blog/' + id)
  },
  createUser(userData) {
    return apiClientMulti.post('/create-user', userData)
  },

  checkCredentials(userData) {
    return apiClientJson.post('/signin/', userData)
  },

  logout() {
    return apiClientJson.get('/logout')
  },

  createBlog(blogData) {
    return apiClientMulti.post('/create-blog', blogData)
  },
}

export const getBlogs = () => {
  return apiClientJson.get('/blogs')
}

export const createComment = commentData => {
  return apiClientJson.post('/create-comment', commentData)
}

export const editProfile = profileData => {
  return apiClientMulti.post('/edit-profile', profileData)
}

export const adminUserSearch = searchData => {
  return apiClientJson.post('/admin-search', searchData)
}

export const disable = disableData => {
  return apiClientJson.post('/disable-or-enable', disableData)
}
