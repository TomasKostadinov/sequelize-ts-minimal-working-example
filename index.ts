import express from 'express';

import {Sequelize} from 'sequelize-typescript';
import {User} from "./models/user";
import {Organization} from "./models/organization";


export const sequelize = new Sequelize({
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_URL,
    port: 5432,
    dialect: 'postgres',
    models: [User, Organization],
});

sequelize.authenticate().then(
    () => console.log('Connection has been established successfully.')
);

const app = express();
const PORT: string | number = process.env.PORT || 5000;
const router = express.Router();

app.use(router);
app.get('/api/v1', (req, res) => {
    User.findAll({
        include: Organization
    }).then(
        d => res.send(d)
    );
});
app.listen(PORT, () => console.log(`[Server] Starting on http://localhost:${PORT}`));
