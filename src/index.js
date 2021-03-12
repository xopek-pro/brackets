module.exports = 
function check(str, bracketsConfig) {
    // your solution
    let bracketsScore = [];
    for (
        let bracketsType = 0;
        bracketsType < bracketsConfig.length;
        bracketsType++
    ) {
        bracketsScore.push(0);
    }
    let bracketsCache = [];
    debugger;
    for (let index = 0; index < str.length; index++) {
        for (
            let bracketsType = 0;
            bracketsType < bracketsConfig.length;
            bracketsType++
        ) {
            if (
                bracketsConfig[bracketsType][0] ==
                bracketsConfig[bracketsType][1]
            ) {
                if (str[index] == bracketsConfig[bracketsType][0]) {
                  if (bracketsType == bracketsCache[bracketsCache.length-1]){
                    bracketsScore[bracketsType]--;
                    bracketsCache.pop();
                  } else {
                      bracketsScore[bracketsType]++;
                      bracketsCache.push(bracketsType);
                  }
                }
            } else {
                if (str[index] == bracketsConfig[bracketsType][0]) {
                    bracketsScore[bracketsType]++;
                    bracketsCache.push(bracketsType);
                }
                if (str[index] == bracketsConfig[bracketsType][1]) {
                    if (bracketsType == bracketsCache[bracketsCache.length-1]){
                      bracketsScore[bracketsType]--;
                      bracketsCache.pop();
                    } else {return false;}
                }
            }
        }
    }

    result = true;
    for (let index = 0; index < bracketsScore.length; index++) {
        if (bracketsScore[index] != 0) {
            result = false;
        }
    }
    return result;
};

// console.log(check('()', [['(', ')']]));
// console.log(check('|()|', [['(', ')'], ['|', '|']]));
// console.log(check('|()|(||)||', [['(', ')'], ['|', '|']]));

