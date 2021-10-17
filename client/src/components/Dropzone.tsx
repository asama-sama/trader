import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const Dropzone = ({setFile}: {setFile: Function}) => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    setFile(acceptedFiles[0])
  }, [setFile])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: 'text/csv' ,
    maxFiles: 1
  })

  return (
    <div {...getRootProps()} className="bg-gray-800 h-16 text-center text-gray-300 flex flex-col justify-center text-2xl">
      <input {...getInputProps()} />
      {
        isDragActive
          ? <p>Drop the files here ...</p>
          : <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default Dropzone
