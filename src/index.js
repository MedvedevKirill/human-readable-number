module.exports = function toReadable (number) {
    let res = '';
    switch(number.toString().length)
    {
        case 2:{
            number = '0' + number; 
            break;
        }
        case 1:{
            number = '00' + number;
        }
    }
    let hundreds = number.toString()[0];
    let dozens = number.toString()[1];
    let lastNum = number.toString()[2];

    let  getReadableDigit = (digit) =>{
        let res;
        switch(digit){
            case '9':{
                res = 'nine';
                break;
            }
            case '8':{
                res = 'eight';
                break;
            }
            case '7':{
                res = 'seven';
                break;
            }
            case '6':{
                res = 'six';
                break;
            }
            case '5':{
                res = 'five';
                break;
            }
            case '4':{
                res = 'four';
                break;
            }
            case '3':{
                res = 'three';
                break;
            }
            case '2':{
                res = 'two';
                break;
            }
            case '1':{
                res = 'one';
                break;
            }
            case '0':{
                res = '';
                break;
            }
        }
        return res;
    }
    if(hundreds !== '0') res += getReadableDigit(hundreds) + ' hundred';
    switch(dozens){
        case '9':{
            res += ' ninety';
            break;
        }
        case '8':{
            res += ' eighty';
            break;
        }
        case '7':{
            res += ' seventy';
            break;
        }
        case '6':{
            res += ' sixty';
            break;
        }
        case '5':{
            res += ' fifty';
            break;
        }
        case '4':{
            res += ' forty';
            break;
        }
        case '3':{
            res += ' thirty';
            break;
        }
        case '2':{
            res += ' twenty';
            break;
        }
        case '1':{
            switch(lastNum){
                case '9':{
                    res += ' nineteen';
                    break;
                }
                case '8':{
                    res += ' eighteen';
                    break;
                }
                case '7':{
                    res += ' seventeen';
                    break;
                }
                case '6':{
                    res += ' sixteen';
                    break;
                }
                case '5':{
                    res += ' fifteen';
                    break;
                }
                case '4':{
                    res += ' fourteen';
                    break;
                }
                case '3':{
                    res += ' thirteen';
                    break;
                }
                case '2':{
                    res += ' twelve';
                    break;
                }
                case '1':{
                    res += ' eleven';
                    break;
                }
                case '0':{
                    res += ' ten'
                }
            }
            break;
        }
        case '0':{
            break;
        }
    }
    if(dozens !== '1') res += ' ' + getReadableDigit(lastNum);
    res = res.trim();
    return res === ''?'zero': res;
}
