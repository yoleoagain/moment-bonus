export function arrOfObjHierarchySort(arr, legacyField, sortField) {

  const hierarchySortFunc = (a, b) => a[sortField].localeCompare(b[sortField], 'en-US')

  function hierarchySort(hashArr, key, result) {
      if (hashArr[key] == undefined) return

      const arr = hashArr[key].sort(hierarchySortFunc)
      for (let i = 0; i < arr.length; i++) {
          result.push(arr[i]);
          hierarchySort(hashArr, arr[i].id, result)
      }
      return result
  }

  let hashArr = {}
  for (let i = 0; i < arr.length; i++) {
    if (hashArr[arr[i][legacyField]] == undefined) hashArr[arr[i][legacyField]] = []
    hashArr[arr[i][legacyField]].push(arr[i])
  }

  return hierarchySort(hashArr, 0, [])
}