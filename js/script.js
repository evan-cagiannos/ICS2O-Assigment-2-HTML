// Created by: Aiden McLeod
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const diagonala = parseInt(document.getElementById('diagonala').value)
  const diagonalb = parseInt(document.getElementById('diagonalb').value)

  // process
  const area = (diagonala * diagonalb) / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
