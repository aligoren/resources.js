import Resources from "./resources"

const resources = new Resources('post', 'put', 'delete', 'get')

resources.make('https://httpbin.org')

resources.do('post', {
    qs: {
        a: 1,
        b: 2
    },
    body: JSON.stringify({
        q: 1,
        qc: 2
    })
}).then(resp => resp.json())
    .then(obj => {
        console.log(obj)
    })