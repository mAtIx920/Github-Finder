import { useContext } from "react";
import { FaExclamationCircle } from 'react-icons/fa'
import AlertContext from "../context/Alert/AlertContext";

function Alert() {
  const {alert} = useContext(AlertContext)
  
  return alert !== null && (
    <div className="flex items-center mb-4 space-x-2">
      {alert.type === 'ERROR' && (
        <FaExclamationCircle className="w-4 h-4 text-red-700"/>
      )}
      <p className="flex-1 text-base font-semibold leading-7">
        <strong>{alert.msg}</strong>
      </p>
    </div>
  )
}

export default Alert
