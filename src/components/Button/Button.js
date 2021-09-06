import React from "react"
import "./Button.css"

export const Button = ({ title, color, Icon, ...props }) => {
  return (
    <div>
      <button className="button" {...props}>
        {Icon && (
          <img src={Icon} height={15} alt="twitter" style={{ marginRight: 10 }} />
        )}
        {title}
      </button>
    </div>
  )
}
