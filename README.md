# Rapid Typing Game

A simple typing game built with React.js, TypeScript, and Tailwind CSS where users can test and improve their typing speed and accuracy.

## Live Demo

[Try the Typing Game here](https://typing-game-hd74.vercel.app/)

## Features

- Random word typing challenges
- Real-time accuracy tracking
- Words per minute (WPM) calculation
- 60-second countdown timer
- Multiple difficulty levels (easy, medium, hard)
- Final score display
- Real-time character feedback (correct/incorrect highlighting)
- Sound effects for game events (correct words, incorrect words, game start/end)

## Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YesudasZ/Typing-Game.git
cd typing-game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Project Structure

The project follows a modular architecture to promote maintainability and reusability:

- **components/**: UI components (GameBoard, Timer, WordDisplay, etc.)
- **hooks/**: Custom React hooks for game logic
- **utils/**: Utility functions (score calculation, word lists, etc.)
- **types/**: TypeScript interfaces and type definitions

## Game Logic

The core game logic is implemented using custom React hooks:

- **useTypingGame**: Main game controller that manages the game state
- **useTimer**: Handles the countdown timer
- **useWordGenerator**: Generates random words based on difficulty

## Difficulty Levels

- **Easy**: Shorter, common words
- **Medium**: Intermediate-length words
- **Hard**: Longer, more complex words

## Sound Effects

The game includes audio feedback for a more immersive experience:
- Sound plays when a word is typed correctly
- Different sound plays when a word is typed incorrectly
- Game start sound effect
- Game over sound effect

## Design Approach

The application is built with the following principles in mind:

1. **Component Reusability**: Each UI element is a separate component that can be reused and tested independently.

2. **Custom Hooks**: Game logic is separated into custom hooks to separate concerns and improve testability.

3. **TypeScript**: Type safety is ensured through TypeScript interfaces and proper type definitions.

4. **Responsive Design**: The UI is responsive and works well on various screen sizes thanks to Tailwind CSS.

5. **Modern React Patterns**: The application uses functional components and React hooks throughout.

## Deployment

The application is deployed on Vercel. You can view the live version at [https://typing-game-hd74.vercel.app/](https://typing-game-hd74.vercel.app/)

## Future Enhancements

- User accounts and high score tracking
- Multiplayer functionality
- More game modes (time attack, word marathon, etc.)
- Additional animations and visual feedback
- Custom word lists or categories

## License

MIT
