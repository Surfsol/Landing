icons
https://www.iconfinder.com/search/?q=aws&from=navbar

App.js: <Route path="/techsProject/:tech" component={IconCard}/>
when NavLink is selected on icons. Will open up path /techsProject/:tech and
render IconCard

IconCard.js - <React.Fragment key={e.id}>
<Grid list={e} />
</React.Fragment>

            to return multiple items.

Grid.js href={props.list.github}, do not put "" around, or will not go external

Deploy to Zeit: https://www.youtube.com/watch?v=rjPzoxN2Y6E
add now.json in root
{
"version":2,
"name":"Landing",
"builds":[
{"src": "marketing/package.json", "use": "@now/static-build",
"config": {"distDir":"build"}}],
"routes": [
{ "src": "/(.*)", "dest": "marketing/$1" }
]

}

package.json
"scripts":
"now-build":"react-scripts build"

terminal: yarn global add now

//to delploy
terminal:now

Netlify
Deploy single page app
public/\_redirects
/\* /index.html 200

How to store cookie
How to return res.message when error

stop program running on port
netstat -ano | findstr :3000
taskkill /f /pid 19996

pwa

1. manifest.json

2. index.html
   can add to body

3. src/index.js
   serviceWorker.register();

yarn build

use Local:

Improvements
Does not redirect HTTP traffic to HTTPS

# after initial cache. User will see cached information until they close.

3. workbox cli
   npm install -g workbox-cli

   workbox wizard
   -prompts to set up service worker

   first 4 -enter

4. workbox generateSW workbox-config.js - pops up
   copy, paste and run it.

5. marketing/workbox-config.js
