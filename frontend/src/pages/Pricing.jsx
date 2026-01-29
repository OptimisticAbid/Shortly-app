import React from 'react'

const Pricing = () => {
  return (
    <div className="flex text-center items-center border- 2 border-black justify-between m-2">
      <div className="flex-1 bg-white border border-black">
        <h1>Personal</h1>
        <p>
          The perfect starting place for your web app or personal project.Free
          forever.
        </p>

        <label for="basic-toggle">
            <input type="checkbox"  className="bg-brand-gray-700 text-primary " />
        </label>
        <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>  
            <li>Feature 4</li>  
        </ul>
      </div>

      <div className="flex-1 bg-white border border-black h-full">Second
        <h2>Pro</h2>
        <p>
          Advanced features for pros who need more customization and control.
        </p>
        
        <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>  
            <li>Feature 4</li>  
            <li>Feature 5</li>  
        </ul>
      </div>

      <div className="flex-1 bg-white border border-black ">Third
        <h2>Business</h2>
        <p>
          Comprehensive solutions for businesses with high volume and advanced
          needs.
        </p>

        <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>  
            <li>Feature 4</li>  
            <li>Feature 5</li>  
            <li>Feature 6</li>  
        </ul>
      </div>
    </div>
  )
}

export default Pricing