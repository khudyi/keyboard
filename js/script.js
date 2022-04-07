document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

let myText = [];
let elements = document.querySelectorAll('.keyClick');

for (let i = 0; i < elements.length; i++) {
  elements[i].onclick = (e) => {
    let textElem = e.target.innerText;

    elements[i].style.transform = 'scale(0.9, 0.9)';
    setTimeout(() => {
      elements[i].style.transform = 'scale(1, 1)';
    }, 100);

    if (textElem != 'fn' &&
      textElem != 'control' &&
      textElem != '⌃' &&
      textElem != 'option' &&
      textElem != '⌥' &&
      textElem != 'command' &&
      textElem != '⌘' &&
      textElem != '←' &&
      textElem != '↑' &&
      textElem != '↓' &&
      textElem != '→' &&
      textElem != '⇧' &&
      textElem != '⇪' &&
      textElem != '⇥' &&
      textElem != '↩' &&
      textElem != '⌫' &&
      textElem != 'F1' &&
      textElem != 'F2' &&
      textElem != 'F3' &&
      textElem != 'F4' &&
      textElem != 'F5' &&
      textElem != 'F6' &&
      textElem != 'F7' &&
      textElem != 'F8' &&
      textElem != 'F9' &&
      textElem != 'F10' &&
      textElem != 'F11' &&
      textElem != 'F12') {
      myText.push(textElem);
      document.getElementById('text').value += checkRes();
    }
  };
}

function checkRes() {
  return myText[myText.length - 1];
}

function keyDown(e) {
  if (e.keyCode === 27) {
    document.getElementById('esc').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 112) {
    document.getElementById('keyF1').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 113) {
    document.getElementById('keyF2').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 114) {
    document.getElementById('keyF3').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 115) {
    document.getElementById('keyF4').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 116) {
    document.getElementById('keyF5').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 117) {
    document.getElementById('keyF6').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 118) {
    document.getElementById('keyF7').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 119) {
    document.getElementById('keyF8').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 120) {
    document.getElementById('keyF9').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 121) {
    document.getElementById('keyF10').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 122) {
    document.getElementById('keyF11').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 123) {
    document.getElementById('keyF12').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 48) {
    document.getElementById('key0').style.transform = 'scale(0.9, 0.9)';
    
    if (e.shiftKey === true) {
      myText.push(')');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('0');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 49) {
    document.getElementById('key1').style.transform = 'scale(0.9, 0.9)';
    
    if (e.shiftKey === true) {
      myText.push('!');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('1');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 50) {
    document.getElementById('key2').style.transform = 'scale(0.9, 0.9)';
    
    if (e.shiftKey === true) {
      myText.push('"');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('2');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 51) {
    document.getElementById('key3').style.transform = 'scale(0.9, 0.9)';
    
    if (e.shiftKey === true) {
      myText.push('№');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('3');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 52) {
    document.getElementById('key4').style.transform = 'scale(0.9, 0.9)';
    
    if (e.shiftKey === true) {
      myText.push(';');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('4');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 53) {
    document.getElementById('key5').style.transform = 'scale(0.9, 0.9)';
    
    if (e.shiftKey === true) {
      myText.push('%');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('5');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 54) {
    document.getElementById('key6').style.transform = 'scale(0.9, 0.9)';
    
    if (e.shiftKey === true) {
      myText.push(':');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('6');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 55) {
    document.getElementById('key7').style.transform = 'scale(0.9, 0.9)';
    
    if (e.shiftKey === true) {
      myText.push('?');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('7');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 56) {
    document.getElementById('key8').style.transform = 'scale(0.9, 0.9)';
    
    if (e.shiftKey === true) {
      myText.push('*');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('8');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 57) {
    document.getElementById('key9').style.transform = 'scale(0.9, 0.9)';
    
    if (e.shiftKey === true) {
      myText.push('(');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('9');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 192) {
    document.getElementById('backquote').style.transform = 'scale(0.9, 0.9)';
    
    if (e.shiftKey === true) {
      myText.push('/');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('\\');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 189) {
    document.getElementById('minus').style.transform = 'scale(0.9, 0.9)';
    
    if (e.shiftKey === true) {
      myText.push('_');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('-');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 187) {
    document.getElementById('equal').style.transform = 'scale(0.9, 0.9)';
    
    if (e.shiftKey === true) {
      myText.push('+');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('=');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 8) {
    document.getElementById('backspace').style.transform = 'scale(0.9, 0.9)';

    let txtArr = document.getElementById('text').value;
    document.getElementById('text').value = txtArr.substring(0, txtArr.length - 1);

  } else if (e.keyCode === 9) {
    document.getElementById('tab').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 81) {
    document.getElementById('keyQ').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Й');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('й');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 87) {
    document.getElementById('keyW').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Ц');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('ц');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 69) {
    document.getElementById('keyE').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('У');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('у');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 82) {
    document.getElementById('keyR').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('К');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('к');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 84) {
    document.getElementById('keyT').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Е');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('е');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 89) {
    document.getElementById('keyY').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Н');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('н');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 85) {
    document.getElementById('keyU').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Г');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('г');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 73) {
    document.getElementById('keyI').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Ш');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('ш');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 79) {
    document.getElementById('keyO').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Щ');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('щ');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 80) {
    document.getElementById('keyP').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('З');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('з');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 8) {
    document.getElementById('backspace').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 219) {
    document.getElementById('bracketL').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Х');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('х');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 221) {
    document.getElementById('bracketR').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Ї');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('ї');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 13) {
    document.getElementById('enterOne').style.transform = 'scale(0.9, 0.9)',
      document.getElementById('enterTwo').style.transform = 'scale(0.9, 0.9)',
      document.getElementById('enterTwo').style.left = '-1.2px';
  } else if (e.keyCode === 20) {
    document.getElementById('caps').style.transform = 'scale(0.9, 0.9)',
      document.getElementById('point').style.backgroundColor = 'lime';

    let keyLetter = document.querySelectorAll('.keyboard__letter');
    for (let k = 0; k < keyLetter.length; k++) {
      keyLetter[k].style.textTransform = 'uppercase';
    }
  } else if (e.keyCode === 65) {
    document.getElementById('keyA').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Ф');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('ф');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 83) {
    document.getElementById('keyS').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('І');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('і');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 68) {
    document.getElementById('keyD').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('В');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('в');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 70) {
    document.getElementById('keyF').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('А');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('а');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 71) {
    document.getElementById('keyG').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('П');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('п');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 72) {
    document.getElementById('keyH').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Р');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('р');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 74) {
    document.getElementById('keyJ').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('О');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('о');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 75) {
    document.getElementById('keyK').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Л');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('л');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 76) {
    document.getElementById('keyL').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Д');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('д');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 186) {
    document.getElementById('semicolon').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Ж');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('ж');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 13) {
    document.getElementById('enter').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 222) {
    document.getElementById('quote').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Є');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('є');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 220) {
    document.getElementById('backslash').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('₴');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('ʼ');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.code === 'ShiftLeft') {
    document.getElementById('leftShift').style.transform = 'scale(0.9, 0.9)';

    let keyLetter = document.querySelectorAll('.keyboard__letter');
    for (let k = 0; k < keyLetter.length; k++) {
      keyLetter[k].style.textTransform = 'uppercase';
    }

    document.getElementById('key0').textContent = ')';
    document.getElementById('key1').textContent = '!';
    document.getElementById('key2').textContent = '"';
    document.getElementById('key3').textContent = '№';
    document.getElementById('key4').textContent = ';';
    document.getElementById('key5').textContent = '%';
    document.getElementById('key6').textContent = ':';
    document.getElementById('key7').textContent = '?';
    document.getElementById('key8').textContent = '*';
    document.getElementById('key9').textContent = '(';
    document.getElementById('backquote').textContent = '/';
    document.getElementById('minus').textContent = '_';
    document.getElementById('equal').textContent = '+';
  } else if (e.keyCode === 90) {
    document.getElementById('keyZ').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Я');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('я');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 88) {
    document.getElementById('keyX').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Ч');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('ч');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 67) {
    document.getElementById('keyC').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('С');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('с');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 86) {
    document.getElementById('keyV').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('М');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('м');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 66) {
    document.getElementById('keyB').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('И');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('и');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 78) {
    document.getElementById('keyN').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Т');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('т');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 77) {
    document.getElementById('keyM').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Ь');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('ь');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 188) {
    document.getElementById('comma').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Б');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('б');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 190) {
    document.getElementById('period').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push('Ю');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('ю');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.keyCode === 191) {
    document.getElementById('slash').style.transform = 'scale(0.9, 0.9)';

    if (e.shiftKey === true) {
      myText.push(',');
      document.getElementById('text').value += checkRes();
    } else {
      myText.push('.');
      document.getElementById('text').value += checkRes();
    }
  } else if (e.code === 'ShiftRight') {
    document.getElementById('rightShift').style.transform = 'scale(0.9, 0.9)';

    let keyLetter = document.querySelectorAll('.keyboard__letter');
    for (let k = 0; k < keyLetter.length; k++) {
      keyLetter[k].style.textTransform = 'uppercase';
    }
  } else if (e.keyCode === 17) {
    document.getElementById('control').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 17) {
    document.getElementById('control').style.transform = 'scale(0.9, 0.9)';
  } else if (e.code === 'AltLeft') {
    document.getElementById('leftOption').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 91) {
    document.getElementById('leftCommand').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 32) {
    document.getElementById('space').style.transform = 'scale(0.96, 0.96)';
    myText.push(' ');
    document.getElementById('text').value += checkRes();
  } else if (e.keyCode === 93) {
    document.getElementById('rightCommand').style.transform = 'scale(0.9, 0.9)';
  } else if (e.code === 'AltRight') {
    document.getElementById('rightOption').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 37) {
    document.getElementById('leftArrow').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 38) {
    document.getElementById('upArrow').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 40) {
    document.getElementById('downArrow').style.transform = 'scale(0.9, 0.9)';
  } else if (e.keyCode === 39) {
    document.getElementById('rightArrow').style.transform = 'scale(0.9, 0.9)';
  }
}

function keyUp(e) {
  if (e.keyCode === 27) {
    document.getElementById('esc').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 112) {
    document.getElementById('keyF1').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 113) {
    document.getElementById('keyF2').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 114) {
    document.getElementById('keyF3').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 115) {
    document.getElementById('keyF4').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 116) {
    document.getElementById('keyF5').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 117) {
    document.getElementById('keyF6').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 118) {
    document.getElementById('keyF7').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 119) {
    document.getElementById('keyF8').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 120) {
    document.getElementById('keyF9').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 121) {
    document.getElementById('keyF10').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 122) {
    document.getElementById('keyF11').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 123) {
    document.getElementById('keyF12').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 48) {
    document.getElementById('key0').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 49) {
    document.getElementById('key1').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 50) {
    document.getElementById('key2').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 51) {
    document.getElementById('key3').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 52) {
    document.getElementById('key4').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 53) {
    document.getElementById('key5').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 54) {
    document.getElementById('key6').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 55) {
    document.getElementById('key7').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 56) {
    document.getElementById('key8').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 57) {
    document.getElementById('key9').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 51) {
    document.getElementById('key3').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 192) {
    document.getElementById('backquote').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 189) {
    document.getElementById('minus').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 187) {
    document.getElementById('equal').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 8) {
    document.getElementById('backspace').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 9) {
    document.getElementById('tab').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 81) {
    document.getElementById('keyQ').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 87) {
    document.getElementById('keyW').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 69) {
    document.getElementById('keyE').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 82) {
    document.getElementById('keyR').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 84) {
    document.getElementById('keyT').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 89) {
    document.getElementById('keyY').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 85) {
    document.getElementById('keyU').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 73) {
    document.getElementById('keyI').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 79) {
    document.getElementById('keyO').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 80) {
    document.getElementById('keyP').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 8) {
    document.getElementById('backspace').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 219) {
    document.getElementById('bracketL').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 221) {
    document.getElementById('bracketR').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 13) {
    document.getElementById('enterOne').style.transform = 'scale(1, 1)',
      document.getElementById('enterTwo').style.transform = 'scale(1, 1)',
      document.getElementById('enterTwo').style.left = '0';
  } else if (e.keyCode === 20) {
    document.getElementById('caps').style.transform = 'scale(1, 1)',
      document.getElementById('point').style.backgroundColor = '#ffffff';

      let keyLetter = document.querySelectorAll('.keyboard__letter');
    for (let k = 0; k < keyLetter.length; k++) {
      keyLetter[k].style.textTransform = 'lowercase';
    }
  } else if (e.keyCode === 65) {
    document.getElementById('keyA').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 83) {
    document.getElementById('keyS').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 68) {
    document.getElementById('keyD').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 70) {
    document.getElementById('keyF').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 71) {
    document.getElementById('keyG').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 72) {
    document.getElementById('keyH').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 74) {
    document.getElementById('keyJ').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 75) {
    document.getElementById('keyK').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 76) {
    document.getElementById('keyL').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 186) {
    document.getElementById('semicolon').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 13) {
    document.getElementById('enter').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 222) {
    document.getElementById('quote').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 220) {
    document.getElementById('backslash').style.transform = 'scale(1, 1)';
  } else if (e.code === 'ShiftLeft') {
    document.getElementById('leftShift').style.transform = 'scale(1, 1)';

    let keyLetter = document.querySelectorAll('.keyboard__letter');
    for (let k = 0; k < keyLetter.length; k++) {
      keyLetter[k].style.textTransform = 'lowercase';
    }

    document.getElementById('key0').textContent = '0';
    document.getElementById('key1').textContent = '1';
    document.getElementById('key2').textContent = '2';
    document.getElementById('key3').textContent = '3';
    document.getElementById('key4').textContent = '4';
    document.getElementById('key5').textContent = '5';
    document.getElementById('key6').textContent = '6';
    document.getElementById('key7').textContent = '7';
    document.getElementById('key8').textContent = '8';
    document.getElementById('key9').textContent = '9';
    document.getElementById('backquote').textContent = '\\';
    document.getElementById('minus').textContent = '-';
    document.getElementById('equal').textContent = '=';
  } else if (e.keyCode === 90) {
    document.getElementById('keyZ').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 88) {
    document.getElementById('keyX').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 67) {
    document.getElementById('keyC').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 86) {
    document.getElementById('keyV').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 66) {
    document.getElementById('keyB').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 78) {
    document.getElementById('keyN').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 77) {
    document.getElementById('keyM').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 188) {
    document.getElementById('comma').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 190) {
    document.getElementById('period').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 191) {
    document.getElementById('slash').style.transform = 'scale(1, 1)';
  } else if (e.code === 'ShiftRight') {
    document.getElementById('rightShift').style.transform = 'scale(1, 1)';

    let keyLetter = document.querySelectorAll('.keyboard__letter');
    for (let k = 0; k < keyLetter.length; k++) {
      keyLetter[k].style.textTransform = 'lowercase';
    }
  } else if (e.keyCode === 17) {
    document.getElementById('control').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 17) {
    document.getElementById('control').style.transform = 'scale(1, 1)';
  } else if (e.code === 'AltLeft') {
    document.getElementById('leftOption').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 91) {
    document.getElementById('leftCommand').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 32) {
    document.getElementById('space').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 93) {
    document.getElementById('rightCommand').style.transform = 'scale(1, 1)';
  } else if (e.code === 'AltRight') {
    document.getElementById('rightOption').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 37) {
    document.getElementById('leftArrow').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 38) {
    document.getElementById('upArrow').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 40) {
    document.getElementById('downArrow').style.transform = 'scale(1, 1)';
  } else if (e.keyCode === 39) {
    document.getElementById('rightArrow').style.transform = 'scale(1, 1)';
  }
}