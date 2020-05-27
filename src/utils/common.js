exports.install = function(Vue) {
  /**
   * 判断值是否为空
   * @param obj
   * @returns {boolean}
   */
  Vue.prototype.isEmpty = function(obj) {
    if (typeof obj === 'undefined') {
      return true
    }
    if (obj == null) {
      return true
    }
    if (obj.toString() === '') {
      return true
    }
    if (obj === false) {
      return true
    }
    if (typeof obj === 'number') {
      return window.isNaN(obj)
    }
    if (typeof obj === 'object') {
      var str = JSON.stringify(obj)
      if (str === '{}' || str === '[]') {
        return true
      }
    }
    if (typeof obj === 'string') {
      var s = obj.trim()
      if (s === '') {
        return true
      }
      if (s === '0') {
        return true
      }
    }
    return false
  }
  /**
   * 在数组array中搜索指定的值value，并返回此索引，如果不存在，返回-1
   * @param value
   * @param array
   * @param fromIndex
   * @returns {number}
   */
  Vue.prototype.inArray = function(value, array, fromIndex) {
    var d
    var indexOf = [].indexOf
    if (array) {
      if (!indexOf) {
        return indexOf.call(array, value, fromIndex)
      }
      for (d = array.length, fromIndex = fromIndex ? 0 > fromIndex ? Math.max(0, d + fromIndex) : fromIndex : 0; d > fromIndex; fromIndex++) {
        if (fromIndex in array && array[fromIndex] === value) {
          return true
        }
      }
    }
    return false
  }
}
