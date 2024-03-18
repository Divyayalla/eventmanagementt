
import LoginPostData from '../controllers/postData.js';
import express from 'express';
const Router = express.Router();
Router.post('/api/login-user',LoginPostData)
export default Router;
