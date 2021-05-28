# Nextjs crash course note
[Travesy Media's Next.js Crash Course 2021](https://www.youtube.com/watch?v=mTz0GXj8NN0)
Thanks a lot! The basic usage of nextjs can be learned explicitly. 


```
npx create-next-app <name>
npm run dev
```

/public is directory connected. so you can see http://localhost:3000/favicon.ico.

pages system is almost same to gatsby. js file made in pages folder 

### style jsx!
```jsx

export default () => (
  <div>
    <p>only this paragraph will get the style :)</p>

    { /* you can include <Component />s here that include
         other <p>s that don't get unexpected styles! */ }

    <style jsx>{`
      p {
        color: red;
      }
    `}</style>
  </div>
)
```


### custom document
Only rendering in server
_document.js file needs development server to restart and re-rendering by every changes.
[official document](https://nextjs.org/docs/advanced-features/custom-document)


### fetched data to props!
```jsx
export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}
```

### getStaticProps vs getServerSideProps
 - getServerSideProps is always rerenderd on the server-side
 - getStaticProps can re-render when data has changed by using `deploy hooks` giving the user the impression that data is never stale.


### static props
static route needs static path & props.

### check static site
add export command to make out folder.
```
"build": "next build && next export",
```
```npm i -g serve``` and ```serve -s out -p 8000```
You can see static site on localhost:8000.
