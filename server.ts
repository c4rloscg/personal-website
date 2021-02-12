const next = require('next');
import routes from './routes';
import { NowRequest, NowResponse } from '@now/node';
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const express = require('express');
const path = require('path');
const server = express();
const fetchData = require('isomorphic-unfetch');
const moment = require('moment');

app.prepare()
    .then(() => {
        type ServerTypes = {
            req: NowRequest;
            res: NowResponse;
            route: any;
            query: any;
        };
        const handler = routes.getRequestHandler(app, ({ req, res, route, query }: ServerTypes) => {
            app.render(req, res, route.page, query);
        });

        const bodyParser = require('body-parser');
        const cors = require('cors');
        const compression = require('compression');

        server
            .use(handler)
            .use(compression)
            .use(cors)
            .use(bodyParser.json())
            .listen();
    })
    .catch((ex: any) => {
        console.error(ex.stack);
        process.exit(1);
    });

function writeFile(data: any) {
    try {
        const fs = require('fs');
        fs.writeFile(path.resolve(`${__dirname}/static/${data.filename}`), data.text, (error: any) => {
            console.log(error);
        });
    } catch (error) {
        console.log('error writefile: ' + data);
    }
}

function structureSitemapUrls(data: any) {
    if (!data) {
        return '';
    }
    let urlsetText = '';
    for (let i in data) {
        const obj = data[i];
        urlsetText += `<url><loc>${getPostUrlPath(obj)}</loc><lastmod>${moment(obj.post_modified).format(
            'YYYY-MM-DD'
        )}</lastmod></url>`;
    }
    return urlsetText;
}
function getPostUrlPath(post: any) {
    if (!post) {
        return '';
    }
    return `https://whoisfelix.com/${post.type}/${post.slug}/`;
}
