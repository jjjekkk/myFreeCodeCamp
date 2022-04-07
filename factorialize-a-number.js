function factorialize(num, result) {
  result = result||1;
  if (!num) {
    return result;
  } else {
  return factorialize(num-1, result*num)
}
}

factorialize(5);