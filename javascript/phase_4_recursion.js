function range(start, end) {
  if (start === end) {
    return [end];
  }

  return range(start, end - 1).concat([end]);
}