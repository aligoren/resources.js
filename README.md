# resources.js

resources.js is a simple resource generator on browser for restful endpoints.

# Usage

You must declare http verbs

Parameters: ['...verbs']

```javascript
import Resources from "./resources"

const resources = new Resources('post', 'put', 'delete', 'get')

```

After that you must declare resource url:

Parameters: ['url']

```javascript
resources.make('https://httpbin.org')
```

## Do HTTP Request

HTTP requests are will made by fetch method.

Default endpoints will be like this:

```text
https://httpbin.org/post
https://httpbin.org/put
https://httpbin.org/delete
https://httpbin.org/get
```

If you want to change endpoint url you should set value for `endpoint`.

Parameters: ['type', 'header object']

The type parameter must be declared in the constructor. 

header object optional parameters: {
    endpoint: 'your_new_endpoint',
    qs: {
        your_query_string: 'value'
    }
}

Also you can set body parameter because this object will use instead of fetch method's header object.

```javascript
resources.do('post', {
    endpoint: 'optional_endpoint', // https://httpbin.org/optional_endpoint
    qs: { 
        a: 1,
        b: 2 // https://httpbin.org/optional_endpoint?a=1&b=2
    },
    body: JSON.stringify({
        q: 1,
        qc: 2
    })
}).then(resp => resp.json())
    .then(obj => {
        console.log(obj)
    })
```