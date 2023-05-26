import imageweb3desktop from './images/image-web-3-desktop.jpg'
import imageretropcs from './images/image-retro-pcs.jpg'
import imagegaminggrowth from './images/image-gaming-growth.jpg'
import imagetoplaptops from './images/image-top-laptops.jpg'
const MainSection = () => {
    return ( 
        <section className="main-section">

      <div className="section1">
        <div className="main-img">
          <img src={imageweb3desktop} className="image-web3desktop" alt=""/>
        </div>
        <div className="introduction">
          <h1> The Bright Future of Web 3.0?</h1>
          <div className="desc">
            <p>
              We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the
              people.
              But is it really fulfilling its promise?
            
            </p>
            <button>Read more</button>
          </div>
        </div>
        <div className="sideNews">
          <h2>New</h2>
          <div className="card">
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="card">
            <h3>The Downsides of AI Artistry</h3>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </div>
          <div className="card">
            <h3>Is VC Funding Drying Up?</h3>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </div>
      </div>
      <div className="section2">
        <section className="popsec">
          <img src={imageretropcs} alt=""/>
          <div className="content">
            <span>01</span>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </section>
        <section className="popsec">
          <img src={imagetoplaptops} alt=""/>
          <div className="content">
            <span>02</span>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </section>
        <section className="popsec">
          <img src={imagegaminggrowth} alt=""/>
          <div className="content">
            <span>03</span>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </section>

      </div>
    </section>
        
     );
}
 
export default MainSection;