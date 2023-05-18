# Quantum Quandaries

Quantum Quandaries is a strategic board game designed to test your planning and adaptive skills. It features elements of area control and resource management.

## Game Components

- Game Board: A 7x7 grid representing different sectors of a quantum computer.
- Chips: Each player has 30 chips of their color.
- Quantum Cards: A deck of 30 Quantum cards, each with an action that can affect gameplay.
- Score Tracker: To keep track of each player's score.
How to Play

1. The players decide who starts.
2. In their turn, players can perform two actions: placing a chip on the board and drawing/playing a Quantum card.
3. The objective is to control as many rows, columns, or diagonals of the board as possible. A player controls a row, column, or diagonal if they have more chips in it than their opponent.
4. After placing a chip, players draw a Quantum card. They can choose to play it immediately or save it for a future turn. Players can only hold up to 3 Quantum cards in their hand.
5. The game ends when all chips have been placed on the board or when the Quantum deck runs out. The player who controls the most rows, columns, or diagonals is the winner.
## Quantum Cards

Quantum cards can significantly alter the game state, providing unexpected opportunities or challenges. Players need to balance between offensive moves to gain control and defensive moves to deny their opponent's control. Managing Quantum cards efficiently can give a player a significant advantage, allowing them to manipulate the board state favorably.

## Strategies

Players need to strategically place their chips to maximize their control over the board. The game tests a player's ability to adapt to changing circumstances, a critical skill for strategic planning.

In Quantum Quandaries, if there are n empty cells on the board and you place your chip in one cell, the probability P that your opponent will place their chip in the same cell (assuming random placement) is given by: P = 1/n
markdown

The equilibrium in Quantum Quandaries would be when all players make the best decision they can, taking into account the decisions of the others. An example equilibrium equation for two players A and B might look like:

Strategy_A = Best_Response_B
Strategy_B = Best_Response_A
If x[i] is the position of the i-th chip, the player's goal is to maximize their score S:
S = Sum(controlled_rows(x)) + Sum(controlled_columns(x)) + Sum(controlled_diagonals(x))

P(Win) = (Number of winning montecarlo simulations) / N

## Setup and Installation

Download or clone this repository to your local machine.
Open index.html in your web browser to start the game.

# License

This project is open source and available under the 'MIT License'.