import React, { createContext, useState } from 'react'

export interface IMenuContext {
  MenuContent: React.ReactElement | undefined
  setMenuContent: React.Dispatch<
    React.SetStateAction<React.ReactElement | undefined>
  >
}

export const MenuContext = createContext<IMenuContext>({
  MenuContent: undefined,
  setMenuContent: undefined,
})
const MenuContentProvider = ({ children }) => {
  const [MenuContent, setMenuContent] = useState<
    React.ReactElement | undefined
  >(undefined)

  return (
    <MenuContext.Provider value={{ MenuContent, setMenuContent }}>
      {children}
    </MenuContext.Provider>
  )
}

export { MenuContentProvider }
