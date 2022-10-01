import { useCallback, useState } from "react"

export const useAccordion = () => {
  const [ setActive, setActiveState ] = useState("")
  const [isCollapse, setIsCollapse] = useState(false)

  const toggleAccordion = useCallback((currentIsCollapse: boolean) => {
    setActiveState(setActive === "" ? "active" : "")
    setIsCollapse(currentIsCollapse)
  },[setActive])

  return { setActiveState, isCollapse, setActive }
}
