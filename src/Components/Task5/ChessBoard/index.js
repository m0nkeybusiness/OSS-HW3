import React from 'react';
import './ChessBoard.css';

class Chess extends React.Component {
   chessLines = [];

   showSquareCoordinates = (e) => {
      // const coordinates = e.target.title;
      // e.target.textContent = coordinates;
      alert(e.target.title);
   };

   makeChessBoard() {
      const coordinatesLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
      for (let i = 0, keyNum = 0, coordinatesNum = 8; i < 8; i++) {
         if (i % 2 === 0) {
            for (let k = 0; k < 8; k++) {
               k % 2 === 0
                  ? this.chessLines.push(
                       <div
                          className="chessboard white"
                          key={keyNum++}
                          title={`${coordinatesNum}${coordinatesLetters[k]}`}
                          onClick={this.showSquareCoordinates}
                       >{`${coordinatesNum}${coordinatesLetters[k]}`}</div>
                    )
                  : this.chessLines.push(
                       <div
                          className="chessboard black"
                          key={keyNum++}
                          title={`${coordinatesNum}${coordinatesLetters[k]}`}
                          onClick={this.showSquareCoordinates}
                       >{`${coordinatesNum}${coordinatesLetters[k]}`}</div>
                    );
            }
            coordinatesNum--;
         }

         if (i % 2 !== 0) {
            for (let j = 0; j < 8; j++) {
               j % 2 === 0
                  ? this.chessLines.push(
                       <div
                          className="chessboard black"
                          key={keyNum++}
                          title={`${coordinatesNum}${coordinatesLetters[j]}`}
                          onClick={this.showSquareCoordinates}
                       >{`${coordinatesNum}${coordinatesLetters[j]}`}</div>
                    )
                  : this.chessLines.push(
                       <div
                          className="chessboard white"
                          key={keyNum++}
                          title={`${coordinatesNum}${coordinatesLetters[j]}`}
                          onClick={this.showSquareCoordinates}
                       >{`${coordinatesNum}${coordinatesLetters[j]}`}</div>
                    );
            }
            coordinatesNum--;
         }
      }
   }

   render() {
      this.makeChessBoard();
      return <div className="wrapper">{this.chessLines}</div>;
   }
}

export default Chess;
