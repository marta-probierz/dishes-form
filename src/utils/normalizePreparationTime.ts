const normalizePreparationTime = (value, previousValue) => {
    if (!value) {
      return value
    }
    const onlyNums = value.replace(/[^\d]/g, '')
    if (!previousValue || value.length > previousValue.length) {
      if (onlyNums.length === 2) {
        return onlyNums + ':'
      }
      if (onlyNums.length === 4) {
        return onlyNums.slice(0, 2) + ':' + onlyNums.slice(2) + ':'
      }
    }
    if (onlyNums.length <= 2) {
      return onlyNums
    }
    if (onlyNums.length <= 4) {
      return onlyNums.slice(0, 2) + ':' + onlyNums.slice(2)
    }
    return onlyNums.slice(0, 2) + ':' + onlyNums.slice(2, 4) + ':' + onlyNums.slice(4, 6)
  }
  
  export default normalizePreparationTime;