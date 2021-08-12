import React from 'react';
import './Typography.scss';

const Typography = props => {
  console.log('typography props: ', props.id);
  return (
    <section className="typography-sec">
      <div className="card">
        <div className="card-body">
          <p>When assigning font sizes, we should use "rem" or "em" unit rather than pixels, rem units can be influenced by font size inheritance from browser font settings, therefore making it reponsive.</p>
          <h4>Heading, <span>500 -apple-system 25px</span></h4>
          <p>Aa - 400 -apple-system 16px. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis voluptate distinctio reprehenderit, autem deleniti ad. Optio ea aperiam nisi distinctio nemo repellat, voluptate fugiat. Quidem neque illum, blanditiis!</p>
          <p>Lato Italic</p>
          <p><b>Lato Bold</b></p>
          <h1>Lato H1</h1>
          <h2>Lato H2</h2>
          <h3>Lato H3</h3>
          <h4>Lato H4</h4>
          <h5>Lato H5</h5>
          <h6>Lato H64</h6>
        </div>
      </div>
      {/*share this component id to the rest of the app*/}
      {props.emitLoaded(props.id)}
    </section>
  )
}

export default Typography;