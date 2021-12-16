console.log("working")
const {safeStorage} = require("electron")
console.log("still working")
const isAvailable = safeStorage.isEncryptionAvailable()
console.log("availability, maybe:", isAvailable)


