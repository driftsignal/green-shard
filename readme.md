## green-shard

pull recent blocks to create a GraphQL endpoint


## toc

- [install]
- [run]
  - [docker]
  - [graphql]
- [code style]
- [todo]
- [done]


## install

    git clone git@github.com:driftsignal/green-shard.git
    cd green-shared/
    npm install
    cp env-template .env
    # edit values to suit your environment
    vi .env
    node init-db.js

## run

    # see docker below if not already setup
    # for just looking
    node server
    # for dev
    # if you have global nodemon
    nodemon
    # or else
    ./node_modules/nodemon/bin/nodemon.js

### docker

    # start docker service on archlinux
    systemctl start docker
    docker-compose up


### graphql

graphql can be found at localhost:4000/graphql

the endpoint created is:

    {
      last
    }


## code style

using [standard js].

## todo

- figure out hash and action count
- save the raw output to postgress
- find more reliable way to test html
- filter sql queries
- deploy to heroku?
- look for caching?

## done

- use async / await to pull latest block
- make graphql endpoint
- add button for raw response
- req.params instead of param

[install]:#install

[run]:#run
  [docker]:#docker
  [graphql]:#graphql

[code style]:#code-style

[todo]:#todo
[done]:#done


[standard js]: https://standardjs.com/
