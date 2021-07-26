import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section py-2">
          <h4 className="p-3" >{item.subheading}</h4>
          <div className="text-start">
            <div
              style={{
                width: '80%',
                display: 'inline-block', 
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <div className="w-100"><p className="pt-3">{item.text}</p></div>
          <button style={{position:'relative', bottom:'5px',}} className="btn"><a className="text-decoration-none" href="https://github.com/amey-SN/" target="_blank" rel="noopener noreferrer">Source Code</a></button>
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
      subheading: PropTypes.string,
    })
  ),
}

export default FeatureGrid
