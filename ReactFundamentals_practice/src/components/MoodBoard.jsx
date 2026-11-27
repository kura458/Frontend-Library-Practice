
export function MoodBoardItem({ color, image, description }) {
  return (
    <div
      className="mood-board-item"
      style={{ backgroundColor: color }}
    >
      <img
        className="mood-board-image"
        src={image}
        alt={description}
      />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard() {
  return (
    <div>
      <h1 className="mood-board-heading">
        Destination Mood Board
      </h1>

      <div className="mood-board">
        <MoodBoardItem
          color="#bde0fe"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Peaceful Forest Path"
        />

        <MoodBoardItem
          color="#a2d2ff"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Beautiful Ocean Shore"
        />

        <MoodBoardItem
          color="#caffbf"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="Fresh Green Nature"
        />

        <MoodBoardItem
          color="#ffd6a5"
          image="https://cdn.freecodecamp.org/curriculum/labs/ship.jpg"
          description="Adventure at Sea"
        />

        <MoodBoardItem
          color="#ffc6ff"
          image="https://cdn.freecodecamp.org/curriculum/labs/santorini.jpg"
          description="Dream Vacation in Santorini"
        />

        <MoodBoardItem
          color="#fdffb6"
          image="https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg"
          description="Freedom and Peace"
        />
      </div>
    </div>
  );
}
