# Notes on setting up a Request listener

## Basic implementation

/collect (Coveo) are Fetch calls, not xhr.

Minimal interceptor :

```javascript
realFetch = window.fetch;
window.fetch = function () {
  console.log("FG:", arguments);
  return realFetch.apply(this, arguments);
};
```

## Related projects

Can get inspired by:

- https://github.com/wheresrhys/fetch-mock
- https://github.com/cortexmg/nightwatch-xhr/ (to help set up our fecth interceptor within nightwatch as assertions, commands, client)

```
docker-compose -f ./docker/thegym-demo-api/docker-compose.train.yml build
```
