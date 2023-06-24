import React from 'react'

const FormField = ({LabelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe, img}) => {
  return (
    
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label 
          htmlFor={name}
          className="block text-sm font-medium text-white"
        >
          {LabelName}
        </label>
      </div>
      <input 
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-[#3e3e42] border border-[#2d2d30] text-white text-sm rounded-full focus:ring-[#007acc] focus:border-[#007acc] outline-none block w-full p-3"
      />

      <div>
      {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="mt-2 ml-2 mb-2 font-semibold text-xs bg-[#007acc] py-1 px-2 rounded-[5px] text-white hover:bg-[#00538a] transition ease-in-out delay-50 hover:scale-105"
          >Surprise me
          </button>
        )}
      </div>
    </div>
  )
}

export default FormField