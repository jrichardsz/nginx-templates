# Basic http domain andd subdmain

This configurations show us how use a domain instead ip:port. 

Also this configurations works for subdomains.

# Prerequisites

- Nodejs - Fast for this example , but for you could be any technology. You just need to know what port use.

# Steps

- npm install
- node app.js
- Check is all is working:

![localhost](https://drive.google.com/uc?id=1Ntq2D3viYjZCgNIC2yplZFeAo_VS5X_i) 

- Add the following lines to your /etc/hosts. This will help us to use domains without  enterprise web hosting company register.

```
127.0.0.1 app.com
```

- Create a file in /etc/nginx/conf.d called **app.com.conf** or whatever you want but with .conf


```
server {
	listen 80;
	server_name app.com;
	
	location / {
		proxy_pass http://localhost:3000/;
	}
}
```

- Restart the nginx 

```
service nginx restart
```

- And now, you could use a domain instead ip:port

![localhost](https://drive.google.com/uc?id=1T0riZesABBgo5tpSB3reHG9OQOJMH7zw) 
