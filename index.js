var recipes = { key: "value"}
function updateObjectWithKeyAndValue(object, key, value) {
  recipes.key='value'
  return Object.assign({ key: "value"}, {newKey: "newValue"})
}
