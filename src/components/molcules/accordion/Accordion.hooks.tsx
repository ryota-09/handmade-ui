import { useCallback, useState } from "react"

export const useAccordion = () => {
  const [ setActive, setActiveState ] = useState("")
  const [isCollapse, setIsCollapse] = useState(false)

  const toggleAccordion = (currentIsCollapse: boolean) => {
    setActiveState(setActive === "" ? "active" : "")
    setIsCollapse(currentIsCollapse)
  }

  return { setActiveState, isCollapse, setActive, toggleAccordion }
}
