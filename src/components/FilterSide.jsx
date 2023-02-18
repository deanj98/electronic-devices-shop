import React from 'react'
import { Link } from 'react-router-dom'

const FilterSide = () => {
  return (
        <div className="filter-prodoucts">
          <h4>prodoucts:</h4>
          <Link><h4>laptops</h4> </Link>
              <ul className="laptops">
                <li className="laptops-items">asus</li>
                <li className="laptops-items">lenovo</li>
                <li className="laptops-items">apple</li>
                <li className="laptops-items">del</li>
              </ul>
         
          <Link><h4>phones</h4> </Link>
              <ul className="laptops">
                  <li className="phones-items">samsung</li>
                  <li className="phones-items">apple</li>
                  <li className="phones-items">lenovo</li>
                  <li className="phones-items">nokia</li>
              </ul>
         
          <Link><h4>tvs</h4> </Link>
              <ul className="laptops">
                  <li className="tvs-items">samsung</li>
                  <li className="tvs-items">lg</li>
                  <li className="tvs-items">sony</li>
                  <li className="tvs-items">msg</li>
                </ul>
         
        </div>
      )
}

export default FilterSide;