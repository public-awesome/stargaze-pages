module.exports = {
    apps: [
        {
            name: 'StarsPage',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ]
}
