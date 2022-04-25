function solvePuzzle(clues) {
    let board = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
    let copyBoard = [...board];




    function validateSame(elemI,elemJ){
    const elem = board[elemI,elemJ];
      const row = [...board[elemI]];
      const column = [];
      for(let item of board){
          column.push(item[elemJ]);
      }          
      if([...row].filter(item=>item == elem).length > 1){
          return false;
      }
      if([...column].filter(item=>item == elem).length > 1){
        return false;
    }
    return true;
   
    }
    function validateRowClues(elemI,elemJ){
        const row = [...board[elemI]];
        const secondClue = clues[1][elemJ]
        const fourthClue = clues[3][elemJ]
        if(secondClue == 0 && fourthClue == 0){
            return true;
        }
        let prev = 0;
        let count = 0;
        if(fourthClue != 0){
            for(let item of row){
                if(item > prev){
                    count++;
                    prev = item;
                }        
            }
            if(count != fourthClue){
                return false;
            }
            prev = 0;
            count = 0;
        }
        if(secondClue != 0){
            for(let i = row.length - 1; i>=0;i--){
                if(row[i] > prev){
                    count++;
                    prev = item;
                }
            }
            if(count != secondClue){
                return false;
            }
        }
        return true;
    }
    function validateColumnClues(elemJ){
        const column = [];
        for(let item of board){
            column.push(item[elemJ]);
        }    
        const firstClue = clues[0][elemJ]
        const thirdClue = clues[2][elemJ]  
        if(firstClue == 0 && thirdClue == 0){
            return true;
        }
        let prev = 0;
        let count = 0;
        if(firstClue != 0){
            for(let item of column){
                if(item > prev){
                    count++;
                    prev = item;
                }        
            }
            if(count != firstClue){
                return false;
            }
            prev = 0;
            count = 0;
        }
        if(thirdClue != 0){
            for(let i = row.length - 1; i>=0;i--){
                if(column[i] > prev){
                    count++;
                    prev = item;
                }
            }
            if(count != thirdClue){
                return false;
            }
        }
        return true;
    }
  }