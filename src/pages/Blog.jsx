import React from 'react'
import Layouts from '../Layouts/Layouts'

const Blog = () => {
  return (
    <>
      <Layouts page={"Blog"}>
        <div className="absolute top-[95px] left-0 w-full">
          <h1>This is Blog removed the backend url in cloudflare for checking the deployment works</h1>
        </div>
      </Layouts>
    </>
  )
}

export default Blog
