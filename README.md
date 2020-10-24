# John Conway's Game of Life 

> The **Game of Life**, also known simply as **Life**, is a [cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton "Cellular automaton") devised
> by the British [mathematician](https://en.wikipedia.org/wiki/Mathematician "Mathematician") [John Horton Conway](https://en.wikipedia.org/wiki/John_Horton_Conway "John Horton Conway") in 1970.[[1]](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#cite_note-1)
> It is a [zero-player game](https://en.wikipedia.org/wiki/Zero-player_game "Zero-player
> game"), meaning that its evolution is determined by
> its initial state, requiring no further input. One interacts with the Game of Life
> by creating an initial configuration and observing how it evolves.
> It is [Turing complete](https://en.wikipedia.org/wiki/Turing_complete
> "Turing complete") and can simulate a [universal constructor](https://en.wikipedia.org/wiki/Von_Neumann_universal_constructor "Von Neumann universal constructor")
> or any other [Turing machine](https://en.wikipedia.org/wiki/Turing_machine "Turing machine").

 ##### Source: *[Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)*


## Game Rules

Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent.

At each generational iteration or *tick*, the following transitions occur:

1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.

2. Any live cell with two or three live neighbours lives on to the next generation.

3. Any live cell with more than three live neighbours dies, as if by over-population.

4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
