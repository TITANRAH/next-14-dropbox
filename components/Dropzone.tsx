'use client'

'use client'

import DropzoneComponent from 'react-dropzone'
import React from 'react'

function Dropzone() {

    const maxSize = 20971520;
    const isFileTooLarge = fileRejections.length > 0 && fileRejections[0].file.size > maxSize;
    return (
        <DropzoneComponent minSize={0} maxSize={maxSize} onDrop={acceptedFiles => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps, isDragActive, isDragReject, fileRejections }) => (
                <section>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                         {!isDragActive && 'Cick here or drop a file to upload!'}
                         {isDragActive && !isDragReject && 'Drop to upload this file!'}
                         {isDragReject && 'File type no accept, sorry!'}
                         {isFileTooLarge && (
                            <div className='text-danger mt-2'>File is too large.</div>
                         )}
                    </div>
                </section>
            )}
        </DropzoneComponent>
    )
}

export default Dropzone

