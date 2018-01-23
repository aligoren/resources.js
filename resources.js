class Resources {
    constructor(...methods) {
        this.methods = methods
        this.urls = {};
        this.url = '';
    }

    make(url) {
        this.url = url;
        this.methods.forEach(m => {
            this.urls[m] = `${url}/${m}`;
        })
    }

    do(type, header) {
        
        let methodIsDeclared = this.methods.includes(type);
        let qs = {};
        let endpoint = header['endpoint'];
        header['method'] = type;

        qs = header.qs;

        if(!methodIsDeclared) {
            throw(`${type} method not found in constructor`);
        }

        if(endpoint) {
            this.url += `/${endpoint}`;
        } else {
            this.url = this.urls[type];
        }

        if(qs) {
            Object.keys(qs).map((q, i) => {
                let sep = (i == 0) ? '?' : '&';
                this.url += `${sep}${q}=${qs[q]}`;
            })
        }

        return fetch(this.url, header)
    }
}

module.exports = Resources;