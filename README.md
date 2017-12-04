## Test Caching in browsers
- Images on the left use max age and subsequent requests don't reach the server
- Images on the right use etags, subsequent request send `If-None-Match` header to server which responds with 304

webpagest.org results [link](https://www.webpagetest.org/result/171201_09_1fab54c413f6dfc87608b5ce07e57dc3/)


```
npm run start
```

open [localhost:3000](localhost:3000)
