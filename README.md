## Note


### JSX Prevents Injection Attacks

```
const title = response.potentiallyMalliciousInput
const element = <h1>{title}</h1>
```
This helps prevent XSS (cross-site-scripting) attacks


