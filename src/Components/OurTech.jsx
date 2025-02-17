import React from 'react';
import '../Style.css';

const OurTech = () => {
  return (
    <>
      <div className="container">
        <div className="tut">
          <h1>Our Tech Stack</h1>
          <p>The wise man therefore always holds in these matters to this principle of selection.</p>
        </div>

        <div className="tech">
          {/* Mobile Development */}
          <div className="left-tech">
            <h2>Mobile development</h2>
            <p>Frontend</p>

            <div className="dev-flx">
              <div className="mobimg">
                <img src="mob1.png" alt="img" />
                <p>Swift</p>
              </div>

              <div className="mobimg">
                <img src="mob2.png" alt="img" />
                <p>objC</p>
              </div>

              <div className="mobimg">
                <img src="mob3.png" alt="img" />
                <p>Kotlin</p>
              </div>
            </div>

            <br />
            <p>Hybrid</p>
            <div className="dev-flx">
              <div className="mobimg">
                <img src="mob4.png" alt="img" />
                <p>Flutter</p>
              </div>

              <div className="mobimg">
                <img src="mob5.png" alt="img" />
                <p>React Native</p>
              </div>
            </div>
          </div>

          {/* Web Development */}
          <div className="Right-tech">
            <h2>Web development</h2>
            <p>Frontend</p>

            <div className="dev-flx">
              <div className="mobimg">
                <img src="mob5.png" alt="img" />
                <p>React.js</p>
              </div>

              <div className="mobimg">
                <img src="mob22.png" alt="img" />
                <p>Angular</p>
              </div>

              <div className="mobimg">
                <img src="mob33.png" alt="img" />
                <p>Vue.js</p>
              </div>
            </div>

            <br />
            <p>Backend</p>
            <div className="dev-flx">
              <div className="mobimg">
                <img src="mob6.png" alt="img" />
                <p>Node.js</p>
              </div>

              <div className="mobimg">
                <img src="mob7.png" alt="img" />
                <p>TypeScript</p>
              </div>

              <div className="mobimg">
                <img src="mob8.png" alt="img" />
                <p>.Net</p>
              </div>

              <div className="mobimg">
                <img src="mob9.png" alt="img" />
                <p>Python</p>
              </div>

              <div className="mobimg">
                <img src="mob10.png" alt="img" />
                <p>Java</p>
              </div>

              <div className="mobimg">
                <img src="mob11.png" alt="img" />
                <p>PHP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Game Development */}
        <br />
        <br />
        <div className="tech">
          <div className="left-tech">
            <h2>Mobile Game Development</h2>
            <p>Frontend</p>

            <div className="dev-flx">
              <div className="mobimg">
                <img src="mb1.png" alt="img" />
                <p>Unity 3D</p>
              </div>

              <div className="mobimg">
                <img src="mb2.png" alt="img" />
                <p>Unreal</p>
              </div>

              <div className="mobimg">
                <img src="mb3.png" alt="img" />
                <p>AR/VR</p>
              </div>

              <div className="mobimg">
                <img src="mb4.png" alt="img" />
                <p>Godot</p>
              </div>
            </div>
          </div>

          <div className="Right-tech">
            <h2>Web Game Development</h2>
            <p>Frontend</p>

            <div className="dev-flx">
              <div className="mobimg">
                <img src="mb5.png" alt="img" />
                <p>Phaser</p>
              </div>

              <div className="mobimg">
                <img src="mb6.png" alt="img" />
                <p>Construct2/3</p>
              </div>

              <div className="mobimg">
                <img src="mb7.png" alt="img" />
                <p>Three.js</p>
              </div>

              <div className="mobimg">
                <img src="mb8.png" alt="img" />
                <p>Cocos-Creator</p>
              </div>

              <div className="mobimg">
                <img src="mb9.png" alt="img" />
                <p>Pixi.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTech;
