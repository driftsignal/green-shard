## green-shard

pull recent blocks to create GraphQL endpoints


## toc

- [install]
- [run]
  - [docker]
- [code style]
- [todo]
- [done]


## install

    npm install

## run

   # see docker below if not already setup
   # if you have global nodemon
   nodemon
   # else
   ./node_modules/nodemon/bin/nodemon.js

#### docker

    # start docker service on archlinux
    systemctl start docker
    docker-compose up



## code style

using [standard js].

## todo

- figure out hash and action count
- add button for raw response

## done

- use async / await to pull latest block
- make graphql endpoint

[install]:#install

[run]:#run
  [docker]:#docker

[code style]:#code-style

[todo]:#todo
[done]:#done


[standard js]: https://standardjs.com/
