# Create server example

```js
const { Client } = require('quickpterodactyl')
const client = new client('abc.com', 'api_key')
 client.server_create({
                name: 'lol',
                user: 1,
                egg: 1,
                nest: 1,
                startup: 'node index.js',
                docker_image: 'la la la',
                environment: {},
                limits: {
                    memory: 1,
                    swap: 1,
                    disk: 1,
                    io: 1,
                    cpu: 1
                },
                feature_limits: {
                    databases: 1,
                    allocations: 1,
                    backups: 1,
                },
                deploy: {
                    locations: [],
                    dedicated_ip: true,
                    port_range: []
                },
            })
```