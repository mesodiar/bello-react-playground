## Note

![](https://github.com/mesodiar/bello-react-playground/blob/master/note/React-2.jpg?raw=true)
![](https://github.com/mesodiar/bello-react-playground/blob/master/note/React-3.jpg?raw=true)

### JSX Prevents Injection Attacks

```
const title = response.potentiallyMalliciousInput
const element = <h1>{title}</h1>
```

This helps prevent XSS (cross-site-scripting) attacks
