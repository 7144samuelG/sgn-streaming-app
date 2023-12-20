import { Navigation } from "./Navigation"
import { Toggle } from "./Toggle"
import { Wrapper } from "./wrapper"

export const Sidebar = () => {
    
    return (
        <Wrapper>
          <Toggle/>
          <Navigation/>
        </Wrapper>
    )
}