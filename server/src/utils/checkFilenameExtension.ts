const checkFilenameExtension = (filename: string, extension: string) : boolean => {
  const nameParts = filename.split('.')
  return nameParts[nameParts.length - 1] === extension
}

export default checkFilenameExtension
