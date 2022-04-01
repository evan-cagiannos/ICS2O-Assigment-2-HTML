// Created by: Evan Cagiannos
// Created on: 04-01-2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const diagonalp = parseInt(document.getElementById('diagonalp').value)
  const diagonalq = parseInt(document.getElementById('diagonalq').value)

  // process
  const area = (diagonalp * diagonalq) / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
