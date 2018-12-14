export function uuid() {
  var uniqueId = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < 5; i++)
    uniqueId += possible.charAt(Math.floor(Math.random() * possible.length))

  return uniqueId
}
