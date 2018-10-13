import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Avocado1">
      <div className="Avocado1-Group">
        <h1>If it's this colour</h1>
        <p>It's probably best to wait a few days.</p>
        <Link to="/page2/">Avocado recipes</Link>
      </div>
    </div>

    <div className="Avocado2">
      <div className="Avocado2-Group">
        <h1>If it's this colour</h1>
        <p>Give it a day mate!</p>
        <Link to="/page-2/">Avocado recipes</Link>
      </div>
    </div>

    <div className="Avocado3">
      <div className="Avocado3-Group">
        <h1>If it's this colour</h1>
        <p>Almost ready to go!</p>
        <Link to="/page-2/">Avocado recipes</Link>
      </div>
    </div>

    <div className="Avocado4">
      <div className="Avocado4-Group">
        <h1>This is a nice colour...</h1>
        <p>Slice it, dice it and mash it on tast</p>
        <Link to="/page-2/">Avocado recipes</Link>
      </div>
    </div>

    <div className="Avocado5">
      <div className="Avocado5-Group">
        <h1>It's dead</h1>
        <p>
          Just like seeing a large stone, this is a dissapointing thing to see
        </p>
        <Link to="/page-2/">Buy Another!</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
