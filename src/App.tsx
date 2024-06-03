import { Button, Grid, GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"

function App() {
  return (
    <Grid templateAreas={{ 
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
     }}>
      <GridItem area="nav" bg="tomato" >
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="black">
        Main
      </GridItem>
    </Grid>
  )
}

export default App