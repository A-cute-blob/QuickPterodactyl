# Create user example

```js
const { User } = require('quickpterodactyl')
const user = new User('abc.com', 'api_key')
user.create({ username: 'abc', email: 'abc@gmail.com', password: 'abc', first_name: 'bla bla', last_name: 'bla-bla', root_admin: false, language: 'en' })

```