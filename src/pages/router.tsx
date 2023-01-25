import Router from 'next/router'

const handler = (path: string) => {
  Router.push(path)
}

export default () => (
    <button onClick={()=>handler('/about')}>Click </button>
)