module.exports = {
    apps: [
        {
            name: 'StarsPage',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            env: {
                "PORT": 8098,
                "HOST": "0.0.0.0"
            }
        }
    ],
    deploy: {
        production: {
            user: 'root',
            host: process.env.SERVER_IP,
            key: 'deploy.key',
            ref: 'origin/master',
            repo: 'https://github.com/public-awesome/stargaze-pages',
            path: '/root/stargaze-pages',
            'post-deploy':
                'yarn install && yarn build && pm2 reload ecosystem.config.js && pm2 save && git checkout yarn.lock',
        },
    },
}
