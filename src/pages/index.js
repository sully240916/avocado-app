import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Avocado1">
      <div className="Avocado1-Group">
        <h1>If it's this colour</h1>
        <p>It's probably best to wait a few days.</p>
        <Link to="/page2/">Avocado recipes</Link>
        
        <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="white">
          <animate repeatCount="indefinite"
          fill="freeze" attributeName="d" dur="10s"
          
          values="
          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

          M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
      
          M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
       
          M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z" 
          />
          </path>
        </svg>

      </div>
    </div>

    <div className="Avocado2">
      <div className="Avocado2-Group">
        <h1>If it's this colour</h1>
        <p>Give it a day mate!</p>
        <Link to="/page-2/">Avocado recipes</Link>


<svg width="100%" height="53" viewBox="0 0 100% 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill="black">


<animate repeatCount="indefinite"
          fill="freeze" attributeName="d" dur="10s"

          values=" 
          M76 163L0 0H322L243 163H76Z;
          M246 -6.64413e-06L322 163L0 163L79 -2.12437e-05L246 -6.64413e-06Z;
          M276 0L0 105L658 220L678 39L608 142L567 105L487 78L453 113L276 0;
          22 0L0 17L36 30L22 0Z;
          M66 0H0L22 53H66V0Z"
          />
          </path>
          </svg>




        
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
