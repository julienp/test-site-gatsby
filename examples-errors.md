# Trace examples

## V2 Functions using serverless-functions-api

### Throw error

```
curl -vs -H "x-nf-debug-logging: 1" "https://test-site-gatsby.netlify.app/user-error" | jq .
{
  "errorType": "Error",
  "errorMessage": "woops this is a user error",
  "trace": [
    "Error: woops this is a user error",
    "    at Module.user_error_default (file:///var/task/user-error.mjs:12:9)",
    "    at Runtime.handler (file:///var/task/___netlify-bootstrap.mjs:1847:33)",
    "    at Runtime.handleOnceStreaming (file:///var/runtime/index.mjs:1199:38)"
  ]
}
```

### Throw object

```
curl -vs -H "x-nf-debug-logging: 1" "https://test-site-gatsby.netlify.app/user-error-2" | jq .
{
  "errorType": "object",
  "errorMessage": "[object Object]",
  "trace": []
}
```

### Throw string

```
curl -vs -H "x-nf-debug-logging: 1" "https://test-site-gatsby.netlify.app/user-error-3" | jq .
{
  "errorType": "string",
  "errorMessage": "i-am-an-thrown-string",
  "trace": []
}
```

### Throw JSON string

```
curl -vs -H "x-nf-debug-logging: 1" "https://test-site-gatsby.netlify.app/user-error-4" | jq .
{
  "errorType": "string",
  "errorMessage": "{\"banana\":\"yellow\"}",
  "trace": []
}
```

### Thow object

```
curl -vs -H "x-nf-debug-logging: 1" "https://test-site-gatsby.netlify.app/user-error-5" | jq .
{
  "errorType": "object",
  "errorMessage": "[object Object]",
  "trace": []
}
```

### Async Error

```
curl -vs -H "x-nf-debug-logging: 1" "https://test-site-gatsby.netlify.app/user-error-6" | jq .
{
  "errorType": "FetchError",
  "errorMessage": "request to http://bananas-arent-real.example.com/ failed, reason: getaddrinfo ENOTFOUND bananas-arent-real.example.com",
  "trace": [
    "FetchError: request to http://bananas-arent-real.example.com/ failed, reason: getaddrinfo ENOTFOUND bananas-arent-real.example.com",
    "    at ClientRequest.<anonymous> (/var/task/node_modules/node-fetch/lib/index.js:1501:11)",
    "    at ClientRequest.emit (node:events:517:28)",
    "    at Socket.socketErrorListener (node:_http_client:501:9)",
    "    at Socket.emit (node:events:517:28)",
    "    at emitErrorNT (node:internal/streams/destroy:151:8)",
    "    at emitErrorCloseNT (node:internal/streams/destroy:116:3)",
    "    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)"
  ]
}
```

### Throw custom error class

```
curl -vs -H "x-nf-debug-logging: 1" "https://test-site-gatsby.netlify.app/user-error-7" | jq .
{
  "errorType": "MyCoolErrorName",
  "errorMessage": "oh dear",
  "trace": [
    "MyCoolErrorName: oh dear",
    "    at Module.user_error_7_default (file:///var/task/user-error-7.mjs:18:9)",
    "    at Runtime.handler (file:///var/task/___netlify-bootstrap.mjs:1847:33)",
    "    at Runtime.handleOnceStreaming (file:///var/runtime/index.mjs:1199:38)"
  ]
}
```

## Functions using AWS Lambda API

### Throw error

```
curl -vs -H "x-nf-debug-logging: 1" "https://test-site-gatsby.netlify.app/.netlify/functions/user-error-8" | jq .
{
  "errorType": "Error",
  "errorMessage": "lambda API style function has an error!",
  "trace": [
    "Error: lambda API style function has an error!",
    "    at Runtime.handler (/var/task/netlify/functions/user-error-8.js:26:9)",
    "    at Runtime.handleOnceNonStreaming (file:///var/runtime/index.mjs:1173:29)"
  ]
}
```

### Throw error

Function has a dependency bundled

```
curl -vs -H "x-nf-debug-logging: 1" "https://test-site-gatsby.netlify.app/.netlify/functions/user-error-9" | jq .
{
  "errorType": "Error",
  "errorMessage": "lambda API style function has an error! isEven(2)=true",
  "trace": [
    "Error: lambda API style function has an error! isEven(2)=true",
    "    at Runtime.handler (/var/task/netlify/functions/user-error-9.js:36:9)",
    "    at Runtime.handleOnceNonStreaming (file:///var/runtime/index.mjs:1173:29)"
  ]
}
```

### Throw error from within an imported function

```
curl -vs -H "x-nf-debug-logging: 1" "https://test-site-gatsby.netlify.app/.netlify/functions/user-error-10" | jq .
{
  "errorType": "Error",
  "errorMessage": "whoops!",
  "trace": [
    "Error: whoops!",
    "    at whoops (/var/task/src/whoops.js:24:9)",
    "    at Runtime.handler (/var/task/netlify/functions/user-error-10.js:35:39)",
    "    at Runtime.handleOnceNonStreaming (file:///var/runtime/index.mjs:1173:29)"
  ]
}
```

### Function with bad import

This is thrown by the AWS nodejs client code when it imports the module: `Runtime.ImportModuleError`.

```
curl -vs -H "x-nf-debug-logging: 1" "https://test-site-gatsby.netlify.app/.netlify/functions/user-error-11" | jq .
{
  "errorType": "Runtime.ImportModuleError",
  "errorMessage": "Error: Cannot find module 'does-not-exist'\nRequire stack:\n- /var/task/netlify/functions/user-error-11.js\n- /var/task/user-error-11.js\n- /var/runtime/index.mjs",
  "trace": [
    "Runtime.ImportModuleError: Error: Cannot find module 'does-not-exist'",
    "Require stack:",
    "- /var/task/netlify/functions/user-error-11.js",
    "- /var/task/user-error-11.js",
    "- /var/runtime/index.mjs",
    "    at _loadUserApp (file:///var/runtime/index.mjs:1087:17)",
    "    at async UserFunction.js.module.exports.load (file:///var/runtime/index.mjs:1119:21)",
    "    at async start (file:///var/runtime/index.mjs:1282:23)",
    "    at async file:///var/runtime/index.mjs:1288:1"
  ]
}
```
