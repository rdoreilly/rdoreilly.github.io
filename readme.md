This is the personal/professional profile of Ruairí O'Reilly - any queries direct them to ruairi.oreilly@mtu.ie

Deployment: As pug is used to generate the data/html, it then has to have the dist pushed to gh-pages.


There is a deploy script in package.json: 
  "scripts": {
    "deploy": "gh-pages -d src/dist"
  }

Run the Deploy Command:

npm run deploy