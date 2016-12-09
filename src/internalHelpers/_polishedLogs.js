function logError(message) {
  // eslint-disable-next-line no-console
  console.error(message)
}

function logInfo(message) {
  // eslint-disable-next-line no-console
  console.info(message)
}

function logWarning(message) {
  // eslint-disable-next-line no-console
  console.warning(message)
}

function determineLogType(type, message) {
  if (type === 'error') logError(message)
  if (type === 'info') logInfo(message)
  if (type === 'warning') logWarning(message)
}

export default determineLogType
