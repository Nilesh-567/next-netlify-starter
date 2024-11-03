// pages/api/auth/callback.js
import { google } from 'googleapis';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    const code = req.query.code;

    const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_REDIRECT_URI
    );

    try {
        const { tokens } = await oauth2Client.getToken(code);
        oauth2Client.setCredentials(tokens);

        const oauth2 = google.oauth2({ auth: oauth2Client, version: 'v2' });
        const { data: userInfo } = await oauth2.userinfo.get();

        const token = jwt.sign(userInfo, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.setHeader('Set-Cookie', `token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict`);
        res.redirect('/');
    } catch (error) {
        console.error('Error during Google OAuth:', error);
        res.status(500).send('Authentication failed');
    }
}
